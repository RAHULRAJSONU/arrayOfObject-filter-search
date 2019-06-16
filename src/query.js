import "./styles.css";
import data from "./report.json";
// import * as moment from 'moment';
var moment = require("moment");

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
function search(array, filt) {
  var t0 = performance.now();
  const compareArray = (filterKeyArr, objArr) => {
    var flag = true;
    if (Array.isArray(filterKeyArr) && Array.isArray(objArr)) {
      filterKeyArr.forEach(a => {
        flag = objArr.indexOf(a) > -1;
        if (!flag) return;
      });
    }
    return flag;
  };

  const checkCurrentStblRange = (filterKeyArr, currentStbl) => {
    console.log("filterKeyArr- ", filterKeyArr, " currentStbl- ", currentStbl);
    switch (filterKeyArr) {
      case "<=200":
        return currentStbl <= 200;
      case "201 - 400":
        return currentStbl > 200 && currentStbl <= 400;
      case "401 – 600":
        return currentStbl > 400 && currentStbl <= 600;
      case "601 - 800":
        return currentStbl > 600 && currentStbl <= 800;
      case "801 – 1000":
        return currentStbl > 800 && currentStbl <= 1000;
      case ">1000":
        return currentStbl > 1000;
      default:
        return true;
    }
  };
  const checkDateRange = (range, dateToCheck) => {
    switch (range) {
      case "Next 1 Month":
        var mom = moment(new Date("06/12/2019")).add(1, "month");
        var today = new Date(new Date().toLocaleDateString());
        var dtc = new Date(dateToCheck);
        return dtc >= today && dtc <= mom.toDate();
      case "Next 1 Week":
        var mom = moment(new Date("06/12/2019")).add(1, "week");
        var today = new Date(new Date().toLocaleDateString());
        var dtc = new Date(dateToCheck);
        return dtc >= today && dtc <= mom.toDate();
      case "Next 1 Day":
        var mom = moment(new Date("06/12/2019")).add(1, "day");
        var today = new Date(new Date().toLocaleDateString());
        var dtc = new Date(dateToCheck);
        return dtc >= today && dtc <= mom.toDate();
      default:
        return true;
    }
  };
  const check = obj => {
    if (obj !== null && typeof obj === "object") {
      var flag = true;
      //console.log('obj',obj)
      for (let item in filt) {
        // console.log('===',obj[item])
        if (
          obj[item] !== undefined &&
          item === "currentStbl" &&
          filt[item].length > 0
        ) {
          var matchCount = 0;
          for (let fk in filt[item]) {
            console.log(
              "checkCurrentStblRange:: ",
              checkCurrentStblRange(filt[item][fk], obj[item])
            );
            if (checkCurrentStblRange(filt[item][fk], obj[item])) {
              console.log("currentStbl matched- ", flag);
              matchCount = matchCount + 1;
            }
          }
          if (!matchCount > 0) return false;
        } else if (
          obj[item] !== undefined &&
          moment(obj[item], "MM/DD/YYYY", true).isValid() &&
          filt[item].length > 0
        ) {
          flag = checkDateRange(filt[item][0], obj[item]);
          if (!flag) break;
        } else if (
          obj[item] !== undefined &&
          typeof obj[item] === "string" &&
          filt[item].length > 0
        ) {
          if (Array.isArray(filt[item])) {
            flag = filt[item].indexOf(obj[item]) > -1;
            if (!flag) break;
          }
        }
        if (
          obj[item] !== undefined &&
          Array.isArray(obj[item]) &&
          filt[item].length > 0
        ) {
          if (Array.isArray(filt[item])) {
            flag = compareArray(filt[item], obj[item]);
            if (!flag) break;
          }
        }
      }
    }
    return flag;
  };
  var t1 = performance.now();
  console.log("processed in: " + (t1 - t0) + " milliseconds.");
  return array.filter(check);
}
var filt = {
  partNum: ["H0X2N"],
  site: ["CCC"],
  alertType: ["High PPS"],
  recoveryFromStbl: ["Next 1 Month"],
  currentStbl: ["<=200", "201 - 400"]
};
console.log(search(data, filt));
console.log(data);
//
var ar = ["rah ngh, ulp"];
console.log(ar.includes("rah ngh, ulp"));
// var mom = moment(new Date("06/12/2019")).add(1, "month");
// var today = new Date(new Date().toLocaleDateString());
// var dtc = new Date("06/12/2019");
// console.log(dtc >= today && dtc <= mom.toDate());

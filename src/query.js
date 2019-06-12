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
  const compareArray = (arr1, arr2) => {
    var flag = false;
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
      arr1.forEach(a => {
        flag = arr2.indexOf(a) > -1;
        if (!flag) return;
      });
    }
    return flag;
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
        return false;
    }
  };
  const check = obj => {
    if (obj !== null && typeof obj === "object") {
      var flag = false;
      //console.log('obj',obj)
      for (let item in filt) {
        // console.log('===',obj[item])
        if (
          obj[item] !== undefined &&
          moment(obj[item], "MM/DD/YYYY", true).isValid()
        ) {
          flag = checkDateRange(filt[item][0], obj[item]);
        } else if (obj[item] !== undefined && typeof obj[item] === "string") {
          if (Array.isArray(filt[item])) {
            flag = filt[item].indexOf(obj[item]) > -1;
            if (!flag) break;
          }
        }
        if (obj[item] !== undefined && Array.isArray(obj[item])) {
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
  recoveryFromStbl: ["Next 1 Month"]
};
console.log(search(data, filt));
// var mom = moment(new Date("06/12/2019")).add(1, "month");
// var today = new Date(new Date().toLocaleDateString());
// var dtc = new Date("06/12/2019");
// console.log(dtc >= today && dtc <= mom.toDate());

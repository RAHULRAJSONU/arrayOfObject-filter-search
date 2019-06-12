export const getNextWeek = () => {
  var date = new Date();
  var nextWeekStart = date.getDate() - date.getDay() + 7;
  var nextWeekFrom = new Date(date.setDate(nextWeekStart));
  var nextWeekEnd = date.getDate() - date.getDay() + 6;
  var nextWeekTo = new Date(date.setDate(nextWeekEnd));

  console.log("nextWeekFrom: " + nextWeekFrom.toString());
  console.log("nextWeekTo  : " + nextWeekTo.toString());
  return {
    start: nextWeekFrom,
    end: nextWeekTo
  };
};

export const getNextMonth = () => {
  var d = new Date("2018-01-12");
  d.setMonth(d.getMonth() + 1);
  var dt = new Date(d);
  console.log("new month", dt);
  var date = new Date();
  var nextWeekStart = date.getDate() - date.getDay() + 7;
  var nextWeekFrom = new Date(date.setDate(nextWeekStart));
  var nextWeekEnd = date.getDate() - date.getDay() + 6;
  var nextWeekTo = new Date(date.setDate(nextWeekEnd));

  console.log("nextWeekFrom: " + nextWeekFrom.toString());
  console.log("nextWeekTo  : " + nextWeekTo.toString());
  return {
    start: nextWeekFrom,
    end: nextWeekTo
  };
};

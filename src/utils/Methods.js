import moment from "moment";

// function to render date in formatted way
export const renderDate = (date = undefined) => {
  return moment(date).format("DD-MMM-YYYY");
};
//function to open file in browser
export const openFile = (
  fileName = "",
  url = ""
) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.setAttribute("download", fileName || new Date());
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

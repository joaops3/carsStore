export let removeSpecialCharacters = (string: string): string => {
  return string
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, "")
    .replace(/\s/g, "");
};

export function removeMoneyRealMask(money: string): string {
  return money.toString().replace("R$", "").replace(".", "").replace(",", ".");
}


export function addMoneyRealMask(money: any) {
  // Convert to float
  money = parseFloat(money);

  return "R$" + money.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

export let onlyNumbers = (document: string) => {
  return document.replace(/\D/g, "");
};

export let formatDate = (date: Date, format?: any) => {
  // let setDate = ''
  if (!format) format = "mm/dd/yyyy";

  // set variables
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate();
  let hours = date.getHours();

  // replace day part in formated string
  format = format.replace("dd", day.toString().padStart(2, "0"));

  // replace month part in format string
  format = format.replace("mm", month.toString().padStart(2, "0"));

  // check if pattern has year part and replace in format string
  if (format.indexOf("yyyy") > -1)
    format = format.replace("yyyy", year.toString());
  else if (format.indexOf("yy") > -1)
    format = format.replace("yy", year.toString().substr(2, 2));

  // check if pattern has time period and replace in format string
  if (format.indexOf("t") > -1) {
    if (hours > 11) format = format.replace("t", "pm");
    else format = format.replace("t", "am");
  }

  // check if pattern has 24 hour part and replace in format string
  if (format.indexOf("H") > -1)
    format = format.replace("H", hours.toString().padStart(2, "0"));

  // check if pattern has 12 hour part and replace in format string
  if (format.indexOf("h") > -1) {
    if (hours > 12) hours -= 12;
    if (hours === 0) hours = 12;
    format = format.replace("h", hours.toString().padStart(2, "0"));
  }

  // check if pattern has minute part and replace in format string
  if (format.indexOf("i") > -1)
    format = format.replace("i", date.getMinutes().toString().padStart(2, "0"));

  // check if pattern has seconds part and replace in format string
  if (format.indexOf("s") > -1)
    format = format.replace("s", date.getSeconds().toString().padStart(2, "0"));

  return format;
};

export let parseDate = (stringDate: any) => {
  return (
    stringDate.substring(6) +
    "-" +
    stringDate.substring(3, 5) +
    "-" +
    stringDate.substring(0, 2)
  );
};


export function sortByDate(a: any, b: any) {
  if (a.date.toLowerCase() < b.date.toLowerCase()) {
    return -1;
  }
  if (a.date.toLowerCase() > b.date.toLowerCase()) {
    return 1;
  }
  return 0;
}
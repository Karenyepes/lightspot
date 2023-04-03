export const formatNumberWithSuffix = (num: number) => {
  if (num >= 1000) {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixNum = Math.floor(("" + num).length / 3);
    let shortNumber: number | string = parseFloat(
      (suffixNum != 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
    );
    if (shortNumber % 1 != 0) {
      shortNumber = shortNumber.toFixed(1);
    }
    return shortNumber + suffixes[suffixNum];
  } else {
    return num.toString();
  }
};

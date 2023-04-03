export const getCurrentUTCOffset = (): string => {
  // Create a new Date object with the current date and time
  const date = new Date();

  // Get the time zone offset in minutes (negative if ahead of UTC, positive if behind UTC)
  const offsetInMinutes = date.getTimezoneOffset();

  // Calculate the offset hours by dividing the absolute value of the offset in minutes by 60 and rounding down
  const offsetHours = Math.floor(Math.abs(offsetInMinutes) / 60);

  // Calculate the offset minutes by taking the absolute value of the offset in minutes modulo 60
  const offsetMinutes = Math.abs(offsetInMinutes) % 60;

  // Determine the offset sign based on whether the offset is negative or positive
  const offsetSign = offsetInMinutes >= 0 ? "-" : "+";

  // Create a string representation of the offset in the format "-+HH:MM"
  const offsetString = `${offsetSign}${offsetHours
    .toString()
    .padStart(2, "0")}:${offsetMinutes.toString().padStart(2, "0")}`;

  // return the offset string
  return offsetString;
};

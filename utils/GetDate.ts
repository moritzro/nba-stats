export function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  };
  const formattedDate = date.toLocaleDateString("de-DE", options);
  const [weekday, day, month] = formattedDate.split(".");
  return `${weekday.trim()}${day.trim()}.${month.trim()}`;
}

export function isValidInput(value: string | undefined) {
  const isNumber = /^[0-9]$/.test(value || "");
  return isNumber;
}

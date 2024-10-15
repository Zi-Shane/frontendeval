export function isValidInput(value: string | undefined) {
  const isNumber = /^[0-9]$/.test(value || "");
  return isNumber;
}

export function isNumericAndFixedLength(
  input: string,
  length: number
): boolean {
  const regex = new RegExp(`^\\d{${length}}$`);
  return regex.test(input);
}

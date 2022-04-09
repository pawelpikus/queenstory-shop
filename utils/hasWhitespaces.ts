export const hasWhitespaces = (value: string) => {
  if (!value.replace(/\s/g, "").length) {
    return false;
  }
  return true;
};

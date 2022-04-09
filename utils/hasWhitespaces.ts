export const hasWhitespaces = (value: string) => {
  if (!value.replace(/\s/g, "").length) {
    return "To pole jest wymagane";
  }
  return true;
};

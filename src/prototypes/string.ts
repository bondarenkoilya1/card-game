// Capitalize only the first letter of the entire string
String.prototype.toCapitalize = function () {
  const currentString = this as string;

  if (!currentString.length) return currentString;

  const capitalizedFirstLetter = currentString[0].toUpperCase();
  const restOfString = currentString.slice(1);

  return capitalizedFirstLetter + restOfString;
};

export {};

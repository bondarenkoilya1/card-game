// Capitalize only the first letter of the entire string
String.prototype.toCapitalize = function () {
  const currentString = this as string;

  const capitalizedFirstLetter = currentString[0].toUpperCase();
  const restOfString = currentString.slice(1);

  return capitalizedFirstLetter + restOfString;
};

export {};

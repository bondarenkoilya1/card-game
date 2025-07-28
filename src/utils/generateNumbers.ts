export const generateRandomNumber = (max: number) => Math.floor(Math.random() * max);

export const pickUniqueRandomNumbers = (quantity: number, maxRange: number) => {
  if (quantity > maxRange) {
    throw new Error("Quantity of numbers to pick cannot be greater than the range of numbers.");
  }

  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < quantity) {
    uniqueNumbers.add(generateRandomNumber(maxRange));
  }

  return Array.from(uniqueNumbers);
};

import { validateError } from "./validateError";

export const copyToClipboard = (textToCopy: string) => {
  navigator.clipboard
    .writeText(textToCopy)
    // Here I will call popup
    .then(() => console.log("Text copied successfully"))
    .catch((error) => {
      throw new Error(`Could not copy to clipboard. ${validateError(error)}`);
    });
};

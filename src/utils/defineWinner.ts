import { toast } from "react-toastify";

export const defineWinner = (
  firstName: string,
  firstScore: number,
  secondName: string,
  secondScore: number
) => {
  if (firstScore > secondScore) {
    toast.success(`${firstName} won with a total of ${firstScore} points!`);
    return;
  }

  if (secondScore > firstScore) {
    toast.info(`${secondName} won this time. Try again!`);
    return;
  }

  toast.warning("It's a draw! Give it another shot.");
};

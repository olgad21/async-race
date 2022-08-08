/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/quotes */
import getCar from "../../../API/getCar.api";

const showWinnerMessage = async (id: number, time: number) => {
  const carWinner = await getCar(id);
  const message = `${carWinner.name} won (${time}s)`;
  console.log(message);

  const winnerPopup = document.createElement('div');
  document.body.append(winnerPopup);
  winnerPopup.className = 'winner__popup';

  const winnerMessage = document.createElement('div');
  winnerMessage.classList.add('winner__popup-message');
  winnerPopup.append(winnerMessage);

  winnerMessage.innerHTML = message;

  winnerPopup.addEventListener('click', () => {
    winnerPopup.classList.add('winner__popup--inactive');
  });
};

export default showWinnerMessage;

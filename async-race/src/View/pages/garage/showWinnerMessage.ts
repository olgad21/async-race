/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/quotes */
//  import getCar from "../../../API/getCar.api";

const showWinnerMessage = async (name: string, time: number) => {
  const message = `${name} won (${time}s)`;

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

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import getCar from '../../../API/getCar.api';
import CarReceived from '../../../Interface/CarReceived';
import WinnerReceived from '../../../Interface/WinnerReceived';
import renderCarImage from '../garage/renderCarImage';

const renderWinner = (winner: WinnerReceived, name?: string, color?: string) => {
  const { wins, time } = winner;

  const winnerWrapper = document.createElement('div');
  winnerWrapper.classList.add('winner-wrapper');

  const numberField = document.createElement('div');
  numberField.innerHTML = '1';
  winnerWrapper.append(numberField);

  const colorField = document.createElement('div');
  colorField.style.height = '2rem';
  if (color) {
    colorField.innerHTML = renderCarImage(color);
  }
  winnerWrapper.append(colorField);

  const nameField = document.createElement('div');
  nameField.innerHTML = `${name}`;
  winnerWrapper.append(nameField);

  const winsField = document.createElement('div');
  winsField.innerHTML = `${wins}`;
  winnerWrapper.append(winsField);

  const bestTime = document.createElement('div');
  bestTime.innerHTML = `${time}`;
  winnerWrapper.append(bestTime);

  return winnerWrapper;
};

export const tableHeader = () => {
  const winnerWrapper = document.createElement('div');
  winnerWrapper.classList.add('winner-wrapper');

  const numberField = document.createElement('div');
  numberField.innerHTML = 'Number';
  winnerWrapper.append(numberField);

  const colorField = document.createElement('div');
  colorField.innerHTML = 'Color';
  winnerWrapper.append(colorField);

  const nameField = document.createElement('div');
  nameField.innerHTML = 'Name';
  winnerWrapper.append(nameField);

  const winsField = document.createElement('div');
  winsField.innerHTML = 'Wins';
  winnerWrapper.append(winsField);

  const bestTime = document.createElement('div');
  bestTime.innerHTML = 'Best Time';
  winnerWrapper.append(bestTime);

  return winnerWrapper;
};

export default renderWinner;

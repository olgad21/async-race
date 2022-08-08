/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import getCar from '../../../API/getCar.api';
import CarReceived from '../../../Interface/CarReceived';
import WinnerReceived from '../../../Interface/WinnerReceived';

const renderWinner = (winner: WinnerReceived, name?: string, color?: string) => {
  const { wins, time } = winner;
  // const car = await getCar(id);
  // const { name, color } = car;

  const winnerWrapper = document.createElement('div');
  winnerWrapper.classList.add('winner-wrapper');

  const numberField = document.createElement('div');
  numberField.innerHTML = '1';
  winnerWrapper.append(numberField);

  const colorField = document.createElement('div');
  colorField.innerHTML = `${color}`;
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

export default renderWinner;

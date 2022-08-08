/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import renderWinner from './renderWinner';
import WinnerReceived from '../../../Interface/WinnerReceived';
import getCars from '../../../API/getCars.api';

const tableHeader = () => {
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

const renderWinners = async (winners: WinnerReceived[]) => {
  const cars = await getCars();
  console.log(cars, 'allcars');

  const winnersContainer = document.querySelector('.winners-container');
  if (winnersContainer) {
    while (winnersContainer.firstChild) {
      winnersContainer.removeChild(winnersContainer.firstChild);
    }
  }
  const renderedWinners: HTMLDivElement[] = [];

  winners.forEach(async (winner) => {
    const { id } = winner;

    const winnerCar = cars.find((car) => car.id === id);
    console.log(winnerCar, 'found');
    // как получить машину, если они сторятся постранично
    // const car = await getCar(id);
    const renderedWinner = renderWinner(winner, winnerCar?.name, winnerCar?.color);
    renderedWinners.push(renderedWinner);
  });

  winnersContainer?.prepend(tableHeader());
  winnersContainer?.append(...renderedWinners);
  return renderedWinners;
};

export default renderWinners;

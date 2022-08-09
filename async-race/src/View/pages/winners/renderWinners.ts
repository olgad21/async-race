import renderWinner, { tableHeader } from './renderWinner';
import WinnerReceived from '../../../Interface/WinnerReceived';
import getCars from '../../../API/getCars.api';

const renderWinners = async (winners: WinnerReceived[]) => {
  const cars = await getCars();

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
    const renderedWinner = renderWinner(winner, winnerCar?.name, winnerCar?.color);
    renderedWinners.push(renderedWinner);
  });

  winnersContainer?.prepend(tableHeader());
  winnersContainer?.append(...renderedWinners);
  return renderedWinners;
};

export default renderWinners;

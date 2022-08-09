import renderWinner from './renderWinner';
import WinnerReceived from '../../../Interface/WinnerReceived';
import getCars from '../../../API/getCars.api';

const renderWinners = async (winners: WinnerReceived[]) => {
  const cars = await getCars();

  const tableBody = document.querySelector('.table-body');

  if (tableBody) {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }

  const renderedWinners: HTMLDivElement[] = [];

  winners.forEach(async (winner, index) => {
    const { id } = winner;

    const winnerCar = cars.find((car) => car.id === id);
    const renderedWinner = renderWinner(winner, winnerCar?.name, winnerCar?.color, index + 1);
    renderedWinners.push(renderedWinner);
  });

  tableBody?.append(...renderedWinners);
  return renderedWinners;
};

export default renderWinners;

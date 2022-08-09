import WinnerReceived from '../../../Interface/WinnerReceived';
import renderCarImage from '../garage/renderCarImage';
import store from '../../store';

const renderWinner = (winner: WinnerReceived, name?: string, color?: string, index?: number) => {
  const { wins, time } = winner;

  const winnerWrapper = document.createElement('div');
  winnerWrapper.classList.add('winner-wrapper');

  const numberField = document.createElement('div');
  numberField.innerHTML = `${index}` ?? '1';
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

export const renderTableHeader = () => {
  const { sortBy, sortDirection } = store;
  const tableHeader = document.querySelector('.table-header') as HTMLDivElement;

  if (tableHeader) {
    while (tableHeader.firstChild) {
      tableHeader.removeChild(tableHeader.firstChild);
    }
  }

  const headerCells = ['number', 'color', 'name', 'wins', 'time'];

  const renderedHeaderCells: HTMLDivElement[] = [];

  // render header cells
  headerCells.forEach((col) => {
    const cell = document.createElement('div');
    cell.classList.add(`sort-${col}`);
    cell.innerHTML = col === 'time' ? 'Best Time' : col;

    if (col.toLowerCase() === sortBy) {
      cell.innerHTML += sortDirection === 'ASC' ? '↑' : '↓';
    }

    renderedHeaderCells.push(cell);
    tableHeader?.append(cell);
  });
  return renderedHeaderCells;
};

export default renderWinner;

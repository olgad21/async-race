/* eslint-disable no-debugger */
/* eslint-disable no-console */
import getWinners from '../../../API/getWinners';
import store from '../../store';
import renderWinners from './renderWinners';
import { renderTableHeader } from './renderWinner';

const sortByWins = () => {
  const tableHeader = document.querySelector('.table-header') as HTMLElement;

  tableHeader?.addEventListener('click', async (e) => {
    const { sortDirection, winnersPage } = store;

    const cell = e.target as HTMLDivElement;
    const sortingRule = cell?.getAttribute('class')?.split('-')[1];

    if (sortingRule === 'wins' || sortingRule === 'time') {
      let direction: 'ASC' | 'DESC';

      if (sortingRule === store.sortBy) {
        direction = sortDirection === 'ASC' ? 'DESC' : 'ASC';
        store.sortDirection = direction;
      } else {
        direction = 'DESC';
        store.sortDirection = direction;
        store.sortBy = sortingRule;
      }

      const winners = await getWinners(winnersPage, 10, sortingRule, direction);
      renderWinners(winners);
      renderTableHeader();
    }
  });
};

const renderSortedWinners = () => {
  sortByWins();
};

export default renderSortedWinners;

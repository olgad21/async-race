import getWinners from '../../../API/getWinners';
import store from '../../store';
import renderSortedWinners from './renderSortedWinners';
import renderWinners from './renderWinners';
import renderWinPagination from './renderWinPagination';
import { renderTableHeader } from './renderWinner';
import './winners.css';
import { limits } from '../../constants';

const renderWinnersView = async () => {
  const { winnersPage, sortBy, sortDirection } = store;
  const header = document.querySelector('header');
  const winnersView = document.createElement('div');
  winnersView.classList.add('winners', 'inactive');
  header?.after(winnersView);

  const winners = await getWinners(winnersPage, limits.winners, sortBy, sortDirection);

  const winnersTotal = store.winnersCount;

  const winnersContainer = document.createElement('div');
  winnersContainer.classList.add('winners-container');

  const tableHeader = document.createElement('div');
  tableHeader?.classList.add('table-header');

  const tableBody = document.createElement('div');
  tableBody?.classList.add('table-body');
  winnersContainer.append(tableHeader, tableBody);

  winnersView.append(winnersContainer);

  renderTableHeader();
  await renderWinners(winners);

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('winners_amount-title');
  winnersView.prepend(pageTitle);
  pageTitle.innerHTML = `Winners (<span class="winners_amount">${winnersTotal}</span>)`;
  const pageNumber = store.winnersPage;

  const page = document.createElement('h2');
  page.innerHTML = `Page #<span class="winners-page-number">${pageNumber}</span>`;
  pageTitle.after(page);

  const pagination = renderWinPagination();
  winnersView.append(pagination);

  renderSortedWinners();
};

export default renderWinnersView;

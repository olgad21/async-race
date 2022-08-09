/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import getCars from '../../../API/getCars.api';
import getWinners from '../../../API/getWinners';
import store from '../../store';
import renderWinners from './renderWinners';
import renderWinPagination from './renderWinPagination';
import './winners.css';

const renderWinnersView = async () => {
  const header = document.querySelector('header');
  const winnersView = document.createElement('div');
  winnersView.classList.add('winners', 'inactive');
  header?.after(winnersView);

  const winners = await getWinners(store.winnersPage, 10);

  const winnersTotal = store.winnersCount;

  const winnersContainer = document.createElement('div');
  winnersContainer.classList.add('winners-container');
  winnersView.append(winnersContainer);

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
};

export default renderWinnersView;

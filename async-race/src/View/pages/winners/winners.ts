import getWinners from '../../../API/getWinners';

const renderWinners = async () => {
  const header = document.querySelector('header');
  const winnersView = document.createElement('div');
  winnersView.classList.add('winners', 'inactive');
  header?.after(winnersView);

  const winners = await getWinners();
  const winnersTotal = winners.length;

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('winners_amount-title');
  winnersView.prepend(pageTitle);
  pageTitle.innerHTML = `Winners (<span class="winners_amount">${winnersTotal}</span>)`;
  const pageNumber = 1;

  const page = document.createElement('h2');
  page.innerHTML = `Page #${pageNumber}`;
  pageTitle.after(page);

  // pagination
};

export default renderWinners;

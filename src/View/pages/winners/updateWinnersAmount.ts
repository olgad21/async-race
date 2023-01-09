import store from '../../store';

const updateWinnersAmount = () => {
  const pageTitle = document.querySelector('.winners_amount-title');
  if (pageTitle) {
    pageTitle.innerHTML = `Winners (<span class="winners_amount">${store.winnersCount}</span>)`;
  }
};

export const getWinnersAmount = () => {
  const winnersAmount = document.querySelector('.winners_amount')?.innerHTML;
  return Number(winnersAmount);
};

export default updateWinnersAmount;

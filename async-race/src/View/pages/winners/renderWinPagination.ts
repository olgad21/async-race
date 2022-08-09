import getWinners from '../../../API/getWinners';
import { limits, strings } from '../../constants';
import store from '../../store';
import renderWinners from './renderWinners';

const paginationBtn = (text: string) => {
  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-dark', 'pagination-btn');
  btn.innerHTML = text;
  return btn;
};
const renderNextBtn = () => {
  const nextBtn = paginationBtn(strings.nextBtn);
  nextBtn.addEventListener('click', async () => {
    store.winnersPage += 1;
    const winnersonNextPage = await getWinners(store.winnersPage, limits.winners);
    renderWinners(winnersonNextPage);
  });
  return nextBtn;
};

const renderPrevBtn = () => {
  const prevBtn = paginationBtn(strings.prevBtn);
  prevBtn.disabled = true;
  prevBtn.addEventListener('click', async () => {
    store.winnersPage -= 1;
    const winnersOnPrevPage = await getWinners(store.winnersPage, limits.winners);
    renderWinners(winnersOnPrevPage);
  });
  return prevBtn;
};

const renderWinPagination = () => {
  const paginationWrapper = document.createElement('div');
  const nextBtn = renderNextBtn();
  const prevBtn = renderPrevBtn();

  const handler = () => {
    if (Math.ceil(store.winnersCount / 10) === store.winnersPage) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    if (store.winnersPage === 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    const pageNumber = document.querySelector('.winners-page-number');
    if (pageNumber) {
      pageNumber.innerHTML = store.winnersPage.toString();
    }
  };

  prevBtn.addEventListener('click', () => {
    handler();
  });

  nextBtn.addEventListener('click', () => {
    handler();
  });

  paginationWrapper.append(prevBtn, nextBtn);
  return paginationWrapper;
};

export default renderWinPagination;

import getCars from '../../../API/getCars.api';
import { limits, strings } from '../../constants';
import store from '../../store';
import renderCars from './renderCars';

const paginationBtn = (text: string) => {
  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-dark', 'pagination-btn');
  btn.innerHTML = text;
  return btn;
};
const renderNextBtn = () => {
  const nextBtn = paginationBtn(strings.nextBtn);
  nextBtn.addEventListener('click', async () => {
    store.page += 1;
    const carsOnNextPage = await getCars(store.page, limits.garage);
    renderCars(carsOnNextPage);
  });
  return nextBtn;
};

const renderPrevBtn = () => {
  const prevBtn = paginationBtn(strings.prevBtn);
  prevBtn.disabled = true;
  prevBtn.addEventListener('click', async () => {
    store.page -= 1;
    const carsOnPrevPage = await getCars(store.page, limits.garage);
    renderCars(carsOnPrevPage);
  });
  return prevBtn;
};

const renderPagination = () => {
  const paginationWrapper = document.createElement('div');
  const nextBtn = renderNextBtn();
  const prevBtn = renderPrevBtn();

  const handler = () => {
    if (Math.ceil(store.carsCount / 7) === store.page) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    if (store.page === 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    const pageNumber = document.querySelector('.page-number');
    if (pageNumber) {
      pageNumber.innerHTML = store.page.toString();
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

export default renderPagination;

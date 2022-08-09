import renderCars from './renderCars';
import getCars from '../../../API/getCars.api';
import './garage.css';
import renderPagination from './renderPagination';
import store from '../../store';
import { limits } from '../../constants';

const renderGarage = async () => {
  const garageView = document.querySelector('.garage') as HTMLDivElement;

  const cars = await getCars(store.page, limits.garage);
  const itemsTotal = store.carsCount;

  const carsContainer = document.createElement('div');
  carsContainer.classList.add('cars-container');
  garageView.append(carsContainer);

  renderCars(cars);

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('cars_amount-title');
  garageView.prepend(pageTitle);
  pageTitle.innerHTML = `Garage (<span class="cars_amount">${itemsTotal}</span>)`;
  const pageNumber = store.page;

  const page = document.createElement('h2');
  page.innerHTML = `Page #<span class="page-number">${pageNumber}</span>`;
  pageTitle.after(page);

  const pagination = renderPagination();
  garageView.append(pagination);
};

export default renderGarage;

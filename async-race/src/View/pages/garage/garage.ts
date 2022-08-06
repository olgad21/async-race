/* eslint-disable no-console */
import renderCars from './renderCars';
import getCars from '../../../API/getCars.api';

/* eslint-disable @typescript-eslint/no-unused-vars */
const renderGarage = async () => {
  console.log(33333);
  const cars = await getCars();
  const itemsTotal = cars.length;

  const carsContainer = document.createElement('div');
  carsContainer.classList.add('cars-container');
  document.body.append(carsContainer);

  renderCars(cars);

  const pageTitle = document.createElement('h1');
  document.body.prepend(pageTitle);
  pageTitle.innerHTML = `Garage (<span class="cars_amount">${itemsTotal}</span>)`;
  const pageNumber = 1;

  const page = document.createElement('h2');
  page.innerHTML = `Page #${pageNumber}`;
  pageTitle.after(page);

  // pagination
};

export default renderGarage;

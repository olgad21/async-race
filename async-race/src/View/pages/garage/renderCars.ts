/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-console */
import renderCar from './renderCar';
import CarReceived from '../../../Interface/CarReceived';

const renderCars = (cars: CarReceived[]) => {
  const carsContainer = document.querySelector('.cars-container');
  if (carsContainer) {
    while (carsContainer.firstChild) {
      carsContainer.removeChild(carsContainer.firstChild);
    }
  }
  const renderedCars: HTMLDivElement[] = [];

  cars.forEach((car) => {
    const renderedCar = renderCar(car);
    renderedCars.push(renderedCar);
  });
  carsContainer?.append(...renderedCars);
  return renderedCars;
};

export default renderCars;

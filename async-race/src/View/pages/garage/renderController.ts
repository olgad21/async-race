/* eslint-disable no-console */
import CarCreated from '../../../Interface/CarCreated';
import CarReceived from '../../../Interface/CarReceived';
import renderCars from './renderCars';
import getCars from '../../../API/getCars.api';
import updateCarsAmount from './updateCarsAmount';
// отрисовка элементов

type CreateCarType = (obj: CarCreated) => Promise<CarReceived>;

const renderController = (name: string, callback: CreateCarType) => {
  const carSettings = document.createElement('div');
  document.body.prepend(carSettings);

  const createCarBtn = document.createElement('div');
  createCarBtn.classList.add('btn', 'btn-dark', `${name.toLowerCase()}`);
  createCarBtn.innerHTML = name;
  carSettings.append(createCarBtn);

  const carColor = document.createElement('input');
  carColor.type = 'color';
  createCarBtn.before(carColor);

  const carName = document.createElement('input');
  carName.type = 'text';
  carColor.before(carName);

  createCarBtn.addEventListener('click', async () => {
    await callback({
      name: carName.value,
      color: carColor.value,
    });
    const cars = await getCars();
    renderCars(cars);
    updateCarsAmount(cars.length);
  });
};

export default renderController;

// вызов функций createcar. deletecar, getcars, getcar по кнопкам

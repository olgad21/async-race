import CarCreated from '../../../Interface/CarCreated';
import CarReceived from '../../../Interface/CarReceived';
import renderCars from './renderCars';
import getCars from '../../../API/getCars.api';
import updateCarsAmount from './updateCarsAmount';
import store from '../../store';

type CreateCarType = (obj: CarCreated) => Promise<CarReceived>;

const renderController = (name: string, callback: CreateCarType) => {
  const garageView = document.querySelector('.garage') as HTMLDivElement;

  const carSettings = document.createElement('div');
  carSettings.classList.add('car-settings');
  garageView.prepend(carSettings);

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
    const cars = await getCars(store.page, 7);
    renderCars(cars);
    updateCarsAmount(store.carsCount);
  });
};

export default renderController;

// вызов функций createcar. deletecar, getcars, getcar по кнопкам

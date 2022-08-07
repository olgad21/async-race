/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import createCar from '../../../API/createCar.api';
import getCars from '../../../API/getCars.api';
import { strings } from '../../constants';
import generateRandomCars from './generateRandomCars';
import renderCars from './renderCars';
import updateCarsAmount from './updateCarsAmount';

const renderRaceController = (text: string) => {
  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-green', 'race-btn');
  btn.innerHTML = text;
  return btn;
};

const renderStartRaceBtn = () => {
  const startRaceBtn = renderRaceController(strings.startRaceBtn);
  return startRaceBtn;
};

const renderResetBtn = () => {
  const resetBtn = renderRaceController(strings.resetBtn);
  return resetBtn;
};

const renderGenerateCarsBtn = () => {
  const generateCarsBtn = renderRaceController(strings.generateCarsBtn);
  generateCarsBtn.addEventListener('click', async () => {
    const randomCars = generateRandomCars();
    randomCars.forEach(async (car) => {
      await createCar(car);
    });
    const cars = await getCars();
    renderCars(cars);
    updateCarsAmount(cars.length);
  });
  return generateCarsBtn;
};

const renderRaceControllers = () => {
  const raceControllers = document.createElement('div');
  const garageView = document.querySelector('.garage') as HTMLDivElement;

  const startRaceBtn = renderStartRaceBtn();
  const resetBtn = renderResetBtn();
  const generateCarsBtn = renderGenerateCarsBtn();

  raceControllers.append(startRaceBtn, resetBtn, generateCarsBtn);
  garageView.append(raceControllers);
};

export default renderRaceControllers;

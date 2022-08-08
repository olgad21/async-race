import createCar from '../../../API/createCar.api';
import getCars from '../../../API/getCars.api';
import { strings } from '../../constants';
import store from '../../store';
import generateRandomCars from './generateRandomCars';
import renderCars from './renderCars';
import startRace, { stopRace } from './controlRace';
import updateCarsAmount from './updateCarsAmount';

const renderRaceController = (text: string) => {
  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-green', 'race-btn');
  btn.innerHTML = text;
  return btn;
};

const renderStartRaceBtn = () => {
  const startRaceBtn = renderRaceController(strings.startRaceBtn);
  startRaceBtn.classList.add('start-race');
  startRaceBtn.addEventListener('click', async (e) => {
    (e.target as HTMLButtonElement).disabled = true;
    const stopRaceButton = document.querySelector('.reset-race');
    (stopRaceButton as HTMLButtonElement).disabled = false;
    startRace();
  });
  return startRaceBtn;
};

const renderResetBtn = () => {
  const resetBtn = renderRaceController(strings.resetBtn);
  resetBtn.classList.add('reset-race');
  resetBtn.addEventListener('click', (e) => {
    (e.target as HTMLButtonElement).disabled = true;
    const startRaceButton = document.querySelector('.start-race');
    (startRaceButton as HTMLButtonElement).disabled = false;
    stopRace();
  });
  return resetBtn;
};

const renderGenerateCarsBtn = () => {
  const generateCarsBtn = renderRaceController(strings.generateCarsBtn);
  generateCarsBtn.addEventListener('click', async () => {
    const randomCars = generateRandomCars();
    randomCars.forEach(async (car) => {
      await createCar(car);
    });
    const cars = await getCars(store.page, 7);
    renderCars(cars);
    updateCarsAmount(store.carsCount);
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

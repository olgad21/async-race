/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import deleteCar from '../../../API/deleteCar.api';
import CarReceived from '../../../Interface/CarReceived';
import updateCarsAmount, { getCarsAmount } from './updateCarsAmount';
import './car.css';
import controlCarEngine from '../../../API/controlCarEngine';
import switchToDriveMode from '../../../API/switchToDriveMode';
import moveCar, { stopCar } from './controlCar';
import { strings } from '../../constants';

const renderBtn = (text: string, id: number) => {
  const btn = document.createElement('div');
  btn.classList.add('btn', 'btn-light');
  btn.innerHTML = text;
  return btn;
};

const renderSelectBtn = (id: number, name: string, color: string) => {
  const selectBtn = renderBtn(strings.selectBtn, id);
  selectBtn.addEventListener('click', () => {
    const updateBtn = document.querySelector('.update');
    updateBtn?.setAttribute('data-id', id.toString());

    const carColor = document.querySelectorAll('input[type=color]')[1] as HTMLInputElement;
    const carName = document.querySelectorAll('input[type=text]')[1] as HTMLInputElement;

    carColor.value = color;
    carName.value = name;
  });
  return selectBtn;
};

const renderRemoveBtn = (id: number) => {
  const removeBtn = renderBtn(strings.removeBtn, id);
  removeBtn.addEventListener('click', async () => {
    await deleteCar(id);
    const prevCarsAmount = getCarsAmount();
    const newCarsAmount = prevCarsAmount - 1;
    updateCarsAmount(newCarsAmount);

    const carDeleted = document.querySelector(`[data-container-id='${id}']`);
    console.log(carDeleted);
    carDeleted?.remove();
  });
  return removeBtn;
};

const renderCar = (car: CarReceived) => {
  const { name, color, id } = car;

  const carWrapper = document.createElement('div');
  carWrapper.classList.add('car__wrapper');
  carWrapper.setAttribute('data-container-id', id.toString());

  const trackWrapper = document.createElement('div');
  trackWrapper.classList.add('car-track-wrapper');

  const carButtons = document.createElement('div');
  carButtons.classList.add('car-buttons');

  const carControllers = document.createElement('div');
  carControllers.classList.add('car-track-controllers');

  const carName = document.createElement('p');
  carName.innerHTML = name;

  const selectBtn = renderSelectBtn(id, name, color);
  const removeBtn = renderRemoveBtn(id);

  carButtons.append(selectBtn, removeBtn, carName);

  const startController = document.createElement('button');
  startController.classList.add('btn', 'green-btn', 'start-btn');
  startController.innerHTML = 'A';
  startController.addEventListener('click', async (e) => {
    try {
      (e.target as HTMLButtonElement).disabled = true;
      const stopControllerBtn = document.querySelector('.stop-btn');
      (stopControllerBtn as HTMLButtonElement).disabled = false;

      const { distance, velocity } = await controlCarEngine(id, 'started');
      const time = (distance / velocity) / 1000;
      moveCar(id, time);
      await switchToDriveMode(id);
    } catch (err) {
      if ((err as Error).message === '500') {
        const carBroken = document.querySelector(`[data-car-id='${id}']`) as HTMLDivElement | null;
        if (carBroken) {
          const computedStyle = window.getComputedStyle(carBroken);
          const marginLeft = computedStyle.getPropertyValue('margin-left');
          carBroken.style.marginLeft = marginLeft;
        }
      }
    }
  });

  const stopController = document.createElement('button');
  stopController.classList.add('btn', 'green-btn', 'stop-btn');
  stopController.innerHTML = 'B';
  stopController.addEventListener('click', async (e) => {
    (e.target as HTMLButtonElement).disabled = true;
    const startControllerBtn = document.querySelector('.start-btn');
    (startControllerBtn as HTMLButtonElement).disabled = false;
    await controlCarEngine(id, 'stopped');
    stopCar(id);
  });

  const carBody = document.createElement('div');
  carBody.style.backgroundColor = color;
  carBody.classList.add('car-body');
  carBody.setAttribute('data-car-id', id.toString());
  carBody.innerHTML = 'CAR';

  const carTrack = document.createElement('div');
  carTrack.classList.add('car-track');
  carTrack.style.width = '100%';
  carTrack.append(carBody);

  const flag = document.createElement('div');
  flag.classList.add('flag');
  flag.style.backgroundColor = 'red';
  flag.innerHTML = 'FLAG';

  carControllers.append(startController, stopController, carTrack);
  trackWrapper.append(carControllers, flag);
  carWrapper.append(carButtons, trackWrapper);

  return carWrapper;
};

export default renderCar;

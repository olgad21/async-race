/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import CarReceived from '../../../Interface/CarReceived';
import './car.css';
import { strings } from '../../constants';
import handleRemoveController from './handleDeleteController';
import handleStartController from './handleStartController';
import handleStopController from './handleStopController';
import store from '../../store';
import renderCarImage from './renderCarImage';
import createWinner from '../../../API/createWinner';
import getWinners from '../../../API/getWinners';
import updateWinner from '../../../API/updateWinner';
import storeWinners from './handleWinners';

const renderBtn = (text: string) => {
  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-light');
  btn.innerHTML = text;
  return btn;
};

const renderSelectBtn = (id: number, name: string, color: string) => {
  const selectBtn = renderBtn(strings.selectBtn);
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
  const removeBtn = renderBtn(strings.removeBtn);
  removeBtn.addEventListener('click', async () => {
    handleRemoveController(id);
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
    const controller = e.target as HTMLButtonElement;
    controller.disabled = true;
    (controller.nextElementSibling as HTMLButtonElement).disabled = false;
    await handleStartController(id);
  });

  const stopController = document.createElement('button');
  stopController.classList.add('btn', 'green-btn', 'stop-btn');
  stopController.disabled = true;
  stopController.innerHTML = 'B';
  stopController.addEventListener('click', async (e) => {
    const controller = e.target as HTMLButtonElement;
    controller.disabled = true;
    (controller.previousElementSibling as HTMLButtonElement).disabled = false;
    handleStopController(id);
  });

  const carBody = document.createElement('div');
  const carImage = renderCarImage(color);
  carBody.innerHTML = carImage;

  carBody.classList.add('car-body');
  carBody.setAttribute('data-car-id', id.toString());
  carBody.addEventListener('transitionend', async () => {
    await storeWinners(carBody, id);
    // const time = carBody.style.transitionDuration.slice(0, -1);
    // if (carBody.style.marginLeft === '96%') {
    //   if (!store.winner.length) {
    //     store.winner.push({ id, wins: 1, time: +time });
    //     console.log(store.winner);
    //     const winners = await getWinners();
    //     const winner = winners.find((win) => win.id === id);
    //     if (winner) {
    //       await updateWinner({ wins: winner.wins + 1, time: +time }, id);
    //     } else {
    //       await createWinner(store.winner[0]);
    //     }
    //   }
    // }
    // return store.winner;
  });

  const carTrack = document.createElement('div');
  carTrack.classList.add('car-track');
  carTrack.style.width = '100%';
  carTrack.append(carBody);

  const flag = document.createElement('div');
  flag.classList.add('flag');

  carControllers.append(startController, stopController, carTrack);
  trackWrapper.append(carControllers, flag);
  carWrapper.append(carButtons, trackWrapper);

  return carWrapper;
};

export default renderCar;

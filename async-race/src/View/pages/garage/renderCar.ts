/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import deleteCar from '../../../API/deleteCar.api';
import CarReceived from '../../../Interface/CarReceived';
import updateCarsAmount, { getCarsAmount } from './updateCarsAmount';
// import handleDeleteController from './handleDeleteController';

const renderBtn = (text: string, id: number) => {
  const btn = document.createElement('div');
  btn.classList.add('btn', 'btn-light');
  btn.innerHTML = text;
  return btn;
};

const renderSelectBtn = (id: number, name: string, color: string) => {
  const selectBtn = renderBtn('Select', id);
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
  const removeBtn = renderBtn('Remove', id);
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
  carWrapper.setAttribute('data-container-id', id.toString());

  const carContainer1 = document.createElement('div');
  const carContainer2 = document.createElement('div');
  const carContainer3 = document.createElement('div');

  const carName = document.createElement('p');
  carName.innerHTML = name;

  const selectBtn = renderSelectBtn(id, name, color);
  const removeBtn = renderRemoveBtn(id);

  carContainer1.append(selectBtn, removeBtn, carName);

  const startController = document.createElement('div');
  startController.classList.add('btn', 'green-btn', 'green-btn--active');
  startController.innerHTML = 'A';

  const stopController = document.createElement('div');
  stopController.classList.add('btn', 'green-btn');
  stopController.innerHTML = 'B';

  const carBody = document.createElement('div');
  carBody.style.backgroundColor = color;
  carBody.innerHTML = 'CAR';

  const flag = document.createElement('div');
  flag.style.backgroundColor = 'red';
  flag.innerHTML = 'FLAG';

  carContainer2.append(startController, stopController, carBody);
  carContainer3.append(carContainer2, flag);
  carWrapper.append(carContainer1, carContainer2, carContainer3);

  return carWrapper;
};

export default renderCar;

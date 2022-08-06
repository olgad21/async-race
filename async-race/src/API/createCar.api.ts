/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarCreated from '../Interface/CarCreated';
import CarReceived from '../Interface/CarReceived';

// отправка машин на сервер
const createCar = async (car: CarCreated): Promise<CarReceived> => {
  const response = await fetch(`${host}${path.garage}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(car),
  });
  const carData = await response.json();
  return carData;
};

export default createCar;

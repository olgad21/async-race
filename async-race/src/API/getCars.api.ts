/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarCreated from '../Interface/CarCreated';
import CarReceived from '../Interface/CarReceived';

// отправка машин на сервер
const getCars = async () => {
  const response = await fetch(`${host}${path.garage}`, {
    headers: {
      'X-Total-Count': '4',
    },
    method: 'GET',
  });
  const carsData: CarReceived[] = await response.json();
  return carsData;
};

export default getCars;

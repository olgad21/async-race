/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarCreated from '../Interface/CarCreated';
import CarReceived from '../Interface/CarReceived';

// отправка изменений в машине на сервер
const updateCar = async (car: CarCreated, id: number): Promise<CarReceived> => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(car),
  });
  const carData = await response.json();
  console.log('rbbs ');
  return carData;
};

export default updateCar;

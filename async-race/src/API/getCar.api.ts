/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarReceived from '../Interface/CarReceived';
import store from '../View/store';

const getCar = async (id: number): Promise<CarReceived> => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'GET',
  });
  const carData: CarReceived = await response.json();
  return carData;
};

export default getCar;

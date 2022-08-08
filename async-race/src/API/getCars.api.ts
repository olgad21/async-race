/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarReceived from '../Interface/CarReceived';
import store from '../View/store';

const getCars = async (page: number, limit = 7) => {
  const response = await fetch(`${host}${path.garage}?_page=${page}&_limit=${limit}`, {
    method: 'GET',
  });
  store.carsCount = Number(response.headers.get('x-total-count'));
  const carsData: CarReceived[] = await response.json();
  store.cars = carsData;
  return carsData;
};

export default getCars;

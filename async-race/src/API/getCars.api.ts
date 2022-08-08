/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarReceived from '../Interface/CarReceived';
import store from '../View/store';

const getCars = async (page?: number, limit?: number) => {
  const url = new URL(`${host}${path.garage}`);
  if (page) {
    url.searchParams.append('_page', page.toString());
  }
  if (limit) {
    url.searchParams.append('_limit', limit.toString());
  }
  const response = await fetch(url.toString(), {
    method: 'GET',
  });
  store.carsCount = Number(response.headers.get('x-total-count'));
  const carsData: CarReceived[] = await response.json();
  store.cars = carsData;
  return carsData;
};

export default getCars;

// `${host}${path.garage}?_page=${page}&_limit=${limit}`

import host, { path, urlParams } from '../View/constants';
import CarReceived from '../Interface/CarReceived';
import store from '../View/store';

const getCars = async (page?: number, limit?: number) => {
  const url = new URL(`${host}${path.garage}`);
  if (page) {
    url.searchParams.append(urlParams.page, page.toString());
  }
  if (limit) {
    url.searchParams.append(urlParams.limit, limit.toString());
  }
  const response = await fetch(url.toString(), {
    method: 'GET',
  });
  store.carsCount = Number(response.headers.get('x-total-count'));
  const carsData: CarReceived[] = await response.json();

  if (page || limit) {
    store.carsOnPage = carsData;
  } else {
    store.cars = carsData;
  }

  return carsData;
};

export default getCars;

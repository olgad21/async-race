import CarReceived from '../Interface/CarReceived';

type StoreType = {
  page: number,
  carsCount: number,
  cars: CarReceived[],
};

const store: StoreType = {
  page: 1,
  carsCount: 0,
  cars: [],
};

export default store;

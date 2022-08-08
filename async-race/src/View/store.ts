import CarReceived from '../Interface/CarReceived';
import WinnerReceived from '../Interface/WinnerReceived';

type StoreType = {
  page: number,
  carsCount: number,
  cars: CarReceived[],
  winner: WinnerReceived[],
};

const store: StoreType = {
  page: 1,
  carsCount: 0,
  cars: [],
  winner: [],
};

export default store;

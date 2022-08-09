import CarReceived from '../Interface/CarReceived';
import WinnerReceived from '../Interface/WinnerReceived';

type StoreType = {
  page: number,
  carsCount: number,
  cars: CarReceived[],
  winner: WinnerReceived[],
  winnersCount: number,
  carsOnPage: CarReceived[],
  winnersPage: number,
};

const store: StoreType = {
  page: 1,
  carsCount: 0,
  cars: [],
  carsOnPage: [],
  winner: [],
  winnersCount: 0,
  winnersPage: 1,
};

export default store;

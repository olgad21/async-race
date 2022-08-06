/* eslint-disable @typescript-eslint/no-unused-vars */
import deleteCar from '../../../API/deleteCar.api';
import getCars from '../../../API/getCars.api';
// import renderCars from './renderCars';
// import updateCarsAmount from './updateCarsAmount';

const handleDeleteController = async (id: number) => {
  await deleteCar(id);
  // const cars = await getCars();
  // renderCars(cars);
  // updateCarsAmount(cars.length);
};

export default handleDeleteController;

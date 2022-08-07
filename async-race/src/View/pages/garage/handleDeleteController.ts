/* eslint-disable @typescript-eslint/no-unused-vars */
import deleteCar from '../../../API/deleteCar.api';
import updateCarsAmount, { getCarsAmount } from './updateCarsAmount';

const handleRemoveController = async (id: number) => {
  await deleteCar(id);
  const prevCarsAmount = getCarsAmount();
  const newCarsAmount = prevCarsAmount - 1;
  updateCarsAmount(newCarsAmount);

  const carDeleted = document.querySelector(`[data-container-id='${id}']`);
  carDeleted?.remove();
};

export default handleRemoveController;

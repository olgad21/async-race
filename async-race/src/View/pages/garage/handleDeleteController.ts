import deleteCar from '../../../API/deleteCar.api';
import store from '../../store';
import updateWinnersAmount from '../winners/updateWinnersAmount';
import updateCarsAmount, { getCarsAmount } from './updateCarsAmount';

const handleRemoveController = async (id: number) => {
  await deleteCar(id);
  const prevCarsAmount = getCarsAmount();
  const newCarsAmount = prevCarsAmount - 1;
  updateCarsAmount(newCarsAmount);

  const carDeleted = document.querySelector(`[data-container-id='${id}']`);
  carDeleted?.remove();

  const winnerDeleted = document.querySelector(`[data-winner-id='${id}']`);
  winnerDeleted?.remove();
  store.winnersCount -= 1;
  updateWinnersAmount();
};

export default handleRemoveController;

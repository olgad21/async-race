import store from '../../store';
import handleStartController from './handleStartController';
import handleStopController from './handleStopController';

const startRace = async () => {
  const { carsOnPage } = store;
  carsOnPage.forEach(async (car) => {
    const { id } = car;
    await handleStartController(id);
  });
};

export const stopRace = () => {
  const { carsOnPage } = store;
  carsOnPage.forEach(async (car) => {
    const { id } = car;
    await handleStopController(id);
  });
};

export default startRace;

import store from '../../store';
import handleStartController from './handleStartController';
import handleStopController from './handleStopController';

const startRace = () => {
  const { cars } = store;
  cars.forEach(async (car) => {
    const { id } = car;
    await handleStartController(id);
  });
};

export const stopRace = () => {
  const { cars } = store;
  cars.forEach(async (car) => {
    const { id } = car;
    await handleStopController(id);
  });
};

export default startRace;

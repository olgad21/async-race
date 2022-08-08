import controlCarEngine from '../../../API/controlCarEngine';
import { stopCar } from './controlCar';

const handleStopController = async (id: number) => {
  await controlCarEngine(id, 'stopped');
  stopCar(id);
};

export default handleStopController;

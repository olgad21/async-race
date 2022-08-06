import updateCar from '../../../API/updateCar.api';
import CarCreated from '../../../Interface/CarCreated';
import CarReceived from '../../../Interface/CarReceived';

const handleUpdateController = async (car: CarCreated): Promise<CarReceived> => {
  const updateBtn = document.querySelector('.update');
  const id = Number(updateBtn?.getAttribute('data-id'));
  const carData = await updateCar(car, id);
  return carData;
};

export default handleUpdateController;

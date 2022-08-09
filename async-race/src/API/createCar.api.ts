import host, { path } from '../View/constants';
import CarCreated from '../Interface/CarCreated';
import CarReceived from '../Interface/CarReceived';

const createCar = async (car: CarCreated): Promise<CarReceived> => {
  const response = await fetch(`${host}${path.garage}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(car),
  });
  const carData = await response.json();
  return carData;
};

export default createCar;

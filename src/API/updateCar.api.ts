import host, { path } from '../View/constants';
import CarCreated from '../Interface/CarCreated';
import CarReceived from '../Interface/CarReceived';

const updateCar = async (car: CarCreated, id: number): Promise<CarReceived> => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(car),
  });
  const carData = await response.json();
  return carData;
};

export default updateCar;

import host, { path } from '../View/constants';
import CarReceived from '../Interface/CarReceived';

const getCar = async (id: number): Promise<CarReceived> => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'GET',
  });
  const carData: CarReceived = await response.json();
  return carData;
};

export default getCar;

import host, { path } from '../View/constants';

const deleteCar = async (id: number) => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const carData = await response.json();
  return carData;
};

export default deleteCar;

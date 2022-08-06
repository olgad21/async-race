/* eslint-disable @typescript-eslint/no-unused-vars */
import host, { path } from '../View/constants';
import CarCreated from '../Interface/CarCreated';

// отправка изменений в машине на сервер
const deleteCar = async (id: number) => {
  const response = await fetch(`${host}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const carData = await response.json();
  return carData;
};

export default deleteCar;

// удаление машин с сервера

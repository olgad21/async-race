const moveCar = (id: number, time: number) => {
  const car = document.querySelector(`[data-car-id='${id}']`) as HTMLDivElement | null;
  if (car) {
    car.style.marginLeft = '96%';
    car.style.transitionDuration = `${time.toString()}s`;
  }
};

export const stopCar = (id: number) => {
  const car = document.querySelector(`[data-car-id='${id}']`) as HTMLDivElement | null;
  if (car) {
    car.style.marginLeft = '0%';
    car.style.transitionDuration = '0s';
  }
};

export default moveCar;

/* eslint-disable no-console */
const moveCar = (id: number, time: number) => {
  const car = document.querySelector(`[data-car-id='${id}']`) as HTMLDivElement | null;
  if (car) {
    const endX = car.parentElement?.offsetWidth;
    console.log(endX, 'width');
    car.style.transform = `translateX(${endX}px)`; // определить точки старта и конца
    car.style.transitionDuration = time.toString();
  }
};

export const stopCar = (id: number) => {
  const car = document.querySelector(`[data-car-id='${id}']`) as HTMLDivElement | null;
  if (car) {
    const endX = car.parentElement?.offsetWidth;
    if (endX) {
      car.style.transform = 'translateX(0px)';
    }
  }
};

export default moveCar;

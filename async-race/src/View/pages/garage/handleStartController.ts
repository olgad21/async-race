import controlCarEngine from '../../../API/controlCarEngine';
import switchToDriveMode from '../../../API/switchToDriveMode';
import moveCar from './controlCar';

const handleStartController = async (id: number) => {
  try {
    const { distance, velocity } = await controlCarEngine(id, 'started');
    const time = (distance / velocity) / 1000;
    moveCar(id, time);
    await switchToDriveMode(id);
  } catch (err) {
    if ((err as Error).message === '500') {
      const carBroken = document.querySelector(`[data-car-id='${id}']`) as HTMLDivElement | null;
      if (carBroken) {
        const computedStyle = window.getComputedStyle(carBroken);
        const marginLeft = computedStyle.getPropertyValue('margin-left');
        carBroken.style.marginLeft = marginLeft;
      }
    }
  }
};

export default handleStartController;

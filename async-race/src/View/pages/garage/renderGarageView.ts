import createCar from '../../../API/createCar.api';
import { strings } from '../../constants';
import renderGarage from './garage';
import handleUpdateController from './handleUpdateController';
import renderController from './renderController';
import renderRaceControllers from './renderRaceControllers';

const renderGarageView = () => {
  const header = document.querySelector('header');
  const garageView = document.createElement('div');
  garageView.classList.add('garage');
  header?.after(garageView);

  renderController(strings.updateBtn, handleUpdateController);
  renderController(strings.createBtn, createCar);
  renderRaceControllers();
  renderGarage();
};

export default renderGarageView;

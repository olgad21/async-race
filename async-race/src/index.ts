/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import startApp from './View/app';
import renderController from './View/pages/garage/renderController';
import { strings } from './View/constants';
import createCar from './API/createCar.api';
import handleUpdateController from './View/pages/garage/handleUpdateController';
import renderGarage from './View/pages/garage/garage';

renderController(strings.updateBtn, handleUpdateController);
renderController(strings.createBtn, createCar);
renderGarage();

// startApp();

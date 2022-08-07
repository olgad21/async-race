/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import startApp from './View/app';

import renderHeader from './View/components/header';
import renderGarageView from './View/pages/garage/renderGarageView';
import renderWinners from './View/pages/winners/winners';

renderHeader();
renderGarageView();
renderWinners();

// startApp();

import renderHeader from './components/header';
import renderGarageView from './pages/garage/renderGarageView';
import renderWinnersView from './pages/winners/renderWinnersView';

const startApp = () => {
  renderHeader();
  renderGarageView();
  renderWinnersView();
};

export default startApp;

/* eslint-disable no-console */
import { strings } from '../constants';
import updateWinnersAmount from '../pages/winners/updateWinnersAmount';
import '../view.css';

const renderViewBtn = (text: string) => {
  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-light', 'view-btn');
  btn.innerHTML = text;
  return btn;
};

const toggleViews = () => {
  const garage = document.querySelector('.garage');
  garage?.classList.toggle('inactive');
  const winners = document.querySelector('.winners');
  winners?.classList.toggle('inactive');
};

const renderGarageViewBtn = (header: HTMLElement) => {
  const garageBtn = renderViewBtn(strings.garageViewBtn);
  garageBtn.classList.add('garage-btn');
  header.prepend(garageBtn);

  garageBtn.addEventListener('click', (e) => {
    toggleViews();
    (e.target as HTMLButtonElement).disabled = true;
    const winnersBtn = document.querySelector('.winners-btn');
    (winnersBtn as HTMLButtonElement).disabled = false;
  });
};

const renderWinnersViewBtn = (header: HTMLElement) => {
  const winnersBtn = renderViewBtn(strings.winnersViewBtn);
  winnersBtn.classList.add('winners-btn');
  header.append(winnersBtn);

  winnersBtn.addEventListener('click', (e) => {
    toggleViews();
    (e.target as HTMLButtonElement).disabled = true;
    const garageBtn = document.querySelector('.garage-btn');
    (garageBtn as HTMLButtonElement).disabled = false;
    updateWinnersAmount();
  });
};

const renderHeader = () => {
  const header = document.createElement('header');
  document.body.prepend(header);
  renderGarageViewBtn(header);
  renderWinnersViewBtn(header);
};

export default renderHeader;

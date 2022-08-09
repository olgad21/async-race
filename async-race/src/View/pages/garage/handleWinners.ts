/* eslint-disable no-console */
import createWinner from '../../../API/createWinner';
import getCar from '../../../API/getCar.api';
import getWinners from '../../../API/getWinners';
import updateWinner from '../../../API/updateWinner';
import store from '../../store';
import renderWinners from '../winners/renderWinners';
import updateWinnersAmount from '../winners/updateWinnersAmount';
import showWinnerMessage from './showWinnerMessage';

const handleWinners = async (carBody: HTMLDivElement, id: number) => {
  const time = carBody.style.transitionDuration.slice(0, -1);
  const carWinner = await getCar(id);

  if (carBody.style.marginLeft === '96%') {
    if (!store.winner.length) {
      store.winner.push({ id, wins: 1, time: +time });
      const winners = await getWinners();
      const winner = winners.find((win) => win.id === id);
      if (winner) {
        await updateWinner({ wins: winner.wins + 1, time: +time }, id);
      } else {
        await createWinner(store.winner[0]);
      }
      showWinnerMessage(carWinner.name, +time);
      renderWinners(await getWinners(store.winnersPage, 10));
      updateWinnersAmount();
    }
  }
  return store.winner;
};

export default handleWinners;

import createWinner from '../../../API/createWinner';
import getCar from '../../../API/getCar.api';
import getWinners from '../../../API/getWinners';
import updateWinner from '../../../API/updateWinner';
import { limits } from '../../constants';
import store from '../../store';
import renderWinners from '../winners/renderWinners';
import updateWinnersAmount from '../winners/updateWinnersAmount';
import showWinnerMessage from './showWinnerMessage';

const handleWinners = async (carBody: HTMLDivElement, id: number) => {
  const { sortBy, sortDirection, winnersPage } = store;
  const time = carBody.style.transitionDuration.slice(0, -1);
  const carWinner = await getCar(id);

  if (carBody.style.marginLeft === '92%') {
    if (!store.winner.length) {
      store.winner.push({ id, wins: 1, time: +time });
      const winners = await getWinners();
      const winner = winners.find((win) => win.id === id);
      if (winner) {
        if (+time > winner.time) {
          await updateWinner({ wins: winner.wins + 1, time: winner.time }, id);
        } else {
          await updateWinner({ wins: winner.wins + 1, time: +time }, id);
        }
      } else {
        await createWinner(store.winner[0]);
      }
      showWinnerMessage(carWinner.name, +time);
      renderWinners(await getWinners(winnersPage, limits.winners, sortBy, sortDirection));
      updateWinnersAmount();
    }
  }
  return store.winner;
};

export default handleWinners;

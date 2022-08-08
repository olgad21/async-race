/* eslint-disable no-console */
import createWinner from '../../../API/createWinner';
import getWinners from '../../../API/getWinners';
import updateWinner from '../../../API/updateWinner';
import store from '../../store';
import showWinnerMessage from './showWinnerMessage';

const handleWinners = async (carBody: HTMLDivElement, id: number) => {
  const time = carBody.style.transitionDuration.slice(0, -1);
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
      showWinnerMessage(id, +time);
    }
  }
  return store.winner;
};

export default handleWinners;

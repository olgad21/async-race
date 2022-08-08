/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import WinnerReceived from '../Interface/WinnerReceived';
import host, { path } from '../View/constants';

const createWinner = async (winner: WinnerReceived): Promise<WinnerReceived> => {
  const response = await fetch(`${host}${path.winners}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(winner),
  });
  const winnerData = await response.json();
  return winnerData;
};

export default createWinner;

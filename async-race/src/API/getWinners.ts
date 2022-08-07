/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import WinnerReceived from '../Interface/WinnerReceived';
import host, { path } from '../View/constants';

const getWinners = async () => {
  const response = await fetch(`${host}${path.winners}`, {
    method: 'GET',
  });

  const winnersData: WinnerReceived[] = await response.json();
  return winnersData;
};

export default getWinners;

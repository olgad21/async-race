/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import WinnerReceived from '../Interface/WinnerReceived';
import host, { path } from '../View/constants';
import store from '../View/store';

const getWinners = async () => {
  const response = await fetch(`${host}${path.winners}`, {
    method: 'GET',
  });

  const winnersData: WinnerReceived[] = await response.json();
  // store.winnersCount = Number(response.headers.get('x-total-count'));
  store.winnersCount = winnersData.length;
  return winnersData;
};

export default getWinners;

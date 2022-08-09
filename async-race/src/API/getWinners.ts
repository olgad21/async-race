/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import WinnerReceived from '../Interface/WinnerReceived';
import host, { path } from '../View/constants';
import store from '../View/store';

const getWinners = async (page?: number, limit?: number, sort?: 'wins' | 'time', order?: 'ASC' | 'DESC') => {
  const url = new URL(`${host}${path.winners}`);
  if (page) {
    url.searchParams.append('_page', page.toString());
  }
  if (limit) {
    url.searchParams.append('_limit', limit.toString());
  }
  if (sort) {
    url.searchParams.append('_sort', sort);
  }
  if (order) {
    url.searchParams.append('_order', order);
  }
  const response = await fetch(url.toString(), {
    method: 'GET',
  });

  const winnersData: WinnerReceived[] = await response.json();
  if (limit) {
    store.winnersCount = Number(response.headers.get('x-total-count'));
  } else {
    store.winnersCount = winnersData.length;
  }
  return winnersData;
};

export default getWinners;

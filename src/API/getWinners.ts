import WinnerReceived from '../Interface/WinnerReceived';
import host, { path, urlParams } from '../View/constants';
import store from '../View/store';

const getWinners = async (page?: number, limit?: number, sort?: 'wins' | 'time', order?: 'ASC' | 'DESC') => {
  const url = new URL(`${host}${path.winners}`);
  if (page) {
    url.searchParams.append(urlParams.page, page.toString());
  }
  if (limit) {
    url.searchParams.append(urlParams.limit, limit.toString());
  }
  if (sort) {
    url.searchParams.append(urlParams.sort, sort);
  }
  if (order) {
    url.searchParams.append(urlParams.order, order);
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

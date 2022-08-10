import host, { path } from '../View/constants';

const deleteWinner = async (id: number) => {
  const response = await fetch(`${host}${path.winners}/${id}`, {
    method: 'DELETE',
  });
  const winnerData = await response.json();
  return winnerData;
};

export default deleteWinner;

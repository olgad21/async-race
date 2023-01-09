import host, { path } from '../View/constants';
import WinnerReceived from '../Interface/WinnerReceived';
import WinnerCreated from '../Interface/WinnerCreated';

const updateWinner = async (car: WinnerCreated, id: number): Promise<WinnerReceived> => {
  const response = await fetch(`${host}${path.winners}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(car),
  });
  const winnerData = await response.json();
  return winnerData;
};

export default updateWinner;

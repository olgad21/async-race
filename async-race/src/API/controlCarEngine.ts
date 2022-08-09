import host from '../View/constants';

type EngineData = {
  velocity: number,
  distance: number
};

const controlCarEngine = async (id: number, status: 'started' | 'stopped'): Promise<EngineData> => {
  const response = await fetch(`${host}/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const engineData = await response.json();
  return engineData;
};

export default controlCarEngine;

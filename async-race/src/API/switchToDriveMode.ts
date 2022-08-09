import host from '../View/constants';

type DriveMode = {
  success: string,
};

const switchToDriveMode = async (id: number): Promise<DriveMode> => {
  const response = await fetch(`${host}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });

  if (!response.ok) {
    throw Error(`${response.status}`);
  }

  const engineDriveMode = await response.json();
  return engineDriveMode;
};

export default switchToDriveMode;

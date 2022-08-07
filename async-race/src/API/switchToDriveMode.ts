/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import host from '../View/constants';

type DriveMode = {
  success: string,
};

const switchToDriveMode = async (id: number): Promise<DriveMode> => {
  const response = await fetch(`${host}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  const engineDriveMode = await response.json();
  return engineDriveMode;
};

export default switchToDriveMode;

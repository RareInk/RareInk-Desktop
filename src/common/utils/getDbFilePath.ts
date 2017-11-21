import { remote } from 'electron';
import * as path from 'path';

export default function getDBFilePath(modelType: string) {
  const basePath = remote.app.getPath('userData');
  return path.join(basePath, `rareink.${modelType}.db`);
}

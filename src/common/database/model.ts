import { AsyncDatastore } from './datastore';
import getDBFilePath from '../utils/getDbFilePath';

export function initModel(model: string) {
  return new AsyncDatastore({
    filename: getDBFilePath(model)
  });
}

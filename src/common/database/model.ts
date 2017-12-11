import { AsyncDatastore } from './datastore';
import getDbFilePath from '../utils/getDbFilePath';

export function initModel(model: string) {
  return new AsyncDatastore({
    filename: getDbFilePath(model),
  });
}

import { AsyncDatastore, getDBFilePath } from './datastore';

export function initModel(model: string) {
  return new AsyncDatastore({
    filename: getDBFilePath(model)
  });
}

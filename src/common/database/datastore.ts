import { remote } from 'electron';
import * as path from 'path';
import * as Nedb from 'nedb';

export function getDBFilePath(modelType: string) {
  const basePath = remote.app.getPath('userData');
  return path.join(basePath, `rareink.${modelType}.db`);
}

interface NedbUpdateReturnMessage {
  numberOfUpdated: number;
  upsert: boolean;
  affectedDocuments?: any;
}

/**
 * Async wrapper for several NeDB functions.
 *
 * Code partially borrowed from https://github.com/sourcechord/typescript-nedb-async-sample
 *
 * @export
 * @class AsyncDatastore
 * @extends {Nedb}
 */
export class AsyncDatastore extends Nedb {
  constructor(pathOrOptions?: string | Nedb.DataStoreOptions) {
    super(pathOrOptions);
  }

  public loadDatabaseAsync(): Promise<void> {
    return new Promise((resolve, reject) => super.loadDatabase((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
  }

  public ensureIndexAsync(options: Object): Promise<void> {
    return new Promise((resolve, reject) => super.ensureIndex(<any>options, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
  }

  public removeIndexAsync(fieldName: string): Promise<void> {
    return new Promise((resolve, reject) => super.removeIndex(fieldName, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
  }

  public insertAsync<T>(newDoc: T): Promise<T> {
    return new Promise((resolve, reject) => super.insert<T>(newDoc, (err, document) => {
      if (err) {
        reject(err);
      } else {
        resolve(document);
      }
    }));
  }

  public countAsync(query: any): Promise<number> {
    return new Promise((resolve, reject) => super.count(query, (err, n) => {
      if (err) {
        reject(err);
      } else {
        resolve(n);
      }
    }));
  }

  public findAsync<T>(query: any): Promise<T[]>;
  public findAsync<T>(query: any, projection?: T): Promise<T[]> {
    if (projection) {
      return new Promise((resolve, reject) => super.find<T>(query, projection, (err, documents) => {
        if (err) {
          reject(err);
        } else {
          resolve(documents);
        }
      }));
    } else {
      return new Promise((resolve, reject) => super.find<T>(query, (err: any, documents: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(documents);
        }
      }));
    }
  }


  public findOneAsync<T>(query: any): Promise<T>;
  public findOneAsync<T>(query: any, projection?: T): Promise<T> {
    if (projection) {
      return new Promise((resolve, reject) =>
        super.findOne<T>(query, projection, (err, document) => {
          if (err) {
            reject(err);
          } else {
            resolve(document);
          }
        }));
    } else {
      return new Promise((resolve, reject) =>
        super.findOne<T>(query, (err: Error, document: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(document);
          }
        }));
    }
  }

  public updateAsync<T>(
    query: any,
    updateQuery: any,
    options?: Nedb.UpdateOptions
  ): Promise<NedbUpdateReturnMessage> {
    return new Promise((resolve, reject) =>
      // tslint:disable:align
      super.update<T>(query, updateQuery, options,
        (err: Error, numberOfUpdated: number, affectedDocuments: any, upsert: boolean) => {
          if (err) {
            reject(err);
          } else {
            resolve({ numberOfUpdated, affectedDocuments, upsert });
          }
        }));
      // tslint:enable:align
  }

  public removeAsync(query: any, options?: Nedb.RemoveOptions): Promise<number> {
    if (options) {
      return new Promise((resolve, reject) => super.remove(query, options, (err, n) => {
        if (err) {
          reject(err);
        } else {
          resolve(n);
        }
      }));
    } else {
      return new Promise((resolve, reject) => super.remove(query, (err, n) => {
        if (err) {
          reject(err);
        } else {
          resolve(n);
        }
      }));
    }
  }
}

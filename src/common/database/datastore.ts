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

  /**
   * Load the database from the datafile, and trigger the execution of buffered commands if any
   */
  public loadDatabaseAsync(): Promise<void> {
    return new Promise((resolve, reject) => super.loadDatabase((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
  }

  /**
   * Ensure an index is kept for this field. Same parameters as lib/indexes For now this function
   * is synchronous, we need to test how much time it takes We use an async API for consistency
   * with the rest of the code
   *
   * @param options Nedb.EnsureIndexOptions
   */
  public ensureIndexAsync(options: Nedb.EnsureIndexOptions): Promise<void> {
    return new Promise((resolve, reject) => super.ensureIndex(<any>options, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
  }

  /**
   * Remove an index
   *
   * @param fieldName
   */
  public removeIndexAsync(fieldName: string): Promise<void> {
    return new Promise((resolve, reject) => super.removeIndex(fieldName, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
  }

  /**
   * Insert a new document
   *
   * @param newDoc
   */
  public insertAsync<T>(newDoc: T): Promise<T> {
    return new Promise((resolve, reject) => super.insert<T>(newDoc, (err, document) => {
      if (err) {
        reject(err);
      } else {
        resolve(document);
      }
    }));
  }

  /**
   * Count all documents matching the query
   *
   * @param query A MongoDB-style query
   */
  public countAsync(query: any): Promise<number> {
    return new Promise((resolve, reject) => super.count(query, (err, n) => {
      if (err) {
        reject(err);
      } else {
        resolve(n);
      }
    }));
  }

  /**
   * Find all documents matching the query If no callback is passed, we return the cursor so that
   * user can limit, skip and finally exec
   *
   * @param query A MongoDB-style query
   */
  public findAsync<T>(query: any): Promise<T[]>;
  /**
   * Find all documents matching the query If no callback is passed, we return the cursor so that
   * user can limit, skip and finally exec
   *
   * @param query A MongoDB-style query
   * @param projection A MongoDB-style projection
   */
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

  /**
   * Find one document matching the query
   *
   * @param query A MongoDB-style query
   */
  public findOneAsync<T>(query: any): Promise<T>;
  /**
   * Find one document matching the query
   *
   * @param query A MongoDB-style query
   * @param projection A MongoDB-style projection
   */
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

  /**
   * Update all docs matching query v1.8 signature. For now, very naive implementation
   * (recalculating the whole database)
   *
   * @api private Use Datastore.update which has the same signature
   * @param query A MongoDB-style query
   * @param updateQuery A MongoDB-style query
   * @param options Optional options
   */
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

  /**
   * Remove all docs matching the query For now very naive implementation (similar to update)
   *
   * @api — private Use Datastore.remove which has the same signature
   * @param query A MongoDB-style query
   * @param options Optional options
   */
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

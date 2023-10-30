import { createPool, Pool } from "mysql2";
import { MyConfig } from "../config/app.config";

let pool: Pool | null = null;

const initializeMySqlConnector = () => {
  try {
    const c = new MyConfig().config;
    pool = createPool({ ...c });

    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        throw new Error("Failed to connect to DB");
      } else {
        console.log("Connection established.");
        connection.release();
      }
    });
  } catch (err) {
    console.error(err);
    throw new Error("Error occured while trying to initialize MySQL connector.");
  }
};

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  try {
    if (!pool) {
      initializeMySqlConnector();
    }

    return new Promise<T>((resolve, reject) => {
      pool!.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results as T);
      });
    });
  } catch (err) {
    console.error(err);
    throw new Error("Error exectuting MySQL query.");
  }
};

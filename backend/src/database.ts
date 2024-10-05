import { createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

let _connection: Connection;

export async function connect() {
  if (_connection) {
    return _connection;
  }
  _connection = await setup();

  return _connection;
}

export async function reconnect() {
  _connection = await setup();

  return _connection;
}

async function setup() {
  return await new Promise<Connection>((resolve, reject) => {
    const con = createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_TABLE,
    });

    con.connect((err) => (err ? reject(err) : resolve(con)));
  });
}

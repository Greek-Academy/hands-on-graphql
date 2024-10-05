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
      host: "localhost",
      user: "user",
      password: "password",
      database: "todo",
    });

    con.connect((err) => (err ? reject(err) : resolve(con)));
  });
}

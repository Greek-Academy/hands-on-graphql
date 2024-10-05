import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema/root";
import "dotenv/config";

const app = express();
const port = Number(process.env.PORT);

const host = process.env.HOST || "127.0.0.1";

app.use(cors());

app.all("/graphql", createHandler({ schema }));

app.listen(port, host, () => {
  console.info(`Server running at http://${host}:${port}`);
});

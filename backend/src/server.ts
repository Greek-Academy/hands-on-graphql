import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema/root";
import "dotenv/config";

const app = express();
const port = Number(process.env.PORT);

app.use(cors());

app.all("/graphql", createHandler({ schema }));

app.listen(port, process.env.HOST, () => {
  console.info(`Server running at http://localhost:${port}`);
});

import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema/root";

const app = express();
const port = 3000;

app.use(cors());

app.all("/graphql", createHandler({ schema }));

app.listen(port, "127.0.0.1", () => {
  console.info(`Server running at http://localhost:${port}`);
});

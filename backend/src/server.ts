import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schema = loadSchemaSync(`${__dirname}/schema/**/*.graphql`, {
  loaders: [new GraphQLFileLoader()],
});

const root = {
  hello: () => "Hello world!",
};

const app = express();
const port = 3000;

app.use(cors());

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

app.listen(port, "127.0.0.1", () => {
  console.info(`Server running at http://localhost:${port}`);
});

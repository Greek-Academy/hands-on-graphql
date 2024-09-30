import { CreateMessage } from "./query/create-message.graphql";
import { print } from "graphql";

const consoleEl = document.getElementById("console");

if (consoleEl === null) {
  throw new Error("Not found #console.");
}

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// クエリ と 引数 を指定する
const query = print(CreateMessage);
const input = { author: "( ^ω^)", content: "muhoho" };
const variables = { input };

fetch("http://localhost:3000/graphql", {
  method: "POST",
  headers,
  body: JSON.stringify({ query, variables }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((response) => {
    const { createMessage: message } = response.data;
    consoleEl.innerText = `id: ${message.id}\n`;
    consoleEl.innerText += `id: ${message.author}\n`;
    consoleEl.innerText += `id: ${message.content}`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

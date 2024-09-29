import { RollDice } from "./query/roll-dice.graphql";
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
const query = print(RollDice);
const variables = { dice: 3, sides: 6 };

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
    response.data.rollDice.forEach((v: number, i: number) => {
      consoleEl.innerText += `Dice${i + 1}: ${v}\n`;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

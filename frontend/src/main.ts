import { Hello } from "./query/hello.graphql";
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
const query = print(Hello);

fetch("http://localhost:3000/graphql", {
  method: "POST",
  headers,
  body: JSON.stringify({ query }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((response) => {
    consoleEl.innerText = response.data.hello;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

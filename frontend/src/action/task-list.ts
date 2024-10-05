import { print } from "graphql";
import { TaskList } from "../query/todo.graphql";
import { graphQLEndpoint, headers } from "../const";

type Task = {
  title: string;
  description: string;
};

const taskListUlEl = document.querySelector<HTMLUListElement>("#task-list")!;

fetch(graphQLEndpoint, {
  method: "POST",
  headers,
  body: JSON.stringify({ query: print(TaskList) }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((response: { data: { taskList: Task[] } }) => {
    const { taskList } = response.data;
    taskList.forEach((task) => {
      const liEl = document.createElement("li");
      liEl.innerText = `title: ${task.title}
                        description: ${task.description}`;
      taskListUlEl.append(liEl);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    return [];
  });

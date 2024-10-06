import { print } from "graphql";
import { TaskList } from "../query/todo.graphql";
import { graphQLEndpoint, headers } from "../const";

type Task = {
  taskId: string;
  title: string;
  description: string;
};

const taskListUlEl = document.querySelector<HTMLUListElement>("#task-list")!;

// 一覧の取得
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
      liEl.innerHTML = `
        <div class="task-id">ID: ${task.taskId}</div>
        <div>${task.title}</div
        <div>${task.description}</div>
      `;
      taskListUlEl.append(liEl);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    return [];
  });

import { print } from "graphql";
import { CreateTask } from "../query/todo.graphql";
import { graphQLEndpoint, headers } from "../const";

const addTaskFormEl =
  document.querySelector<HTMLFormElement>("#add-task-form")!;

addTaskFormEl.addEventListener("submit", async function (ev: SubmitEvent) {
  ev.preventDefault();

  const formData = new FormData(addTaskFormEl);
  const title = getTitle(formData);
  const description = getDescription(formData);

  await createTask(title, description);
});

function getTitle(formData: FormData) {
  const title = formData.get("title");
  if (typeof title === "string" && title !== "") {
    return title;
  }
  throw new Error("Please input the `title`.");
}

function getDescription(formData: FormData) {
  const description = formData.get("description");
  if (typeof description === "string" && description !== "") {
    return description;
  }
  throw new Error("Please input the `title`.");
}

async function createTask(title: string, description: string) {
  return fetch(graphQLEndpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: print(CreateTask),
      variables: { title, description },
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

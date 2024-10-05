export interface Task {
  taskId: string;
  categoryId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export function toTask(
  taskId: string,
  categoryId: string,
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string
): Task {
  return {
    taskId,
    categoryId,
    title,
    description,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
}

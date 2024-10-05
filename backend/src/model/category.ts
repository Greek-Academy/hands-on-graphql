export interface Category {
  categoryId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export function toCategory(
  categoryId: string,
  name: string,
  createdAt: string,
  updatedAt: string
): Category {
  return {
    categoryId,
    name,
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
  };
}

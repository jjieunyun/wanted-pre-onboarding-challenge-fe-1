export interface Todo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  status: boolean;
}

export type TodoInput = Pick<Todo, "title" | "content">;

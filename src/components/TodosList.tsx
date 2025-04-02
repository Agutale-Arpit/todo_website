import { fetchTodos, Todo } from "@/lib/actions";
import DisplayTodos from "./DisplayTodos";

export default async function TodosList() {
  const todos: Todo[] = await fetchTodos();

  return <DisplayTodos todos={todos} />;
}

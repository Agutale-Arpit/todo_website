import { fetchTodos, Todo } from "@/lib/actions";
import DisplayTodos from "./DisplayTodos";

export default async function TodosList({
  query,
}: {
  query: string
}) {
  console.log(query);
  const todos: Todo[] = await fetchTodos(query);

  return <DisplayTodos todos={todos} />;
}

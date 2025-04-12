import { fetchTodos, Todo } from "@/lib/actions";
import DisplayTodos from "./DisplayTodos";

export default async function TodosList({
  query,
  category
}: {
  query: string,
  category: string
}) {

  // console.log(query);
  const todos: Todo[] = await fetchTodos(query, category);

  return <DisplayTodos todos={todos} />;
}

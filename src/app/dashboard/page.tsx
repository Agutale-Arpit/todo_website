import { SignOut } from "@/components/auth/SignOut";
import UserAvatar from "@/components/UserAvatar";
import { auth } from "../../../auth";
import LoginPage from "@/components/LoginPage";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CreateTodoBar from "@/components/CreateTodoBar";
import DisplayTodos from "@/components/DisplayTodos";
import { Separator } from "@/components/ui/separator";
import { fetchTodos } from "@/lib/actions";

export default async function Page() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  const todos = await fetchTodos();

  return (
    <div className="h-screen bg-[#1b1b1b]">
      <div>
        <Navbar />
      </div>
      <Separator className="bg-gray-500 my-2" />
      <div className="h-full flex w-full">
        <Sidebar />
        <Separator orientation="vertical" className="bg-gray-500 mx-2" />
        <div className="flex flex-col w-full">
          <CreateTodoBar />
          <DisplayTodos todos={todos} />
        </div>
      </div>
      <div>
        <SignOut />
      </div>
      {/* <UserAvatar /> */}
    </div>
  )
}

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

export default async function Page() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="h-full flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full">
          <CreateTodoBar />
          <DisplayTodos />
        </div>
      </div>
      {/* <SignOut /> */}
      {/* <UserAvatar /> */}
    </div>
  )
}

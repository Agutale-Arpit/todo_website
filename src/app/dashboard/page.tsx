import { SignOut } from "@/components/auth/SignOut";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CreateTodoBar from "@/components/CreateTodoBar";
import { Separator } from "@/components/ui/separator";
import TodosList from "@/components/TodosList";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    category?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const category = searchParams?.category || '';
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

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
          <TodosList query={query} category={category} />
        </div>
      </div>
      <div>
        <SignOut />
      </div>
      {/* <UserAvatar /> */}
    </div>
  )
}

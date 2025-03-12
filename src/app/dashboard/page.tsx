import { SignOut } from "@/components/auth/SignOut";
import UserAvatar from "@/components/UserAvatar";
import { auth } from "../../../auth";
import LoginPage from "@/components/LoginPage";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <div>
      <div>
        DashboardPage
      </div>
      <SignOut />
      <UserAvatar />
    </div>
  )
}

import { SignOut } from "@/components/auth/SignOut";
import UserAvatar from "@/components/UserAvatar";
import { auth } from "../../../auth";
import LoginPage from "@/components/LoginPage";

export default async function Page() {
  const session = await auth()

  if (!session?.user) return <LoginPage />;

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

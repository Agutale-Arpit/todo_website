import { signOut } from "../../../auth"
import { Button } from "../ui/button"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button variant="ghost" className="w-full p-0">
        Sign Out
      </Button>
    </form>
  )
}

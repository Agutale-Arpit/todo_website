import Image from "next/image";
import { auth } from "../../auth";

export default async function UserAvatar() {
  const session = await auth();
  console.log(session);

  if (!session?.user) return null

  return (
    <div>
      <Image src={session.user.image} width={100} height={100} alt="User Avatar" />
    </div>
  )
}

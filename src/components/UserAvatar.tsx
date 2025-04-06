import Image from "next/image";
import { auth } from "../../auth";

export default async function UserAvatar() {
  const session = await auth();
  console.log(session);
  const fallbackImage = "../../public/file.svg";
  if (!session?.user) return null

  return (
    <div>
      <Image
        className="rounded-full"
        src={session.user.image ?? fallbackImage} width={40} height={40} alt="User Avatar" />
    </div>
  )
}

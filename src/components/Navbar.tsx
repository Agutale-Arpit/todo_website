import { LucideNotebookPen, ScanSearchIcon, SearchIcon, SearchXIcon } from "lucide-react";
import { auth } from "../../auth";
import UserAvatar from "./UserAvatar";

export default function Navbar() {
  const session = auth();

  return (
    <div className="mx-auto flex items-center justify-between w-full p-4">
      <div className="flex items-center">
        <LucideNotebookPen className="mx-2 size-8" />
        <div className="text-3xl font-semibold">
          NOTES
        </div>
      </div>
      <div className="flex rounded-md bg-gray-600 p-3 w-2/6 font-semibold">
        <SearchIcon className="mx-2" />
        Search notes ...
      </div>
      <div className="">
        <UserAvatar />
      </div>
    </div>
  )
}


import { FileSearchIcon, LucideNotebookPen, ScanSearchIcon, SearchIcon, SearchXIcon } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { Input } from "./ui/input";
import { DocumentMagnifyingGlassIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Search from "./Search";

export default function Navbar() {

  return (
    <div className="mx-auto flex items-center justify-between w-full p-4">
      <div className="flex items-center">
        <LucideNotebookPen className="mx-2 size-8" />
        <div className="text-3xl font-semibold">
          NOTES
        </div>
      </div>
      <Search placeholder="Search Notes..." />
      <div></div>
      <div className="">
        <UserAvatar />
      </div>
    </div>
  )
}


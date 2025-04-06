"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "./ui/button"

export default function Sidebar() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleFilter(term: string) {
    const params = new URLSearchParams(searchParams);
    params.delete('category');
    params.delete('query');
    if (term) {
      params.set('category', term);
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="p-2 m-2 space-y-3 w-1/5">
      <Button
        onClick={() => handleFilter("")}
        className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-yellow-400 w-full">
        Notes
      </Button>
      <Button
        onClick={() => handleFilter("DSA")}
        className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-pink-300 w-full">
        DSA
      </Button>
      <Button
        onClick={() => handleFilter("Projects")}
        className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-emerald-600 w-full">
        Projects
      </Button>
      <Button
        onClick={() => handleFilter("Learning")}
        className="flex border-white items-center px-5 py-3 font-semibold rounded-lg text-xl bg-purple-600 w-full" >
        Learning
      </Button>
    </div>
  )
}

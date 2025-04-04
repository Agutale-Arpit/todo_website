"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex rounded-md bg-gray-600 py-2 p-3 w-2/6 font-semibold">
      <MagnifyingGlassIcon className="size-9 mx-1" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        className="pr-4 w-full border-none"
      />
    </div>
  )
}

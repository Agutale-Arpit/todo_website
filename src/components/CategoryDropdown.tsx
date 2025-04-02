"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface CategoryDropdownProps {
  category: string;
  setCategory: (value: string) => void;
}

export function CategoryDropdown({ category, setCategory }: CategoryDropdownProps) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {category ? category : "Select Category"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
          <DropdownMenuRadioItem value="DSA">DSA</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Projects">Projects</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Learning">Learning</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


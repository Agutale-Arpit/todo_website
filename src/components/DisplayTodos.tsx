import { prisma } from "../../prisma";
import { auth } from "../../auth";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import { createPost, deletePost, updatePost } from "@/lib/actions";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import DeleteButton from "./DeleteButton";
import { Textarea } from "./ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useState } from "react";

const session = await auth();

export default async function DisplayTodos() {

  const data = await prisma.todos.findMany({
    where: {
      userId: session?.user?.id,
    }
  })

  return (
    <div className="h-5/6">
      <div className="grid grid-cols-5">
        {data.map((post) => (
          <Dialog key={post.id}>
            <DialogTrigger asChild>
              <div className="flex flex-col justify-between bg-amber-900 m-2 p-2 rounded-lg" >
                <div>
                  <div className="text-lg font-semibold">
                    {post.title}
                  </div>
                  <div className="mt-1">
                    {post.description}
                  </div>
                </div>
                <div className="inline-block w-fit bg-amber-700 rounded-sm px-2 py-0.5">
                  {post.category}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <VisuallyHidden>
                <DialogTitle>Title</DialogTitle>
              </VisuallyHidden>
              <form action={updatePost} className="grid gap-2 py-4">
                <input type="hidden" name="id" value={post.id} />

                <div className="grid grid-cols-4 items-center gap-4">
                  <Input id="title" name="title" defaultValue={post.title} placeholder="Enter title" className="font-semibold col-span-4" />
                </div>

                <div className="grid grid-cols-4 items-center gap-2">
                  <Textarea id="description" defaultValue={post.description} name="description" placeholder="Enter content" className="col-span-4" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Input id="category" defaultValue={post.category} name="category" placeholder="Enter category" className="col-span-4" />
                </div>

                <DialogFooter className="flex">
                  <Button type="submit">Save changes</Button>
                  <DeleteButton id={post.id} />
                </DialogFooter>
              </form>
            </DialogContent>

          </Dialog>
        ))}
      </div>
    </div>
  )
}

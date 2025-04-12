"use client";

import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import { createPost, deletePost, fetchTodos, updatePost } from "@/lib/actions";
import { Input } from "./ui/input";
import DeleteButton from "./DeleteButton";
import { Textarea } from "./ui/textarea";
import { inter } from "./fonts";
import { CategoryDropdown } from "./CategoryDropdown";
import { useState } from "react";

type Todo = {
  id: string;
  title: string;
  description: string;
  category: string;
};
type Props = {
  todos: Todo[];
}

export default function DisplayTodos({ todos = [] }: Props) {

  const [category, setCategory] = useState("");

  return (
    <div className={`${inter.className} mx-8 h-5/6`}>
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-4">
        {todos.map((post) => (
          <Dialog key={post.id}>
            <DialogTrigger asChild>
              <div className="flex flex-col justify-between h-auto bg-amber-900 p-3 m-0.5 rounded-lg" >
                <div>
                  <div className="text-lg font-semibold">
                    {post.title}
                  </div>
                  <div className="mt-1">
                    {post.description}
                  </div>
                </div>
                <div className="inline-block w-fit h-fit bg-amber-700 text-sm text-white rounded-sm py-0.5 px-2 mt-4">
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

                <CategoryDropdown category={category} setCategory={setCategory} />
                <input type="hidden" name="category" value={category} />

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

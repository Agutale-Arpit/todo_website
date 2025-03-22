import { PrismaClient } from "@prisma/client"
import { auth } from "../../auth";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import { createPost, deletePost, updatePost } from "@/lib/actions";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import DeleteButton from "./DeleteButton";

const prisma = new PrismaClient();
const session = await auth();

export default async function DisplayTodos() {

  const data = await prisma.todos.findMany({
    where: {
      userId: session?.user?.id,
    }
  })

  return (
    <div className="h-5/6">
      <div className="flex">
        {data.map((post) => (
          <Dialog key={post.id}>
            <DialogTrigger asChild>
              <div className="border-2 border-black rounded-2xl" >
                <div>
                  {post.title}
                </div>
                <div>
                  {post.description}
                </div>
                <div>
                  {post.category}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <VisuallyHidden>
                <DialogTitle>Title</DialogTitle>
              </VisuallyHidden>
              <form action={updatePost} className="grid gap-4 py-4">
                <input type="hidden" name="id" value={post.id} />

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">Title</Label>
                  <Input id="title" name="title" defaultValue={post.title} placeholder="Enter title" className="col-span-3" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="content" className="text-right">Content</Label>
                  <Input id="description" defaultValue={post.description} name="description" placeholder="Enter content" className="col-span-3" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">Category</Label>
                  <Input id="category" defaultValue={post.category} name="category" placeholder="Enter category" className="col-span-3" />
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

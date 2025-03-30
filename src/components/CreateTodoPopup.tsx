import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createPost } from "@/lib/actions";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Textarea } from "./ui/textarea";

export function CreateTodoPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-2/6 border-2 rounded-lg border-gray-400 bg-gray-600 px-4 py-3 drop-shadow-2xl font-semibold">Take a note...</div>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <VisuallyHidden>
          <DialogTitle>Title</DialogTitle>
        </VisuallyHidden>

        <form action={createPost} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="title" name="title" placeholder="Enter title" className="col-span-4 border border-white" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea id="description" name="description" placeholder="Take a note..." className="col-span-4 border border-white" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="category" name="category" placeholder="Enter category" className="col-span-4 border border-white" />
          </div>

          <DialogFooter>
            <Button type="submit" className="bg-gray-200">Save</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}

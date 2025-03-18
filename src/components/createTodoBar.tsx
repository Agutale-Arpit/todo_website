"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Form from 'next/form';

export default function CreateTodoBar() {
  const [open, setOpen] = useState(false);

  const handleAction = () => {
    console.log("Action performed");
  }

  return (
    <div className="flex items-center justify-center h-1/5 bg-green-100">
      <Dialog
        open={open}
        onOpenChange={(newOpen) => {
          setOpen(newOpen)
          if (!newOpen) {
            handleAction()
          }
        }}
      >
        <DialogTrigger asChild>
          <div className="border-2 border-black rounded-lg px-4 py-2">
            Create Todo
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>
            <Form action={handleAction}>
              <input className="border-2 border-black" name="title" />
              <input className="border-2 border-black" name="description" />
              <input className="border-2 border-black" name="category" />
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

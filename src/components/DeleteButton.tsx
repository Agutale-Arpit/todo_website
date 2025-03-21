"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { deletePost } from "@/lib/actions";

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="destructive"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deletePost(id);
        });
      }}
    >
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
}

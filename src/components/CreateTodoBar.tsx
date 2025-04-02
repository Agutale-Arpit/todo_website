"use client";

import { CreateTodoPopup } from "./CreateTodoPopup";

export default function CreateTodoBar() {
  return (
    <div className="flex items-center justify-center h-1/6">
      <CreateTodoPopup />
    </div>
  )
}

"use client";

import { useState } from "react";
import { CreateTodoPopup } from "./CreateTodoPopup";
import { Button } from "./ui/button";

export default function CreateTodoBar() {
  return (
    <div className="flex items-center justify-center h-1/5 bg-green-100">
      <CreateTodoPopup />
    </div>
  )
}

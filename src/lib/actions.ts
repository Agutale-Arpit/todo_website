'use server';

import { PrismaClient } from "@prisma/client";
import { auth } from "../../auth";

const prisma = new PrismaClient();

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;

  console.log(title)
  console.log(description)
  console.log(category)
  const session = await auth();
  // console.log(session);
  const userId = session?.user?.id;
  console.log(userId)

  if (!title || !description || !category || !userId) {
    return null;
  }
  console.log(userId)

  const newUser = await prisma.todos.create({
    data: {
      title: title,
      description: description,
      category: category,
      userId
    }
  })

  // console.log(title)
  // console.log(description)
  // console.log(category)
  console.log(newUser);
}

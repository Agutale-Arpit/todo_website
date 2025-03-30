'use server';

import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma";
import { auth } from "../../auth";

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;

  const session = await auth();
  const userId = session?.user?.id;

  if (!title || !description || !category || !userId) {
    return null;
  }

  const newUser = await prisma.todos.create({
    data: {
      title: title,
      description: description,
      category: category,
      userId
    }
  })
}

export async function updatePost(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const id = formData.get('id') as string;

  const session = await auth();
  const userId = session?.user?.id;

  const updateUser = await prisma.todos.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
      category: category,
      userId
    }
  })
}

export async function deletePost(id: string) {
  if (!id) return;
  await prisma.todos.delete({
    where: { id },
  });
}





















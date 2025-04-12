"use server";

import { Prisma, PrismaClient, Category } from "@prisma/client";
import { prisma } from "../../prisma";
import { auth } from "../../auth";
import { title } from "process";
import { revalidatePath } from "next/cache";

export type Todo = {
  id: string;
  title: string;
  description: string;
  category: string;
}

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;

  const session = await auth();

  const userId = session?.user?.id;

  if (!title || !description || !category || !userId || !(category in Category)) {
    return null;
  }

  const newUser = await prisma.todos.create({
    data: {
      title: title,
      description: description,
      category: category as Category,
      userId
    }
  })

  revalidatePath('/dashboard');
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
      category: category as Category,
      userId
    }
  })

  revalidatePath('/dashboard');
}

export async function deletePost(id: string) {
  if (!id) return;
  await prisma.todos.delete({
    where: { id },
  });

  revalidatePath('/dashboard');
}

export async function fetchTodos(
  query: string,
  category: string
): Promise<Todo[]> {

  const session = await auth();
  if (!session?.user?.id) {
    return [];
  }

  const where: Prisma.TodosWhereInput = {
    userId: session.user.id
  };

  if (Object.values(Category).includes(category as Category)) {
    where.category = category as Category;
  }

  if (query) {
    where.OR = [
      {
        title: {
          contains: query,
          mode: "insensitive"
        }
      },
      {
        description: {
          contains: query,
          mode: "insensitive"
        }
      }
    ];
  }

  const todos = await prisma.todos.findMany({ where });

  return todos;
}





















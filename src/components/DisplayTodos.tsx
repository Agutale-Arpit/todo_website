import { PrismaClient } from "@prisma/client"
import { auth } from "../../auth";

const prisma = new PrismaClient();

export default async function DisplayTodos() {

  const session = await auth();

  const data = await prisma.todos.findMany({
    where: {
      userId: session?.user?.id,
    }
  })


  return (
    <div className="h-4/5 bg-yellow-100">
      <div className="flex">
        {data.map((post) => (
          <div key={post.id} className="border-2 border-black rounded-2xl" >
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
        ))}
      </div>
    </div>
  )
}

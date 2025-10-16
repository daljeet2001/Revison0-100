import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request:Request, env:Env, ctx:ExecutionContext) {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate());

	console.log(`prisma ${prisma}`)
  const friend =await prisma.friend.create({
    data:{
      name:"daljeet",
      age:23
    }
  })

    // const users = await prisma
    // const result = JSON.stringify(users);
    return  Response.json(friend);
  },
} satisfies ExportedHandler<Env>;
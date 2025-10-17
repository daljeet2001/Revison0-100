import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {

    if(request.method !== "POST"){
      return new Response ('Only POST Allowed', {status:405});
    }

    const prisma = new PrismaClient({ datasourceUrl: env.DATABASE_URL, }).$extends(withAccelerate())
    const friend = await prisma.friend.create({
      data: {
        name: "arsh",
        age: 22
      }
    })

    // const users = await prisma
    // const result = JSON.stringify(users);
    return Response.json(friend);
  },
} satisfies ExportedHandler<Env>;
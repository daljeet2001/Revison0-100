import {z} from "@hono/zod-openapi";
import {createRoute} from "@hono/zod-openapi";
import {OpenAPIHono} from "@hono/zod-openapi";
import { swaggerUI } from '@hono/swagger-ui'

const ParamsSchema = z.object({
  id:z
  .string()
  .min(3)
  .openapi({
    param:{
      name:'id',
      in:'path'
    },
    example:'12212'
  }),
})

const UserSchema = z.object({
  id:z.string().openapi({
    example:'121212'
  }),
  name:z.string().openapi({
    example:'daljeet'
  }),
  age:z.number().openapi({
    example:24,
  }),
})
.openapi('User')


const route = createRoute({
  method:'get',
  path:'/users/{id}',
  request:{
    params:ParamsSchema
  },
  responses:{
    200:{
      content:{
        'application/json':{
          schema:UserSchema
        },
      },
      description:'Retrieves the user'
    },
  },
})


const app = new OpenAPIHono()

app.openapi(route,(c)=>{
  const {id} = c.req.valid('param')
  return c.json({
    id,
    age:20,
    name:"daaaljet",
  })
})


//The OpenApi documentation will be available at /doc

app.doc('/doc',{
  openapi:'3.0.0',
  info:{
    version:'1.0.0',
    title:'My Api'
  }
})


app.get('/ui', swaggerUI({ url: '/doc' }))

export default app;
import { Hono } from 'hono'

const app = new Hono()

//middlewares
app.use(async(c:any,next:any)=>{
  if(c.req.header('Authorization')) {
    //do validations here
    await next();
  }else{
    return c.text('you dont have access')
  }
})

app.post('/', async(c) => {
  const body =  await c.req.json();
  console.log(`body`,body);
  console.log(`headers ${c.req.header('authorization')} ` );
  console.log(`params ${c.req.query('name')}`);

  return c.text('Hello Hono!')
})

export default app

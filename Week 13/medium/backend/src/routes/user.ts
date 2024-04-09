import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { singinInput, singupInput } from '@parag28/medium-common';



export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
    JWT_SECRET : string;
	}
}>();


userRouter.post('/signup', async (c) => {
    const body  = await c.req.json();
    const {success} = singupInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            msg : "inputs not correct"
        })
    }


    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
      
    const user = await prisma.user.create({
        data : {
          email : body.username,
          password : body.password,
        },
      })
  
      const token = await sign({id : user.id}, c.env.JWT_SECRET)
    return c.json({
      jwt : token
    })
  })
  





  userRouter.post('/signin', async (c) => {
    const body  = await c.req.json();

    const {success} = singinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            msg : "inputs not correct"
        })
    }


    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
try{
  const user = await prisma.user.findUnique({
    where : {
      email : body.username,
      password : body.password,
    },
  });
  
    if (!user){
      c.status(403);
      return c.json({
        error : "user not found / Maybe dead."
      });
    }
    const jwt = await sign({id : user.id}, c.env.JWT_SECRET)
    return c.json({ jwt });
}catch(e){
    c.status(403);
    return c.json({
      error : "user not found / Maybe dead."
    });

}
  
  })
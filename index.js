import { PrismaClient } from '@prisma/client'
import express from 'express';


const app = express();
const prisma = new PrismaClient()

const port = process.env.PORT

app.get('/', async(req, res) => {
    const Users = await prisma.users.findMany({
        select: {
            id: true,
            username: true
        }
    })

    res.send(Users)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

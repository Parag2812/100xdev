import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// async function insertuser(username:string , password : string , firstname : string , lastname : string , email : string) {
//    const resopnse = await prisma.user.create({
//         data :{
//             username,
//             password,
//             firstname,
//             lastname,
//             email
//         }
//     })

//     console.log(resopnse);
// }

// insertuser('parag28', 'qwerty', 'prg', 'g', 'parag@gmail.com');


async function getTodos(userId: number) {
    const resopnse = await prisma.todo.findMany({
        where: {
            userID: userId
        },
        select:{
            id : true,
            title : true,
            description : true,
            done : true
        }
    })
    console.log(resopnse);
}
getTodos(1);
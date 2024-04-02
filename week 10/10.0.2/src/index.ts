import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//  const res = await prisma.user.create({
//     data: {
//         email : username,
//         password,
//         firstName,
//         lastName
//     }
//   })
//   console.log(res);
// }
//  insertUser('test@email.com', 'password1234567890', 'John','Doe');

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, firstName: string , lastName: string){
const res = await prisma.user.update({
    where:{email : username},
    data :{firstName,lastName}
})
console.log(res);
  
}
updateUser ('test@email.com', 'PARAG','GAJBHIYE');

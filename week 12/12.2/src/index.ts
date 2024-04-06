interface User{
    name : string;
    age : number;
}


function sumOfAge(user1 : User , user2 : User){

    return user1.age + user2.age;
}


const age = sumOfAge ({
    name : "John",  
    age:30
},{
    name : "Jonhy",
    age : 45
})

console.log(age);
"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({
    name: "John",
    age: 30
}, {
    name: "Jonhy",
    age: 45
});
console.log(age);

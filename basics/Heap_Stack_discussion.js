//Stack(primitive)    , Heap (Non-primitive)

let myName="Hello";

let anothername=myName;
anothername="John";


let user={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo=user
userTwo.email="hitesh@gmail.com"

console.log(user.email);
console.log(userTwo.email);
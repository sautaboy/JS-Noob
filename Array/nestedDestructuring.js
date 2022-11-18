const users = [
    { userId: 001, userName: "Ashok Giri", userAge: 20 },
    { userId: 002, userName: "Sauta Boy", userAge: 24 }

]
const [firstObject, secondObject] = users;// this will store the both objects inside the users array 
console.log(firstObject, secondObject);
const [{ userName }, { userAge }] = users; //it will take the first object inside value like user name =Ashok Giri
console.log(userName, userAge);// it will take the second object inside value like userAges =24
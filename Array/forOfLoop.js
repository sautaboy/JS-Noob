// in for in loop it will show all elements of the array which we use in loop 
    let fruits = ['Mango', 'Banana', 'Apple', 'Lemon'];
    fruits.push('Kera')//it pushes the 'Kera' element into the fruits list at last
    let fruits1 = [];// it will take all the elements of the fruits and console it 
    for (let fruit of fruits) {
        fruits1.push(fruit);
    }
    console.log(fruits1);

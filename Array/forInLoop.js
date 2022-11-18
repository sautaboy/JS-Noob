

    // In the for in lop it will show the Whole Array elements location or address like in 0 there is Apple and in 2 Banana
    let fruits = ['Apple', 'Banana', 'Mango', 'orange', 'Kera'];
    fruits.push("hello");
    let fruits1 = [];
    for (let fruit in fruits) {
        console.log(fruit); // it will show the index number of the fruits elements
        console.log(fruits[fruit]); //it will show the fruits element and fruits will show the Index Of that Elements
    }



    // We Can Clone or concat array in 3 ways
    // Concat Method
    let array1 = ['Ashok', 'Sauta', 'Kauro'];
    let array2 = [].concat(array1);
    array1.push("Kaley", "Doctor");
    console.log("This is Concat Method")
    console.log(array1 === array2);
    console.log(array1);
    console.log(array2);


    // This is splice method
    let array3 = ['Ashok', 'Sauta', 'Kauro'];
    let array4 = array3.slice([0])
    array3.push("Kaley", "Doctor");
    console.log("This is Slice Method");
    // This is Slice Method
    console.log(array3 === array4);
    console.log(array3);
    console.log(array4);


    // This is ...Method

    let array5 = ['Ashok', 'Sauta', 'Kauro'];
    let array6 = [...array5];
    array5.push("Doctor", "Balxi");
    console.log("This is ... Method");
    console.log(array5 === array6);
    console.log(array5);
    console.log(array6);




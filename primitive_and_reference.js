// Primitive Data Types
    let num1 = 5;
    let num2 = num1;
    console.log(num1);
    console.log(num2)
    num1++;
    console.log("After IncreaseMent In Num 1:")
    console.log(num1);
    console.log(num2);

    // primitive Type Maa Chai,, num1 ko value Memory stack ko katai store hunxa ani num2 pani arko thau ma gayera store hunxa ani Jaba hamile num1 ko value change garxau num1 ko store vako value matra change hunxa ani num2 ko value paila j xa tei nai hunxa change hunna 

    let array1 = ['Ashok', 'Sauta'];//Address=(001)
    let array2 = array1; // yesle Chai array1 Ko address lirako xa (address=001)
    console.log(array1);
    console.log(array2);
    console.log(`After Pushing The Value in array1:`)
    array1.push("Kauro")//Ya chai maiel array1 ma "Kauro" vanni element push gare
    console.log(array1); //address same xa (001) ani tyo address ma gayera value push vayo 
    console.log(array2)// yesko pani address same xa change hudaina  (001)nai xa tei vara yesko element pani same array1 nai hunxa 

    // Reference Type ma chai ,, 2 ta memory store hunxa yeuta chai HEAP memory hunxa jun ma chau kunai pani variable ko value ko address haru sangai value haru store vayera baseko hunxa ani num1 = num2 cha vane (num1 le num2 ko address lirako hunxa) ani jaba pani num1 ko value change hunxa num2 ko address ta same hunxa num1 jastai ani value pani change hunxa, pointer hunxa jasle chai adress bata 

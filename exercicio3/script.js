
//ARRAY ORIGINAL
let array1 = [16,19,39];
console.log(array1);

let array2 = ['ana', 'alicia', 'alcione' ];
console.log(array2);

let array3 = [19, 'alicia', true];
console.log(array3);


//ARRAY CÓPIA
let arrayOriginalCopia1 = [16,19,39];
arrayOriginalCopia1.unshift(53);
console.log(`Este é o array original ${array1}`)
console.log(`Este é o array alterado: ${arrayOriginalCopia1}`);

let arrayOriginalCopia2 = ['ana', 'alicia', 'alcione' ];
arrayOriginalCopia2.pop(-1);
console.log(arrayOriginalCopia2);

let arrayOriginalCopia3 = [19, 'alicia', true];
arrayOriginalCopia3.pop(1);
console.log(arrayOriginalCopia3);











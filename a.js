// 1. Напишите функцию extractNumbers(str), которая принимает строку и возвращает массив чисел, извлеченных из этой строки.
// console.log(extractNumbers("I have 2 apples and 3 oranges.")); // [2, 3]
// console.log(extractNumbers("My phone number is 123-456-7890.")); // [123, 456, 7890]
// console.log(extractNumbers("The house number is 101."));   // [101]
// console.log(extractNumbers("There are 7 dogs and 12 cats.")); // [7, 12]
// console.log(extractNumbers("2 and 4 are even numbers."));    // [2, 4]

// function extractNumbers(str) {
//     const result = [];
//     let number = '';

//     for (const char of str) {
//         if (!isNaN(parseInt(char))) {
//             number += char;
//         } else if (number !== '') {
//             result.push(number);
//             number = '';
//         }
//     }

//     if (number !== '') {
//         result.push(number);
//     }

//     return result;
// }
// console.log(extractNumbers("My phone number is 123-456-7890."));




// 2. Напишите рекурсивную функцию sumOfDigits, которая вычисляет сумму цифр числа. Например, для числа 1234 результат должен быть 1 + 2 + 3 + 4 = 10.
// console.log(sumOfDigits(1234)); // 10
// console.log(sumOfDigits(9876)); // 30

// function sumOfDigits(number){
//     if (number<10) return number;
//     return number%10+sumOfDigits((number-number%10)/10)
// }
// console.log(sumOfDigits(9876));


// 3. Напишите рекурсивную функцию flatten, которая превращает многомерный массив в одномерный. Например, для массива [1, [2, [3, [4]]]] результатом должна быть [1, 2, 3, 4].
// console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
// console.log(flatten([1, [2, 3], 4])); // [1, 2, 3, 4]
// console.log(flatten([1, 2, [3, [4, 5]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, 2, 3])); // [1, 2, 3]
// console.log(flatten([[[[[[1]]]]]]])); // [1]

// function flatten(arr){
//     const result =[]
//     for (let item of arr){
//         if (Array.isArray(item))
//             result.push(...flatten(item));
//         else result.push(item)
//     }
//     return result
// }
// console.log(flatten([1, [2, 3], 4]))

// 4. Напишите функцию createMultiplier, которая возвращает функцию, умножающую переданный аргумент на заданное число. Например, если createMultiplier(2) возвращает функцию, то при передаче аргумента 5 она должна вернуть 10.
// const multiplierBy2 = createMultiplier(2);
// console.log(multiplierBy2(5)); // 10
// const multiplierBy3 = createMultiplier(3);
// console.log(multiplierBy3(5)); // 15
// const multiplierBy4 = createMultiplier(4);
// console.log(multiplierBy4(3)); // 12
// const multiplierBy10 = createMultiplier(10);
// console.log(multiplierBy10(7)); // 70


// function createMultiplier(n){
//     let result = n;
//     return (a)=>result*a
// }
// const multiplierBy10 = createMultiplier(10);
// console.log(multiplierBy10(7));


// 5. Напишите рекурсивную функцию reverseString, которая принимает строку и возвращает ее в обратном порядке.
// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("world")); // "dlrow"

// function reverseString(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseString("hello"));

// 6. Напишите функцию counter, которая будет возвращать другую функцию, инкрементирующую счетчик. Счетчик должен сохраняться между вызовами функции. Воспользуйтесь замыканием для реализации.
// const count = counter();
// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3
// console.log(count()); // 4
// console.log(count()); // 5

// function counter(){
//     let rresult =1
//     return ()=>rresult++
// }
// const count = counter();
// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3
// console.log(count()); // 4
// console.log(count()); // 5

// 7. Задача: Напишите рекурсивную функцию fibonacci, которая возвращает n-й элемент последовательности Фибоначчи. Последовательность Фибоначчи начинается с 0 и 1, а каждый следующий элемент является суммой двух предыдущих.

// console.log(fibonacci(5)); // 5 - т.к. (0, 1, 1, 2, 3, 5)
// console.log(fibonacci(7)); // 13 - т.к. (0, 1, 1, 2, 3, 5, 8, 13)
// console.log(fibonacci(8)); // 21 - т.к. (0, 1, 1, 2, 3, 5, 8, 13, 21)

// function fibonacci(n){
//     if (n<3) return 1
//     return fibonacci(n-2)+fibonacci(n-1)
// }
// console.log(fibonacci(5));

// 8. Напишите функцию generatePassword(length), которая генерирует надежный пароль заданной длины. Пароль должен содержать:
// хотя бы одну заглавную букву,
// хотя бы одну строчную букву,
// хотя бы одну цифру,
// хотя бы один специальный символ (например, !@#$%^&*()).
// Пароль должен быть случайным, и его длина передается как параметр.

// function generatePassword(len){
//     const cap = 'QWERTYUIOPASDFGHJKLZXCVBNM'
//     const uncap = 'qwertyuiopasdfghjklzxcvbnm'
//     const symb = '!@#$%^&*()'
//     const dig = '1234567890'
//     const all = '1234567890!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
//     let result = ''
//     for (let i=0;i<len-4;i++){
//         result+=all[Math.floor(Math.random()*all.length)]
//     }
//     result+=cap[Math.floor(Math.random()*cap.length)]
//     result+=uncap[Math.floor(Math.random()*uncap.length)]
//     result+=symb[Math.floor(Math.random()*symb.length)]
//     result+=dig[Math.floor(Math.random()*dig.length)]
//     let arr = result.split('')
//     for (let i = arr.length-1;i>0;i--){
//         let j = Math.floor(Math.random()*(i+1))
//         let temp = arr[j]
//         arr[j]=arr[i]
//         arr[i]=temp
//     }
//     const finresult = arr.join('')
//     return finresult
// }
// console.log(generatePassword(8));

// console.log(generatePassword(12)); // Пример: "A2b$8dF9zW#1"
// console.log(generatePassword(16)); // Пример: "Wb!4Tc$h5&1uBx9F"
// console.log(generatePassword(4)); // Должен быть надежный пароль длиной 8 символов

// 9. Напишите функцию sumNumbers(str), которая принимает строку, содержащую числа (целые числа или с плавающей точкой), и возвращает их сумму. Числа могут быть разделены пробелами, запятыми или другими разделителями.


// function sumNumbers(str){
//     const regex =/[-,\s]/g
//     const arr = str.replace(regex,'!').split('!')
//     let sum=0
//     for (let i of arr){
//         sum+=Number(i)
//     }
//     return sum
// }
// console.log(sumNumbers("10, 20, 30, 40"));
// console.log(sumNumbers("10 20 30"));        // 60
// console.log(sumNumbers("5, 10, 15, 20"));   // 50
// console.log(sumNumbers("1.5 2.5 3.5"));     // 7.5
// console.log(sumNumbers("10, 20, 30, 40"));  // 100
// console.log(sumNumbers("5 10 15"));         // 30
// console.log(sumNumbers("100.5 200.5"));    // 301

// 10. Напишите функцию createCounter, которая возвращает объект с двумя методами:
// increment(): увеличивает счетчик на 1 и возвращает текущее значение.
// decrement(): уменьшает счетчик на 1 и возвращает текущее значение.
// Изначально значение счетчика равно 0.

// function createCounter(){
//     let count = 0
//     return obj={
//         increment :()=>++count,
//         decrement :()=>--count,
//     }
// }

// const counter1 = createCounter();
// console.log(counter1.increment()); // 1
// console.log(counter1.increment()); // 2
// console.log(counter1.decrement()); // 1

// const counter2 = createCounter();
// console.log(counter2.decrement()); // -1
// console.log(counter2.increment()); // 0

// 11. Напишите функцию swapElements(arr, index1, index2), которая меняет местами два элемента массива по указанным индексам.
// console.log(swapElements([1, 2, 3, 4, 5, 6], 0, 2)); // [3, 2, 1, 4, 5, 6]
// console.log(swapElements([5, 6, 7, 8], 1, 3)); // [5, 8, 7, 6]

// function swapElements(arr,index1,index2){
//     arr[index2]+=arr[index1]
//     arr[index1]=arr[index2]-arr[index1]
//     arr[index2]-=arr[index1]
//     return arr
// }
// console.log(swapElements([5, 6, 7, 8], 1, 3));
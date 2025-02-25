// 1. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (где N — длина массива + 1) с одним пропущенным числом и возвращает это пропущенное число.

// function findMissingNumber(arr) {
//     let j = 0;
//     for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
//         if (i != arr[j]) { return i }
//         j++
//     }

// }


// console.log(findMissingNumber([1, 2, 4, 5])); // 3
// console.log(findMissingNumber([1, 3, 4, 5, 6])); // 2
// console.log(findMissingNumber([-10, -8, -7])); // -9
// console.log(findMissingNumber([995, 996, 998])); // 997

// 2. Напишите функцию findFirstNonRepeatingCharacter(str), которая принимает строку и возвращает первый неповторяющийся символ в строке. Если такого символа нет, верните null.

// function findFirstNonRepeatingCharacter(str) {
//     let charCount = {};
//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i] in charCount)) {
//             charCount[str[i]] = 1;
//         } else {
//             charCount[str[i]]++;
//         }
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             return str[i]; 
//         }
//     }
//     return null; 
// }

// console.log(findFirstNonRepeatingCharacter("swiss")); // "w"
// console.log(findFirstNonRepeatingCharacter("aabbcc")); // null

// 3. Напишите функцию findAllPermutations(str), которая принимает строку и возвращает массив всех возможных перестановок символов в строке.

// function findAllPermutations(str) {
//     if (str.length <= 1) {
//         return [str];
//     }

//     const permutations = new Set(); // Используем Set для хранения уникальных перестановок

//     for (let i = 0; i < str.length; i++) {
//         const currentChar = str[i];
//         const remainingChars = str.slice(0, i) + str.slice(i + 1);

//         const remainingPermutations = findAllPermutations(remainingChars);

//         for (const permutation of remainingPermutations) {
//             permutations.add(currentChar + permutation); // Добавляем в Set
//         }
//     }

//     return Array.from(permutations); // Преобразуем Set обратно в массив
// }

// // Пример использования:
// console.log(findAllPermutations("aab"));
// // Вывод: [ 'aab', 'aba', 'baa' ]

// console.log(findAllPermutations("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
// // console.log(findAllPermutations("aab")); // ["aab", "aba", "baa"]

// 4. Напишите функцию findAllSubsets(arr), которая принимает массив и возвращает массив всех возможных подмножеств этого массива.

// function findAllSubsets(arr) {
//     if (arr.length === 0) {
//         return [[]];
//     }

//     const firstElement = arr[0];
//     const restSubsets = findAllSubsets(arr.slice(1));
//     const allSubsets = [];

//     restSubsets.forEach(subset => {
//         allSubsets.push(subset);
//     });


//     restSubsets.forEach(subset => {
//         allSubsets.push([firstElement, ...subset]);
//     });

//     return allSubsets;
// }

// console.log(findAllSubsets([1, 2, 3])); // [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

// 5. Напишите функцию findAllCombinations(arr, target), которая принимает массив чисел и целевое значение, и возвращает все комбинации чисел из массива, которые в сумме дают целевое значение.

// function findAllCombinations(arr, target) {
//     const result = [];

//     function backtrack(index, currentSum, currentCombination) {
//         if (currentSum === target) {
//             result.push([...currentCombination]);
//             return;
//         }
//         if (currentSum > target || index >= arr.length) {
//             return;
//         }
//         currentCombination.push(arr[index]);
//         backtrack(index, currentSum + arr[index], currentCombination);
//         currentCombination.pop();
//         backtrack(index + 1, currentSum, currentCombination);
//     }
//     backtrack(0, 0, []);
    
//     return result;
// }

// console.log(findAllCombinations([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
// console.log(findAllCombinations([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

// 6. Напишите функцию findLongestPalindrome(str), которая принимает строку и возвращает самую длинную подстроку, которая является палиндромом.
function findLongestPalindrome(str) {
    if (str.length < 1) return "";

    let start = 0;
    let maxLength = 1; 

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--;
            right++;
        }
    }

    // Проверяем каждый символ как центр возможного палиндрома
    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return str.substring(start, start + maxLength);
}
console.log(findLongestPalindrome("babad")); // "bab" или "aba"
console.log(findLongestPalindrome("cbbd")); // "bb"

// 7. Напишите функцию findIntersection(arr1, arr2), которая принимает два массива и возвращает массив их пересечения (элементы, которые присутствуют в обоих массивах).

// function findIntersection(arr1,arr2){
//     const result = arr1.concat(arr2)
//     const final = []
//     for (let elem of result){
//         if ((arr1.includes(elem) && arr2.includes(elem))&& !final.includes(elem)){
//             final.push(elem)
//         }
//         else{
//             continue;
//         }
//     }
//     return final

// }

// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
// console.log(findIntersection([1, 2, 3], [4, 5, 6])); // []

// 8. Напишите функцию findUnion(arr1, arr2), которая принимает два массива и возвращает массив их объединения (все уникальные элементы из обоих массивов).

// function findUnion(arr1,arr2){
    // const result = arr1.concat(arr2)
    // const final = []
    // for (let elem of result){
    //     if ((arr1.includes(elem) || arr2.includes(elem))&& !final.includes(elem)){
    //         final.push(elem)
    //     }
    //     else{
    //         continue;
    //     }
    // }
    // return final
// }

// console.log(findUnion([1, 2, 3, 3], [3, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(findUnion([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 9. Напишите функцию findSymmetricDifference(arr1, arr2), которая принимает два массива и возвращает массив симметричной разности (элементы, которые присутствуют только в одном из массивов).

// function findSymmetricDifference(arr1,arr2){
    // const result = arr1.concat(arr2)
    // const final = []
    // for (let elem of result){
    //     if (!(arr1.includes(elem) && arr2.includes(elem))){
    //         final.push(elem)
    //     }
    //     else{
    //         continue;
    //     }
    // }
    // return final
// }

// console.log(findSymmetricDifference([1, 2, 3, 4], [3, 4, 5, 6])); // [1, 2, 5, 6]
// console.log(findSymmetricDifference([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// 10. Напишите функцию binarySearchLastOccurrence(arr, target), которая принимает отсортированный массив и целевое значение, и возвращает индекс вхождения целевого значения. Если элемент не найден, верните -1. (Бинарный поиск)

// function binarySearchLastOccurrence(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     let result = -1;

//     while (left <= right) {
//         const mid = Math.floor(left + (right - left) / 2);

//         if (arr[mid] > target) {
//             right = mid - 1;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else { 
//             result = mid;
//             left = mid + 1;
//         }
//     }

//     return result;
// }

// console.log(binarySearchLastOccurrence([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearchLastOccurrence([1, 2, 3, 4, 5], 4)); // 3
// console.log(binarySearchLastOccurrence([1, 2, 3, 4, 5], 6)); // -1
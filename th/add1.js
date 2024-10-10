// function calculateTemp(tempt) {
//    return tempt.map(temp => ((temp-32)*(5/9)).toFixed(1))
// }

// // ตัวอย่างการใช้งาน
// const temp1 = [14.0, 15.8, 24.8, 26.6, 32.0];
// console.log(calculateTemp(temp1));

// const temp2 = [14.0, 32.0, 41.0, -13.0, -9.4];
// console.log(calculateTemp(temp2));

//////////////////////////////////////////////////////

// function sumOddNumber(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0 && (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) && numbers[i] % 11 !== 0) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }

// function sumOddNumber(numbers) {
//   return numbers.filter((num) => num % 2 !== 0 && (num % 3 === 0 || num % 5 === 0) && num % 11 !== 0).reduce((acc, current) => acc + current, 0);
// }

// const numbers1 = [1, 2, 3, 5, 6, 8, 11, 13];
// console.log(sumOddNumber(numbers1)); // 8 (จาก [3, 5])

// const numbers2 = [6, 8, 10, 15, 11, 19, 21, 20, 33, 55];
// console.log(sumOddNumber(numbers2)); // 36 (จาก [15, 21])

////////////////////////////////////////////////////////////////////////////////////////////////

function reverseText(text){
return text.toLowerCase().split("").reverse().join("")
}

console.log(reverseText("Tech Up"))

//
// const input = [
//     "Chocolate is $15.",
//     "George has $100.",
//     "Ross has $80.",
//     "George buys 5 chocolates.",
//     "Ross buys 1 chocolate.",
// ];
//
// function shoppingCalculation(input) {
//     // your code
//     let is = ''
//     let has = ''
//     let buys = ''
//     return input.map(e => {
//         e = e.split(' ').map(x => {
//
//         })
//
//         return e
//     })
// }
//
// console.log(shoppingCalculation(input))

// const alphabetPosition = text => {
//     const newText = text.toLowerCase()
//     text = newText.split('').map((s, i) => s.toLowerCase() !== s.toUpperCase()
//         ? (newText.charCodeAt(i) - 96) :
//         undefined).filter(Boolean).join(' ');
//     return text;
// };
//
// console.log(alphabetPosition("The sunset sets at twelve o'clock."))



const findOdd = A => {
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
    }
    return 0;
};

 console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

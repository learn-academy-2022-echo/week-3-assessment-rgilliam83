// // ASSESSMENT 3: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// the call back funtion of the describe contains the it method. the it method takes a string that describes what the test is doing and a call.
describe("fib", () => {
    it("takes in a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        
        expect(fib(fibLength1)).toEqual([1,1,2,3,5,8]);
        expect(fib(fibLength2)).toEqual([1,1,2,3,5,8,13,21,34,55])
    })
})

describe("fib", () => {
    it("takes a number", () => {
        expect(fib(fibLength1)).toEqual([1,1,2,3,5,8])
        expect(fib(fibLength2)).toEqual([1,1,2,3,5,8,13,21,34,55])
    })
})


// write test
// run testing suite to see a failing test
// const fibTest = (fibLength1) => {
//     return fibLength1.valueOf(() => {
//         for (let fibTest = [i], i=1; i<=2; i++)
//         fibTest.push(fibLength1[i] + fibLength2[i-1])

//     })
    
    const fib = (number) => {
        let newArr = [0, 1];
        for (let i = 2; i <= number; i++){
          newArr.push(newArr[i - 2] + newArr[i - 1])
        }
        return newArr.slice(1)
        }
    





// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("onlyOdd", () => {
    it("Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest", () =>{

        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]

        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
        
    })
})

const onlyOdd = (array) => {
    let newArr =[]
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0 && typeof array[i] === 'number')
        newArr.push(array[i])
    }
    return newArr.sort((a,b) => a-b)
}
// b) Create the function that makes the test pass.




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

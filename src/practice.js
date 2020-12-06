//-----------------------------------------------------------------------------------------------------------
// // function test() {
// //     return new Promise((resolve, reject) => {
// //         reject('Whoops')
// //     }).catch((err) => {
// //         console.log('Error detected' + err.Error)
// //     }).then(data => data + 'hi')
// // }
// function test() {
//     return new Promise((resolve, reject) => {
//         reject('Whoops')
//     }).then(data => 'Hi' + data)

// }
// test().then((data) => {
//     console.log('Promise executed' + data)
// }).catch(err => {
//     console.log('in error' + err)
// })

// //What ever is returnig from the promise either from reslove or from reject, that would be captured in .then at calling time.

// let name = "Mark"

// let user = {
//     name: "John",
//     hi() {
//         return this.name
//     }
// }

// //let hi = user.hi
// console.log(user.hi)


function test() {
    console.log('Zero')
}

// function test(a, b) {
//     console.log(a, b)
// }

// function test(a) {
//     console.log(a)
// }



test()
test(1)
test(1, 2, 3, 4)
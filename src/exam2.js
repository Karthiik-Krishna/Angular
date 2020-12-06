//    let ipArr = [-1, -3, -2]
//    let tempArr = [...new Set(ipArr.sort((a, b) => a > b))]
//    console.log(tempArr)
//    for (let i = 0; i < tempArr.length; i++) {}



//    let maxNum = Math.max(...tempArr)
//        //console.log(maxNum)
//    let actualSum = (maxNum * (maxNum + 1)) / 2
//    console.log(actualSum)
//    let arrSum = tempArr.reduce((acc, val) => acc + val)
//    let reqVal = actualSum - arrSum
//    if (reqVal <= 0) {
//        console.log(reqVal + 1)
//    } else if (reqVal == 0) {
//        console.log('0 diff')
//        console.log(maxNum + 1)
//    } else {
//        console.log(reqVal)
//    }


//    for (let i = 0; i < tempArr.length - 1; i++) {
//        if (tempArr[i + 1] - tempArr[i] != 1) {
//            console.log(tempArr[i])
//        }
//    }
var letters = [1, 3, 5];
var opArr = [];
var temp = "";
var letLen = Math.pow(2, letters.length);
let maxWe = 9

for (var i = 0; i < letLen; i++) {
    temp = "";
    for (var j = 0; j < letters.length; j++) {
        if ((i & Math.pow(2, j))) {
            temp += letters[j].toString()
        }
    }
    if (temp !== "") {
        opArr.push((temp));
    }
}

var sampleArr = [...opArr]

for (let j = 0; j < opArr.length; j++) {
    let tempArr = opArr[j].split('')
    tempArr = tempArr.map(el => parseInt(el))
    opArr[j] = tempArr.reduce((acc, val) => acc + val)
}
for (let i = 0; i < opArr.length; i++) {
    opArr[i] = [opArr[i], sampleArr[i]]

}

opArr = opArr.sort((a, b) => b[0] - a[0])
for (let x = 0; x < opArr.length; x++) {
    if (opArr[x][0] < maxWe) {
        console.log(opArr[x][1].split(''))
        break
    }
}

//console.log(opArr.sort((a, b) => b[0] - a[0]));
//console.log(sampleArr);

// }
// var sampleArr = [...opArr]

// for (let j = 0; j < opArr.length; j++) {
//     if (opArr[j] > 10) {
//         let tempArr = opArr[j].toString().split('')
//         console.log(tempArr.reduce((acc, val) => {
//             return acc + val
//         }), 2)
//     }
// }
// for (let j = 0; j < opArr.length; j++) {
//     if (opArr[j].length > 1) {
//         let tempArr = opArr[j].split('')
//         opArr[j] = tempArr.reduce((acc, val) => acc + parseInt(val))
//     }
// }


// var arr = [1, 2, 3, 4, 5];

// function getSubArrays(arr) {
//     if (arr.length === 1) return [arr];
//     else {
//         subarr = getSubArrays(arr.slice(1));
//         return subarr.concat(subarr.map(e => e.concat(arr[0])), [
//             [arr[0]]
//         ]);
//     }
// }
// console.log(JSON.stringify(getSubArrays(arr)));


//console.log(Math.pow(2, 3))
// let ipArr = [1, 3, 5]
// let maxWe = 7
// let tempArr = [...ipArr]
// for (let i = 0; i < ipArr.length; i++) {
//     for (let j = i + 1; j < ipArr.length; j++) {
//         tempArr.push([ipArr[i], ipArr[j]])
//     }
// }
// console.log(tempArr)
// for (let i = 0; i < tempArr.length; i++) {
//     if (isNaN(tempArr[i])) {
//         console.log('Array')
//         tempArr[i] = tempArr[i].reduce((acc, val) => acc + val)
//     }
// }
// console.log(tempArr)
// function test() {
//     console.log(this.a)
// }
// var a = 2
// test()



// //console.log('hi')
// // let head = [1, 2, 3, 4, 5]
// // let n = 2
// // while (n > 0) {

// // }

// // let myArr = [10, 11, 7, 12, 14]
// // let evenSum = 0
// // let oddSum = 0
// // for (let i in myArr) {
// //     if (myArr[i] % 2 == 0) {
// //         evenSum += myArr[i]
// //     } else {
// //         oddSum += myArr[i]
// //     }
// // }
// // let diff = oddSum - evenSum
// // console.log(diff)
// // let myArr = [1, 4, 5]
// // console.log(myArr.concat([1, 2]))

// // let lists = [
// //     [1, 100, 4, 5],
// //     [1, 3, 4],
// //     [2, 6]
// // ]
// // let opList = []
// // for (let i in lists) {
// //     opList = [...opList, ...lists[i]]
// // }
// // opList.sort((a, b) => a - b)
// //     //let opList = [...lists[0], lists[1]]
// // console.log(opList)


// // let ip = -123
// // let rev = 0
// // while (ip != 0) {
// //     rev = rev * 10 + ip % 10
// //     ip = parseInt(ip / 10)
// // }

// // console.log(rev)
// // let myObj = {
// //     firstName: 'Karthik',
// //     lastName: 'Venu'
// // }

// // function printName(country, city, state, temp) {
// //     console.log(this.firstName + this.lastName + country + city + state + temp)
// // }

// // printName.bind(myObj, "India", "Hyderabad")("TS")

// // Function.prototype.myBind = function(...args) {
// //     let that = this
// //     return function(...args2) {
// //         //console.log(...args2)
// //         that.apply(args[0], [...args.slice(1), ...args2])
// //     }
// // }

// // printName.myBind(myObj, "India", "Hyderabad")("TS", "temp")



// // let ip = 123456789
// // let count = 0
// // while (ip > 1) {
// //     ip = ip / 10
// //     count += 1
// // }
// // console.log(count)

// // let arr = [1, 2, 3, 4]
// //  let minSum = Math.max(...arr)

// // let ip = "i love javascript"
// // let ipArr = ip.split(' ')
// // let op = ''
// // for (let i in ipArr) {
// //     let tempEl = ipArr[i].split('').reverse().join('')
// //         //let tempStr = String(tempEl)
// //     op += `${tempEl} `
// // }
// // console.log(op)
// // let myArr = [1, 2, 3, 4, 6, 7, 9, 10]
// // for (let i = 0; i < myArr.length - 1; i++) {
// //     if (myArr[i + 1] != myArr[i] + 1) {
// //         console.log(`Missining number is ${myArr[i]+1}`)
// //         break
// //     }
// // }

// // function add(num1, num2) {
// //     if (num1 && num2) {
// //         return num1 + num2
// //     } else {
// //         return function(num3) {
// //             return num1 + num3
// //         }
// //     }
// // }
// // console.log(add(2, 3))
// // const a = [1, 2, 5, 7, 9]
// // const b = [2, 5, 7, 12, 100]
// // console.log(typeof(b[4]))
// //console.log(a.sort().concat(b.sort()))

// // let ip = 'helloworld'
// // let myArr = ip.split('').reverse().join()
// // console.log(myArr)

// // const a = function(x) {
// //     this.x = x
// // }

// // const b = function(x, y) {
// //     this.y = y;
// //     getY(){
// //         console.log(this.y)
// //     }
// // }
// // const newB = new b('x', 'y')

// // console.log(newB.getY())

// //console.log(myFunc.call(myObj, 3, 4))
// // let ip = 'd677a7b245f4'
// // let i = 0;
// // let strArr = []
// // let numArr = []
// // let op = ''
// // while (i < ip.length) {
// //     let numStr = ''
// //     let tempStr = ip[i]
// //     strArr.push(tempStr)
// //     i = i + 1
// //     while (ip[i] <= 9 && ip[i] >= 0) {
// //         numStr += ip[i]
// //         i = i + 1
// //     }
// //     numArr.push(parseInt(numStr))
// // }
// // for (let i = 0; i < numArr.length; i++) {
// //     for (let j = i + 1; j < numArr.length; j++) {
// //         if (numArr[i] > numArr[j]) {
// //             let temp1 = numArr[i]
// //             numArr[i] = numArr[j]
// //             numArr[j] = temp1

// //             let temp2 = strArr[i]
// //             strArr[i] = strArr[j]
// //             strArr[j] = temp2
// //         }
// //     }
// // }
// // for (let i = 0; i < strArr.length; i++) {
// //     op += strArr[i] + numArr[i]
// // }
// // console.log(op)
// //     // let ip = 'd67a7b24f4'
// //     // let ipStr = ''
// //     // let tempNum = []
// //     // let tempArr = []
// //     //     //var i = 0
// //     // for (let i in ip) {
// //     //     console.log(i)
// //     //     ipStr = ip[i]
// //     //     tempArr.push(ipStr)
// //     //     if (ipStr >= 'a' && ipStr <= 'z') {
// //     //         i++
// //     //         console.log(i)
// //     //         let tempStr = ''
// //     //         while (ip[i] >= 0 && ip[i] <= 9) {
// //     //             tempStr += ip[i]
// //     //             i++
// //     //         }
// //     //         tempNum.push(parseInt(tempStr))
// //     //     }
// //     // }
// //     // // for (let i = 0; i < tempArr.length; i++) {
// //     // //     for (let j = i + 1; j < tempArr.length; j++) {
// //     // //         if (tempNum[i] > tempNum[j]) {
// //     // //             let temp1 = tempArr[i]
// //     // //             tempArr[i] = tempArr[j]
// //     // //             tempArr[j] = temp1
// //     // //             let temp2 = tempNum[i]
// //     // //             tempNum[i] = tempNum[j]
// //     // //             tempNum[j] = temp2
// //     // //         }
// //     // //     }
// //     // // }
// //     // console.log(tempArr)
// //     // console.log(tempNum)
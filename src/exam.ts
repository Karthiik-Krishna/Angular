let ip = "d123a32c2d3a56"
var tempArr = ip.split('')
var tempStr = ''
let i = 0
let opStr = ''
while(i<tempArr.length){
    console.log(i)
    if(tempArr[i] >= 'a' && tempArr[i] <= 'z'){
        let numStr = ''
        tempStr = tempArr[i]
        i=i+1
        while(tempArr[i] < 'a' || tempArr[i] > 'z'){
            numStr+=tempArr[i]
            i=i+1
        }
        let actualNum = parseInt(numStr)
        while(actualNum > 0){
            opStr+=tempStr
            actualNum--
        }  
    }
}
let finalOp = ''
let allArr = opStr.split('').sort()
let uniqueArr = [...new Set(allArr)]
let calcStr = (uniqueArr.map(uniqueVal => [uniqueVal, allArr.filter(allVal => uniqueVal === allVal).length])).join()
for(let x=0; x<calcStr.length; x++){
    if(calcStr[x] != ','){
        finalOp+=calcStr[x]
    }
}

console.log(finalOp)
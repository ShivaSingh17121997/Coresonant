

//  var myArr = [45, 33, 55, 77, 99]


// let bag = [];
//  for(let i =myArr.length-1; i>=0; i--){
//    bag.push(myArr[i]) 
//  }
//  console.log(bag )


// var myArr = [0, 1, 0, 1, 1, 0, 0, 1]

// let ZeroNum = 0
// let oneNUm = 0

// for(let i=0; i<myArr.length; i++){
//     if(myArr[i] === 0){
//         ZeroNum++
//     } else {
//         oneNUm++
//     }
// }

// console.log("Zeros", ZeroNum, "one", oneNUm)

// const data = [
//     { name: "Football" },
//     { name: "Baseball" },
//     { name: "Basketball" },
//     { name: "iPod Touch" },
//     { name: "iPhone 5" },
//     { name: "Nexus 7" },
//   ]

// //   console.log(data)

// const val = "Football"
// const search = data.filter((item) = item.name === val)
// console.log(search)


let a = [1, 3, 5, 4, 5, 4, 3]

function duplicates(a) {

    let count = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                count.push(a[i])
            }
        }
    }
    console.log(count)
}

duplicates(a)

//array remove duplicates no.


let newArr = [3, 3, 4, 5, 3, 5, 9, 6, 7, 5, 77, 8]

function removeDuplicates(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        let duplicate = false;
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            arr.push(a[i])
        }
    }
    console.log(arr)
}

removeDuplicates(newArr)

// optimized remove duplicate
function removeDuplicatesele(a) {

    const arr = [...new Set(a)]
    console.log(arr)

}
removeDuplicatesele(newArr)



// common element
let arr1 = [3, 4, 5, 6, 6]
let arr2 = [3, 5, 9, 6]


function commonElement(a, b) {

    let set1 = new Set(a)
    let set2 = new Set(b)

    const commonElement = [...set1].filter((ele) => set2.has(ele))
    console.log(commonElement)

}

commonElement(arr1, arr2)







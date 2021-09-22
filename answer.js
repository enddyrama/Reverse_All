

function reverseAll(arr) {
    let newString = ''
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {

        for (let j = arr[i].length - 1; j >= 0; j--) {
            newString += arr[i][j]

        }
        newArray.push(newString)
        newString = ''

    }
    return newArray
}

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// // []

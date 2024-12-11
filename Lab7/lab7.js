// 1, 2 - Працює як і для 1 так і багатьох елементів
const removeElements = (array, ...args) => {
    let i = 0
    const len = array.length
    for (let j = 0; j < len; j++){
        if (args.includes(array[i])){
            array.splice(i, 1)
        }
        else i++
    }
}
const array = [1, 2, 3, 4, 5, 6, 7]
removeElements(array, 5, 1, 6)
console.log(array)

// 3
const unique = (array) => {
    c = []
    for (i of array){
        if (!c.includes(i)){
            c.push(i)
        }
    }
    return c
}

const result3 = unique([2, 1, 1, 3, 2]);
console.log(result3);

// 4
const difference = (array1, array2) => array1.filter((i) => !array2.includes(i))

const array1 = ['Beijing', 'Kiev']
const array2 = ['Kiev', 'London', 'Baghdad']
const result4 = difference(array1, array2)
console.log(result4)

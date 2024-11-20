// 1
const sum1 = (...args) => {
    let s = 0
    for (let i = 0; i < args.length; i++){
        s += args[i]
    }
    return s
}
console.log("sum1: " + sum1(1, 2, 3))

// 2
const sum2 = (...args) => {
    let s = 0
    for (i of args){
        s += i
    }
    return s
}
console.log("sum2: " + sum2(0))

// 3
const sum3 = (...args) => {
    let s = 0
    while (args.length > 0){
        s += args.pop()
    }
    return s
}
console.log("sum3: " + sum3())

// 4
const sum4 = (...args) => {
    let s = 0
    do {
        if (!args.length > 0) break
        s += args.pop()
    } while (args.length > 0)
    return s
}
console.log("sum4: " + (1, -1, -1))

// 5
const sum5 = (...args) => {
    let c = 0;
    const s = args.reduce((acc, curr) => acc + curr, c);
    return s
}
console.log("sum5: " + sum5(10, -1, -1, -1))

// 6
const max = (array) => {
    c = array[0][0]
    for (i of array){
        for (j of i){
            if (j > c) {
                c = j
            }
        }
    }
    return c
}
console.log("the largest element is " + max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// 7
const ages = (list) => {
    c = {}
    for (i in list){
        c[i] = list[i].died - list[i].born
    }
    return c
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };

console.log(ages(persons))
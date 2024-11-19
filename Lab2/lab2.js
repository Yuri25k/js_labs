// 1, 2, 3
console.log("---123---") // For better readability in console
let name = "Yurii"
const YEAR = "2007"
const greeting = (n) => console.log("Greetings, " + n + "!")
greeting(name)

// 4
console.log("----4----")
AbortController
const range = (start, end) => {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}
console.log(range(15, 30))

// 5
console.log("----5----")
const rangeOdd = (start, end) => {
    let arr = []
    for (let i = start; i <= end; i++) {
        if (i % 2 == 1){
            arr.push(i)
        }
    }
    return arr 
}
console.log(rangeOdd(15, 30))

// 6
console.log("----6----")
const average = (a, b) => (a+b)/2
const square = (x) => x**2
const cube = (x) => x**3
const calculate = (start, end) => {
    arr = []
    for (let i = start; i <= end; i++){
        arr.push(average(square(i), cube(i)))
    }
    return arr
}
console.log(calculate(0, 9))

// 7
console.log("----7----")
const fn = () => {
    const obj1 = {name: "temp"}
    let obj2 = {name: "temp"}
    obj1.name = "Yurii"
    obj2.name = "Yurii"
    console.log(obj1, obj2)
    // obj1 = {name: "test"} Not working. Why? : Uncaught TypeError TypeError: Assignment to constant variable.
    obj2 = {name: "test"}
    console.log(obj1, obj2)
}
fn()

// 8
console.log("----8----")
const createUser = (name, city) => {
    let obj = {}
    obj[name] = city
    return obj
}
console.log(createUser('Yurii', 'Lutsk'))

// 9
console.log("----9----")
let data = [
    {name: 'Alice', phone: '+380441343111' },
    {name: 'Bob', phone: '+380666060606' },
    {name: 'Clark', phone: '+380994711117' },
    {name: 'Dog', phone: '+380888000888' }
]
const findPhoneByName = (name) => {
    for (i of data){
        if (i.name == name){
            return i.phone
        }
    }
}
console.log(findPhoneByName('Clark'))

// 10
console.log("----10---")
let hash = {
    Alice: '+380441343111' ,
    Bob: '+380666060606' ,
    Clark: '+380994711117' ,
    Dog: '+380888000888' 
}
const findPhoneByName2 = (key) => hash[key]
console.log(findPhoneByName2('Alice'))
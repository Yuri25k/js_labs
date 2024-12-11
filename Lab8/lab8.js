// 1
const iterate = (object, callback) => {
    for (const i of Object.keys(object)){
        callback(i, object[i], obj)
    }
}
const obj = { a: 1, b: 2, c: 3 }
iterate(obj, (key, value) => {
  console.log({ key, value })
})

// 2
const store = (value) => {
    cash = value
    return () => cash
}
const read = store(5)
const value = read()
console.log(value)

// 3
const contract = (fn, ...types) => {
    return (...args) => {
        for (i in args){
            if (typeof args[i] != types[i].name.toLowerCase()) throw new TypeError('Wrong argument type!')
        }
        if (typeof fn(...args) != types[args.length - 1].name.toLowerCase()) throw new TypeError('Wrong argument type!')
        return fn(...args)
    }
}
const concat = (s1, s2) => s1 + s2
const concatStrings = contract(concat, String, String, String)
const res = concatStrings('Hello ', 'world!')
console.dir(res)
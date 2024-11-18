// function 1
let a = 10
let inc = (x) => ++x
let b = inc(a)
console.log({a, b})
// function 2
const ns = {
    n1 : "a",
    n2 : 5,
    n3 : "b"
}
let inc_obj = (obj) => {obj.n2 += 1}
inc_obj(ns)
console.log(ns)

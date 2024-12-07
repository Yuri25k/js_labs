// 1
const seq = (x) => (y) => {
    if (typeof y === 'number') {
        return x(y)
    }
    else {
        return seq((a) => x(y(a)))
    }
}
console.log(seq(x => x + 7)(x => x * 2)(5))

// 2
const array = () => {
    let innerArr = []
    const fn = (i) => innerArr[i]
    fn.push = (value) => innerArr.push(value)
    fn.pop = () => innerArr.pop()
    return fn
}
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined
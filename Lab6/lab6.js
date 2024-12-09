// 1
const pipe = (...fns) => {
    for (f of fns){
       if (typeof f !== 'function') throw new Error('Something is not a function')
    }
    return (x) => fns.reduce((f, g) => g(f), x)
}

const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3
const a = pipe(inc, twice, cube)
console.log(a(5))
// const b = pipe(inc, 7, cube) // throws an error

// 2
const composet = (...fns) => {
    const handlers = [];
    const inner = (x) => {
        const last = fns.length - 1
        try {
            for (let i = last; i >= 0; i--){
                x = fns[i](x)
            }
            return x
        }
        catch (error) {
            for (const handler of handlers) {
                handler(error)
            }
            return undefined
        }
    }
    inner.on = (name, handler) => {
        if (name === 'error') handlers.push(handler)
    }
    return inner
}

const a2 = composet(inc, twice, cube)
console.log(a2(5))
const b2 = composet(7, twice, cube)
console.log(b2(5))
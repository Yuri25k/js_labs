// 1
const random = (min, max) => {
    if (max == undefined){
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
console.log(random(10))

// 2
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
    let key = ""
    for (let i = 0; i < length; i++){
        key += characters[random(characters.length - 1)]
    }
    return key
}
const key = generateKey(16, characters)
console.log(key)

// 3
const ipMorph = (ip = '127.0.0.1') => {
    let arr = ip.split('.')
    for (i in arr){
        arr[i] = parseInt(arr[i])
    }
    return arr.reduce((prev, curr) => (prev << 8) + curr, 0)
}
console.log(ipMorph())

// 4
const iface = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
}
const intr = (obj) => {
    result = []
    for (i in obj){
        if (typeof obj[i] === 'function'){
            result.push([i, obj[i].length])
        }
    }
    return result
}
const introbj = intr(iface)
console.log(require('util').inspect(introbj, false, null)) // В мене чомусь масив повністю в консолі не відоображався, навіть через console.dir, прийшлось так написати
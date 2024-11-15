arr = ["word", true, false, 10, 99, "wonderful", -107, "java", true, "no", 1, "LICENSE", false]
hashmap = {
    number: 0,
    string: 0,
    boolean: 0
}
for (i of arr){
    if (typeof i == 'number'){
        hashmap.number += 1
    }
    else if (typeof i == 'string'){
        hashmap.string += 1
    }
    else if (typeof i == 'boolean'){
        hashmap.boolean += 1
    }
}
console.log(hashmap)
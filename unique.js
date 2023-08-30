const myArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 8, 9, 10, 10]
const myArray2 = [{test: "hello"}, {test: "hello"}, {test: "hello2"}, {test2: "hello"}]

const unique = (items, objectKey, {compare} = {compare: "value"}) => {
    const uniqueItems = []
    const keys = {}
    for (const item of items) {
        const value = (objectKey && compare === "value") ? item[objectKey] : item
        if (keys[value]) continue
        keys[value] = true
        uniqueItems.push(item)
    }
    return uniqueItems
}

console.log(unique(myArray))
console.log(unique(myArray2, "test"))
console.log(unique(myArray2, "test", {compare: "key"}))


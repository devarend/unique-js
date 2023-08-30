const unique = (items, objectKey) => {
    const uniqueItems = []
    const keys = {}
    for (const item of items) {
        const value = objectKey ? item[objectKey] : item
        if (keys[value]) continue
        keys[value] = true
        uniqueItems.push(item)
    }
    return uniqueItems
}

module.exports = unique

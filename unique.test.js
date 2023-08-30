const unique = require('./unique')

describe("unique util function", () => {
    test('it should remove all number duplicates', () => {
        const items = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 10]
        const result = unique(items)
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('it should only return unique values with the key "test"', () => {
        const items = [{test: "hello"}, {test: "hello"}, {test: "hello2"}, {test2: "hello"}]
        const result = unique(items, "test")
        expect(result).toEqual([{test: "hello"}, {test: "hello2"}, {test2: "hello"}]);
    });
})

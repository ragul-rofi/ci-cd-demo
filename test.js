const add = require('./index.js')

test('adds numbers', () => {
    except(add(2,3)).toBe(5);
})
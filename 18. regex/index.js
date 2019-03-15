const log = console.log

log(/\d/.test('12-7e')) // true
log(/\d\d-\d\d/.test('18/52')) // true
log(/\d\d-\d\d/.test('180/52')) // false
log(/\d+-\d/.test('124545-4')) // true
log(/\d+-\d+/.test('-34')); // false

log(/me+(ow)+w/.test('meeeeowowoww')) // true
// /me+(ow)+w/
// m     => matching a single letter 'm'
// e+    => matching the letter 'e' one or more times
// (ow)+ => matching the letters 'ow' one or more times
// w     => matching the letter 'w' once
// 'm' + 'eeee' +'owowow' + 'w'

log(/cats? say?/i.test('The Cat says meow')) // true
log(/cats? say?/i.test('The Cats say meow')) // true

log(/\d{4}/.test("134")) // false
log(/\d{4}/.test("1324")) // true
log(/\d{2,4}/.test("123")) // true
log(/\d{2,}/.test("1234")) // true

log(/\d+ (pig|cow|chicken)s?/.test('15 pigs')) // true

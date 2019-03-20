function* foo() {
  let index = 7;
  while (index < 9) {
    yield index++;
  }
}

const iterator = foo();

console.log(iterator.next()); // { value: 7, done: false }
console.log(iterator.next().value); // 8
console.log(iterator.next().value); // undefined

function* bar() {
  yield* foo();
}

console.log(bar().next().value); // 7

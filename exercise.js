function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return value * number;
  }
  return inner;
}

const resultFunction = multiplyByTwo(4);
const result = resultFunction();
console.log(result);

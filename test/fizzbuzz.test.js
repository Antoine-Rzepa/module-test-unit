import {fizzBuzz} from "../src/fizzbuzz";

//RED 1
test('should return Fizz on multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
});

//RED 2
test('test_param as parameter, it should return test_param is not a number', () =>{
  expect(fizzBuzz("test_param")).toEqual("test_param is not a number");
})

//RED 3
test('should return Buzz on multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
});

//RED 4
test('4 as parameter, should return parameter if not multiple of 3 or 5', () => {
  expect(fizzBuzz(4)).toBe(4);
});

//RED 5
test('should return FizzBuzz on multiples of 3 and 5', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

//RED 6
test('A number is Fizz if it has a 3 in it', () => {
  expect(fizzBuzz(13)).toBe("Fizz");
  expect(fizzBuzz(32)).toBe("Fizz");
});

//RED 7
test('A number is Buzz if it has a 5 in it', () => {
  expect(fizzBuzz(52)).toBe("Buzz");
});

//RED 8
test('A number is FizzBuzz if it has a 5 and 3 in it', () => {
  expect(fizzBuzz(53)).toBe("FizzBuzz");
});


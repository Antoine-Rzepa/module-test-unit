// Add the unit tests of the sum function here
import {sum} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add test_first_param + 2, it should return test_first_param is not a number', () =>{
  expect(sum("test_first_param", 2)).toEqual("test_first_param is not a number");
})

test('add 2 + test_second_param, it should return test_second_param is not a number', () =>{
  expect(sum(2, "test_second_param")).toEqual("test_second_param is not a number");
})


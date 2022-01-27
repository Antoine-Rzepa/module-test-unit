
import {multiply} from "../src/multiply";

//RED 1
test('multiply 3 x 5 to equal 15', () => {
    expect(multiply(3, 5)).toBe(15)
});

//RED 2
test('add test_first_param x 2, it should return test_first_param is not a number', () =>{
    expect(multiply("test_first_param", 2)).toEqual("test_first_param is not a number");
})
 
test('add 2 x test_second_param, it should return test_second_param is not a number', () =>{
    expect(multiply(2, "test_second_param")).toEqual("test_second_param is not a number");
})


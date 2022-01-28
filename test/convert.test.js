import {convert} from "../src/convert";

//RED 1
test('should convert unit to word', () => {
  expect(convert(1)).toBe('Un');
  expect(convert(9)).toBe('Neuf');
  expect(convert(5)).toBe('Cinq');
  expect(convert(6)).toBe('Six');
});

//RED 2
test('should convert tens to word', () => {
  expect(convert(12)).toBe('Douze');
  expect(convert(18)).toBe('Dix-Huit');
  expect(convert(58)).toBe('Cinquante Huit');
  expect(convert(63)).toBe('Soixante Trois');
  expect(convert(73)).toBe('Soixante Treize');
  expect(convert(77)).toBe('Soixante Dix-Sept');
  expect(convert(94)).toBe('Quatre-Vingts Quatorze');
  expect(convert(70)).toBe('Soixante Dix');
  expect(convert(90)).toBe('Quatre-Vingts Dix');
  expect(convert(22)).toBe('Vingt Deux');
  expect(convert(40)).toBe('Quarante');
  expect(convert(11)).toBe('Onze');
  expect(convert(15)).toBe('Quinze');
  expect(convert(16)).toBe('Seize');
  expect(convert(19)).toBe('Dix-Neuf');
});

//RED 3
test('should convert hundred to word', () => {
    expect(convert(100)).toBe('Cent');
    expect(convert(184)).toBe('Cent Quatre-Vingts Quatre');
    expect(convert(237)).toBe('Deux Cent Trente Sept');
    expect(convert(950)).toBe('Neuf Cent Cinquante');
});

//RED 4
test('test_param as parameter, it should return test_param is not a number', () =>{
  expect(convert("test_param")).toEqual("test_param is not a number");
})
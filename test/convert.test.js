import {convert} from "../src/convert";

//RED 1
test('should convert unit to word', () => {
  expect(convert(1)).toBe('Un');
  expect(convert(9)).toBe('Neuf');
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
});

//RED 3
test('should convert hundred to word', () => {
    expect(convert(100)).toBe('Cent');
    expect(convert(184)).toBe('Cent Quatre-Vingts Quatre');
    expect(convert(237)).toBe('Deux Cent trente Sept');
    expect(convert()).toBe('Deux Cent trente Sept');
  });
import {fibs, fibsRec} from './fibonacci'


test("for 1 normal", () => {
  expect(fibs(1)).toEqual([0]);
});

test("for 8 normal", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("for 10 normal", () => {
  expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("for 1 recursive", () => {
  expect(fibsRec(1)).toEqual([0]);
});

test("for 8 recursive", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("for 10 recursive", () => {
  expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

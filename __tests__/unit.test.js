// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Number Tests
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number - wrong format', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number - letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// Email Tests
test('valid email with underscore', () => {
  expect(isEmail('test_user@example.com')).toBe(true);
});

test('valid email with numbers', () => {
  expect(isEmail('user123@domain.com')).toBe(true);
});

test('invalid email - no @ symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email - wrong domain format', () => {
  expect(isEmail('test@example')).toBe(false);
});

// Strong Password Tests
test('valid password - letters and numbers', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('valid password - with underscore', () => {
  expect(isStrongPassword('Abcd_1234')).toBe(true);
});

test('invalid password - starts with number', () => {
  expect(isStrongPassword('1234Abcd')).toBe(false);
});

test('invalid password - too short', () => {
  expect(isStrongPassword('Abc')).toBe(false);
});

// Date Tests
test('valid date - single digits', () => {
  expect(isDate('1/1/2023')).toBe(true);
});

test('valid date - double digits', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('invalid date - wrong format', () => {
  expect(isDate('2023/12/31')).toBe(false);
});

test('invalid date - letters', () => {
  expect(isDate('ab/cd/efgh')).toBe(false);
});

// Hex Color Tests
test('valid 3-digit hex color', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('valid 6-digit hex color', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});

test('invalid hex color - wrong length', () => {
  expect(isHexColor('#abcd')).toBe(false);
});

test('invalid hex color - invalid characters', () => {
  expect(isHexColor('#xyz')).toBe(false);
});

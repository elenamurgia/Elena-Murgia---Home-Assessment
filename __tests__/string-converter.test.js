const stringConverter = require('../string-converter.js');

describe('stringConverter() tests', () => {
    test('should return an error for non-number inputs', () => {
        const inputs = ['hello', false, true, 'one', null, undefined];
        const output = 'Error, please enter a number'; 
        inputs.forEach(input => {
          let result = stringConverter(input);
          expect(result).toBe(output);
        })
    });

    test('should return an error for out of range numbers', () => {
        const inputs = [120000, -5, 1001, 2000];
        const output = 'Error, number out of range. Please enter a number between 0 and 1000'; 
        inputs.forEach(input => {
          let result = stringConverter(input);
          expect(result).toBe(output);
        }) 
    });

   test('should return the correct word for single-digit numbers', () => {
        const cases = [
            { input: 0, output: 'zero' },
            { input: 1, output: 'one' },
            { input: 5, output: 'five' },
            { input: 9, output: 'nine' },
        ];
        cases.forEach(({ input, output }) => {
            let result = stringConverter(input);
            expect(result).toBe(output);
        });
    });

    test('should return the correct word for numbers in the teens', () => {
        const cases = [
            { input: 10, output: 'ten' },
            { input: 11, output: 'eleven' },
            { input: 15, output: 'fifteen' },
            { input: 19, output: 'nineteen' },
        ];
        cases.forEach(({ input, output }) => {
            let result = stringConverter(input);
            expect(result).toBe(output);
        });
    });

    test('should return the correct word for multiples of ten', () => {
        const cases = [
            { input: 20, output: 'twenty' },
            { input: 50, output: 'fifty' },
            {input: 70, output: 'seventy'},
            { input: 90, output: 'ninety' },
        ];
        cases.forEach(({ input, output }) => {
            let result = stringConverter(input);
            expect(result).toBe(output);
        });
    });

    test('should return the correct word for general numbers', () => {
        const cases = [
            { input: 21, output: 'twenty-one' },
            { input: 34, output: 'thirty-four' },
            { input: 58, output: 'fifty-eight' },
            {input: 88, output: 'eighty-eight'}
        ];
        cases.forEach(({ input, output }) => {
            let result = stringConverter(input);
            expect(result).toBe(output);
        });
    });

    test('should return the correct word for exact hundreds', () => {
        const cases = [
            { input: 100, output: 'one hundred' },
            { input: 200, output: 'two hundred' },
            {input: 500, output: 'five hundred'},
            { input: 900, output: 'nine hundred' },
        ];
        cases.forEach(({ input, output }) => {
            let result = stringConverter(input);
            expect(result).toBe(output);
        });
    });

    test('should return the correct word for composite numbers', () => {
        const cases = [
            { input: 115, output: 'one hundred and fifteen' },
            { input: 342, output: 'three hundred and forty-two' },
            {input: 503, output: 'five hundred and three'},
            { input: 999, output: 'nine hundred and ninety-nine' },
        ];
        cases.forEach(({ input, output }) => {
            let result = stringConverter(input);
            expect(result).toBe(output);
        });
    });
});
  
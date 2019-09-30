import fizzBuzz from './fizzBuzz.js';
// Quetions 4
describe('test fizzBuzz function', () => {
    test('should throw new Error when start < 0', () => {
        expect(() => fizzBuzz(-3, 1)).toThrow();
    });

    test('should throw new Error when stop < 0', () => {
        expect(() => fizzBuzz(0, -3)).toThrow();
    });

    test('should throw new Error when stop < start', () => {
        expect(() => fizzBuzz(3, 1)).toThrow();
    });

    test('fizzBuzz(0, 0) should return "FizzBuzz"', () => {
        expect(fizzBuzz(0, 0)).toBe('FizzBuzz');
    });

    test('star=3,stop=8 should return "Fizz4BuzzFizz78"', () => {
        expect(fizzBuzz(3, 8)).toBe('Fizz4BuzzFizz78');
    });

    test('should works with default start-stop', () => {
        expect(fizzBuzz()).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz');
    });
});

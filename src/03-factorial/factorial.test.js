
const factorial = require('./factorial');

test('calcula correctamente el factorial de un número', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
});

test('el factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
});

test('el factorial de un número negativo devuelve NaN', () => {
    expect(factorial(-1)).toBeNaN();
});

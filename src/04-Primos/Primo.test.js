const Primo = require('./Primo');

test('comprobar si un número primo devuelve true', () => {
    expect(Primo(7)).toBe(true);
    expect(Primo(13)).toBe(true);
});

test('verificar si un número no primo devuelve false', () => {
    expect(Primo(4)).toBe(false);
    expect(Primo(9)).toBe(false);
});

test('asegurar que 1 no sea considerado primo', () => {
    expect(Primo(1)).toBe(false);
});

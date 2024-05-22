const cadenatex = require('./CadenaTex');

test('verificar la conversión de una cadena a título', () => {
    expect(cadenatex("hola mundo")).toBe("Hola Mundo");
    expect(cadenatex("este es un test")).toBe("Este Es Un Test");
});

test('comprobar que una cadena vacía devuelva una cadena vacía', () => {
    expect(cadenatex("")).toBe("");
});

test('asegurar que una cadena ya en título no cambie', () => {
    expect(cadenatex("Hola Mundo")).toBe("Hola Mundo");
});

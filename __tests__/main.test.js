const { isValidLength, isIntegerString } = require('../src/main');

describe('Pruebas de Utilidades de Validación (Validator)', () => {

    // --- Pruebas para isValidLength (mínimo 5 caracteres) ---
    test('isValidLength debe retornar true para una cadena con 5 o más caracteres', () => {
        expect(isValidLength('curso')).toBe(true);
        expect(isValidLength('examenFinal')).toBe(true);
    });

    test('isValidLength debe retornar false para una cadena con menos de 5 caracteres', () => {
        expect(isValidLength('daw')).toBe(false);
        expect(isValidLength('')).toBe(false);
    });
    
    test('isValidLength debe retornar false si la entrada no es una cadena', () => {
        expect(isValidLength(12345)).toBe(false);
    });

    // --- Pruebas para isIntegerString ---
    test('isIntegerString debe retornar true para una cadena de enteros', () => {
        expect(isIntegerString('123')).toBe(true);
        expect(isIntegerString('0')).toBe(true);
    });

    test('isIntegerString debe retornar false para decimales o no números', () => {
        expect(isIntegerString('12.5')).toBe(false); // Decimal
        expect(isIntegerString('abc')).toBe(false);  // Texto
        expect(isIntegerString(' ')).toBe(false);    // Espacio
    });
});
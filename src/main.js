/**
 * Módulo de Validación de Datos
 *
 * Contiene funciones para verificar la validez de entradas comunes.
 * Este código será documentado por JSDoc y probado por Jest en la CI/CD.
 *
 * @module Validator
 */

/**
 * Verifica si una cadena de texto tiene una longitud mínima de 5 caracteres.
 * Es útil para validar contraseñas o nombres de usuario.
 *
 * @param {string} input La cadena de texto a validar.
 * @returns {boolean} Retorna true si la longitud es >= 5, false en caso contrario.
 * @example
 * const esValido = isValidLength('curso'); 
 * // esValido es true
 */
function isValidLength(input) {
    if (typeof input !== 'string') {
        return false;
    }
    return input.length >= 5;
}

/**
 * Verifica si una cadena es un número entero válido.
 *
 * @param {string} input La cadena de texto que debe contener un número.
 * @returns {boolean} Retorna true si la cadena representa un número entero, false si no lo es.
 * @example
 * const esNumero = isIntegerString('1234'); 
 * // esNumero es true
 */
function isIntegerString(input) {
    // Usamos Number.isInteger después de intentar convertir la cadena a número
    return /^\d+$/.test(input) && Number.isInteger(Number(input));
}

// Hacemos las funciones accesibles para Jest y JSDoc
module.exports = {
    isValidLength,
    isIntegerString
};
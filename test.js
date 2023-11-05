// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})




test("One dollar should be 167.455 yens", function() {
    const {fromDollarToYen} = require('./app.js');
    const Yen = fromDollarToYen(1.07);
    const expected = 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1.07)).toBe(167.455); 
})




test("One yen should be 136.155 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const Pound = fromYenToPound(156.5);
    const expected = 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(156.5)).toBe(136.155); 
})
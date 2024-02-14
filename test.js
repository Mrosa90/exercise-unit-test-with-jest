//importar la funcion sum del archivo app.js
const { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test ('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);


// esperamos que la suna de esos 2 numero sea 23
expect(total).toBe(23);

});


test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(dollars).toBe(expected); 
})

test("One euro should be 156.5 japan yen", function() {
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5; 
     expect(yens).toBe(expected); 
})

test("One euro should be 0.87 british pound", function() {
    const pound  = fromYenToPound (3.5);
    const expected = 3.5 * 0.87; 
     expect(pound).toBe(expected); 
})
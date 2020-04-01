"use strict";

const obj = {
    d: Number,
    roots: []
}
function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
  obj.d = D
    if (D > 0) {
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        obj.roots.push(x1, x2);
     } else if (D == 0) {
        let x1 = - b / (2 * a);
        obj.roots.push(x1);
     } else {
        return obj;
     }
     
    return obj;
}


function showSolutionsMessage(a, b, c) {
    getSolutions(a, b, c);
    console.log(obj.roots)
    let result = obj;
    let x = obj.roots;
    
    console.log (`Вычисляем корни квадратного уравнения ${a} * x**2 + ${b} * x + ${c}`);
    console.log(`Значение дискриминанта: ${result.d}`);
    if (result.d > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
     } else if (result.d == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
     } else {
        console.log(`Уравнение не имеет вещественных корней`)
     }
     
}
showSolutionsMessage(7,20,-3)
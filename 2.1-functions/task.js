"use strict";

function getSolutions(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    const obj = {
        D,
        roots: []
}
    if (D > 0) {
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        obj.roots.push(x1, x2);
     } else if (D == 0) {
        let x1 = - b / (2 * a);
        obj.roots.push(x1);
     } 
     
    return obj;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
        
    console.log (`Вычисляем корни квадратного уравнения ${a} * x**2 + ${b} * x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
     } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
     } else {
        console.log(`Уравнение не имеет вещественных корней`)
     }
     
}
showSolutionsMessage(7,20,-3)

// Задача 2

const data = {
    algebra: [3,2,4],
    russian: [5,3]
}
function getAverageScore(data) {
    const result = {};
    for (let discipline in data) {
        result[discipline] = getAverageMark(data[discipline]);
    }
    return result;
}
function getAverageMark(marks){
    let averageMark = 0;
    sum = array => {
       let sum = 0
       array.forEach(function (value) {
           sum += value;
       });
       return sum
   }
   if (marks.length == 0) {
       return 0;
   } else if (marks.length <= 5) {
       averageMark = sum(marks) / marks.length
   }
    return averageMark;
 }
const result = getAverageScore(data);
console.log(result);

function parseCount(x) {
    const parsed = parseInt(x);
    if (isNaN(parsed)) { throw new Error("Невалидное значение") }
    return parsed;
}

function validateCount(y) {
    try {
        return parseCount(y);
    } catch(e) {
        return e;
    }
}


class Triangle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea () {
        const p = this.getPerimeter()/2;
        const s = Math.sqrt(p*(p - this.a)*(p-this.b)*(p-this.c));
        return Number(s.toFixed(3));
    }
}



function getTriangle(a,b,c) {
   
    try {
        const someTriangle = new Triangle(a,b,c);
        return someTriangle;
    } catch(e) {
        const catchError = {}
        catchError['getPerimeter'] = function errorOutput() {return "Ошибка! Неправильный треугольник"},
        catchError['getArea'] = function errorOutput() {return "Ошибка! Неправильный треугольник"};
        return catchError;
        
    }
}




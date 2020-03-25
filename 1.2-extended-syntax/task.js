function getResult(a,b,c){
    "use strict";
    const x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
        let squareRoot_1 = (- b + Math.sqrt(discriminant)) / (2 * a);
        let squareRoot_2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        x.push(squareRoot_1, squareRoot_2);
     } else if (discriminant == 0) {
        let squareRoot_3 = - b / (2 * a);
        x.push(squareRoot_3);
     } else {
        return x;
     }

    return x;

}

function getAverageMark(marks = []){
    let averageMark = 0;
        sum = 0;
    if (marks.length == 0) {
        return 0;
    } else if (marks.length <= 5) {
        marks.forEach(function(value) {
          sum += value; 
        });
        averageMark = sum / marks.length;
    } else {
        console.log("Всего оценок: " + marks.length);
        let test = marks.slice(0, 5);
        test.forEach(function(value) {
            sum += value; 
          });
          averageMark = sum / test.length;
    }
   
    return averageMark;
 }
    

function askDrink(name,dateOfBirthday){
    let today = new Date();
        year = today.getFullYear();
        yearOfBirth = dateOfBirthday.getFullYear();
        yearsOld = year - yearOfBirth;
        result = '';
    if (yearsOld > 18) {
        result = (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        result = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
    return result;
}
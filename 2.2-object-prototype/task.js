function getAnimalSound(animal) {
    let animalSound;

    if (animal == undefined) {
        animalSound = null    
    } else {
        animalSound = animal.sound;
    }
   
    return animalSound
}

function sum (marks) {
    let total = 0;
    for(let i = 0; i < marks.length; i++){
        total += parseInt(marks[i]);
    }
    return total;
}

function getAverageMark(marks){
    let fractionalAverageMark = 0;
   
   if (marks.length == 0) {
       return 0;
   } else {
    fractionalAverageMark = sum(marks) / marks.length
   }
   let averageMark = parseFloat(fractionalAverageMark.toFixed());
    return averageMark;
  }


function checkBirthday(info) {
   let now = Date.now();
   let InfoDate = Date.parse(info);
   let diff = now - InfoDate;
   let age = diff / 31536000000;
   let ageYears = Math.floor(age);
   let verdict;
    if (ageYears >= 18) {
        verdict = true;
    } else {
        verdict = false;
    }
   
    return verdict
}

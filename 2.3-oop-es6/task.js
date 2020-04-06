class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability;
    }
    
    takeDamage(damage) {
       const newDurability = this.durability - damage;
        if (newDurability <= 0) {
            this.durability = 0;
        } else {
            this.durability = newDurability;
        }
        return this.durability
    }
    getDamage() {
        if (this.durability >= 0.3 * this.startDurability){
            this.attack;
        } else if (this.durability === 0) {
            this.attack = 0;
        } else {
            this.attack = this.attack / 2;
        }
        return this.attack
    }
    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const ax = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);


arm.takeDamage(20);
console.log(arm.durability); // Infinity

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0


console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1


console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

// Задача 2



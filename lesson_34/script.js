// Створити клас Vehicle з методами getHeight(), getWidth(), getWeight() i getColor()
// Створити клас Car унаслідувати його від Vehicle і додати нові методи numberOfDoors() i getMaxPassangers()
// Створити клас Bike унаслідувати його від Vehicle і додати новий метод getNumberOfWheels()
// Створити обʼєкти цих класів та вивести в консолі інформацію про кожен з обʼєктів

class Vehicle {
    constructor(height, width, weight, color) {
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;
    }
    getHeight() {
        console.log(this.height + " meter");
    }
    getWidth() {
        console.log(this.width + " meter");
    }
    getWeight() {
        console.log(this.weight + " kg");
    }
    getColor() {
        console.log(this.color + " color");
    }
    getInfoVehicle() {
        return this.getHeight() + this.getWidth() + this.getWeight() + this.getColor();
    }
}
class Car extends Vehicle {
    constructor(height, width, weight, color, numberOfDoors, passangers) {
        super(height, width, weight, color);
        this.numberOfDoors = numberOfDoors;
        this.passangers = passangers;
    }
    getNumberOfDoors() {
        console.log(this.numberOfDoors + " pieces");
    }
    getMaxPassangers() {
        console.log(this.passangers + " people");
    }
    getInfoCar() {
        return this.getNumberOfDoors() + this.getMaxPassangers();
    }
}
class ThreeDoors extends Car {
    constructor(height, width, weight, color, numberOfDoors, passangers, maxSpead) {
        super(height, width, weight, color, numberOfDoors, passangers);
        this.maxSpead = maxSpead;
    }
    getMaxSpead() {
        console.log(this.maxSpead + " km/h");
    }
    getInfoThreeDoors() {
        return this.getInfoVehicle() + this.getInfoCar() + this.getMaxSpead();
    }
}
class FourDoors extends Car {
    constructor(height, width, weight, color, numberOfDoors, passangers, typeOfDoors) {
        super(height, width, weight, color, numberOfDoors, passangers);
        this.typeOfDoors = typeOfDoors;
    }
    getTypeOfDoors() {
        console.log(this.typeOfDoors + " door");
    }
    getInfoFourDoors() {
        return this.getInfoVehicle() + this.getInfoCar() + this.getTypeOfDoors();
    }
}
class Bike extends Vehicle {
    constructor(height, width, weight, color, wheels) {
        super(height, width, weight, color);
        this.wheels = wheels;
    }
    getNumberWheels() {
        console.log(this.wheels + " wheels");
    }
    getInfoBike() {
        return this.getInfoVehicle() + this.getNumberWheels();
    }
}
console.log("______New object_______ ");
const bmw = new ThreeDoors(2, 3, 1000, "Blue", 3, 4, 250);
bmw.getInfoThreeDoors();

console.log("______New object_______ ");
const volcwagen = new FourDoors(1.8, 3.2, 1200, "bleck", 4, 4, "clasic");
volcwagen.getInfoFourDoors();

console.log("______New object_______ ");
const ukraina = new Bike(1.2, 2, 25, "Red", 2);
ukraina.getInfoBike();

class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "beep";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model.year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}


const newCar = new Vehicle('toyota', 'tundra', 2011)
const secCar = new Car ('honda', 'accord', 2018);
const newBike = new Motorcycle('yahama', 'h2', 2010);

class Garage {
    constructor(capacity){
        this.vehicle = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed here!";
        }
        if (this.vehicle.length >= this.capacity){
            return "sorry, no more space"
        }
        this.vehicle.push(newVehicle);
        return "Vehicle in garage!";
    }
}

const garage = new Garage(2);

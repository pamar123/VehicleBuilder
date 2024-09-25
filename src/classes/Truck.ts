import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number; // in tons

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(); // Call the parent class constructor

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Ensure the truck has exactly 4 wheels
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]; // Default 4 wheels
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleWeight = vehicle.weight;
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    if (vehicleWeight <= this.towingCapacity) {
      console.log(`Truck ${this.make} ${this.model} is towing ${vehicleMake} ${vehicleModel}`);
    } else {
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed by ${this.make} ${this.model}`);
    }
  }

  // Override the printDetails method from Vehicle
  override printDetails(): void {
    super.printDetails(); // Call parent class method
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} tons`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} tons`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}

export default Truck;

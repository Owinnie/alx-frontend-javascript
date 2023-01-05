// eslint-disable-next-line
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // eslint-disable-next-line
  cloneCar() {
    return new Car[Symbol.species]();
  }
}

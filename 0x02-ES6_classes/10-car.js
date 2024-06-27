export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(v) {
    this._brand = v;
  }

  get motor() {
    return this._motor;
  }

  set motor(v) {
    this._motor = v;
  }

  get color() {
    return this._color;
  }

  set color(v) {
    this._color = v;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}

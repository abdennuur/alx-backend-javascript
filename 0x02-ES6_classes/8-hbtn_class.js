export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(v) {
    this._size = v;
  }

  get location() {
    return this._location;
  }

  set location(v) {
    this._location = v;
  }

  [Symbol.toPrimitive](hnt) {
    if (hnt === 'number') {
      return this.size;
    }
    if (hnt === 'string') {
      return this.location;
    }
    return this;
  }
}

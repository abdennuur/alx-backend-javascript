export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(v) {
    this._name = v;
  }

  get code() {
    return this._code;
  }

  set code(v) {
    this._code = v;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(v) {
    this._code = v;
  }

  get name() {
    return this._name;
  }

  set name(v) {
    this._name = v;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

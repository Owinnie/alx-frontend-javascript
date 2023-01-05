export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter: code
  get code() {
    return this._code;
  }

  // Setter: code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be of type String');
    }
    this._code = value;
  }

  // Getter: name
  get name() {
    return this._name;
  }

  // Setter: name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be of type String');
    }
    this._name = value;
  }

  // class method: displayFullCurrency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

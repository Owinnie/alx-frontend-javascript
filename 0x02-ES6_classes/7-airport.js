export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}

// Default string representation
Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};

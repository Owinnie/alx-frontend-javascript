// eslint-disable-next-line
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter: amount
  get amount() {
    return this._amount;
  }

  // Setter: amount
  set amount(value) {
    this._amount = value;
  }

  // Getter: currency
  get currency() {
    return this._currency;
  }

  // Setter: currency
  set currency(value) {
    this._currency = value;
  }

  // class methods:
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // static methods
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;

    // check constructor types
    if (typeof this.name !== 'string') {
      throw new TypeError('Name must be of type string');
    }

    if (typeof this.length !== 'number') {
      throw new TypeError('Length must be of type number');
    }

    for (const s of this.students) {
      if (typeof s !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be of type string');
    }
    this._name = value;
  }

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be of type number');
    }
    this._length = value;
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(value) {
    for (const v of value) {
      if (typeof v !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = value;
  }
}

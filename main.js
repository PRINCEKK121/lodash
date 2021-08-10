const _ = {
  clamp(number, lowerBound, upperBound) {
    return Math.min(Math.max(number, lowerBound), upperBound);
  },
  inRange(value, startNum, endNum) {
    if (typeof endNum === 'undefined') {
      endNum = startNum;
      startNum = 0;
    }

    if (startNum > endNum) {
      const temp = startNum;
      startNum = endNum;
      endNum = temp;
    }

    return value >= startNum && value < endNum;
  },
  words (input) {
    return input.split(' ');
  },
  pad (input, length) {
    if (input.length >= length) return input;

    const padStart =
       Math.floor( (length - input.length) / 2);
    
    const padEnd = length - (padStart + input.length);

    return ' '.repeat(padStart) + input + ' '.repeat(padEnd);
  },
  has (obj, key) {
    return obj[key] !== undefined;
  },
  invert(obj) {
    const invertObj = {};

    for (let entry of Object.entries(obj)) {
      invertObj[entry[1]] = entry[0];
    }

    return invertObj;
  },
  findKey(obj, predicate) {
    for (let key in obj) {
      const value = obj[key];
      const predicateReturnValue = predicate(value);

      if (predicateReturnValue) {
        return key;
      }
    }

    return undefined;
  },
  drop(arr, delValues) {
    if (typeof delValues === 'undefined') {
      delValues = 1;
    }

    for (let i = 0; i < delValues; i++) {
      arr = arr.slice(1);
    }

    return arr;
  },
  dropWhile(arr, predicate) {
    const dropNumber = arr.findIndex(
      (element, index) => {
        return !predicate(element, index, arr)
      });
    
    const droppedArray = this.drop(dropNumber)

    return droppedArray;
  }
};

// Do not write or modify code below this line.
module.exports = _;
/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
const math = require("mathjs");

const unitMap = {
  gal: {
    returnUnit: "L",
    unitName: "gallons",
    conversion: 3.785411784
  },
  lbs: {
    returnUnit: "kg",
    unitName: "pounds",
    conversion: 0.45359237
  },
  mi: {
    returnUnit: "km",
    unitName: "miles",
    conversion: 1.609344
  },
  l: {
    returnUnit: "gal",
    unitName: "liters",
    conversion: 0.26417205235815
  },
  kg: {
    returnUnit: "lbs",
    unitName: "kilograms",
    conversion: 2.2046226218
  },
  km: {
    returnUnit: "mi",
    unitName: "kilometers",
    conversion: 0.6213711922
  }
};

function ConvertHandler() {
  this.getNum = function(input) {
    let num = input.split(/[a-zA-z]/g)[0].trim();

    if (num) {
      num = math.evaluate(num);
      return num
        ? +num.toFixed(5)
        : (() => {
            throw Error("invalid number");
          })();
    }

    return 1;
  };

  this.getUnit = function(input) {
    const unit = input
      .split(/\d/g)
      .pop()
      .trim();

    return unitMap[unit.toLowerCase()]
      ? unit
      : (() => {
          throw Error("invalid unit");
        })();
  };

  this.getReturnUnit = function(initUnit) {
    return (
      unitMap[initUnit.toLowerCase()].returnUnit ||
      (() => {
        throw Error("invalid unit");
      })()
    );
  };

  this.spellOutUnit = function(unit) {
    return (
      unitMap[unit.toLowerCase()].unitName ||
      (() => {
        throw Error("invalid unit");
      })()
    );
  };

  this.convert = function(initNum, initUnit) {
    return initNum * unitMap[initUnit.toLowerCase()].conversion;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: `${initNum} ${this.spellOutUnit(
        initUnit
      )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
  };
}

module.exports = ConvertHandler;

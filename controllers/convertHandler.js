/*
*
*
*       Complete the handler logic below
*       
*       
*/

const unitMap = {
   'gal': {
     returnUnit: 'L',
     unitName: 'gallons'
   },
   'lbs': {
     returnUnit: 'kg',
     unitName: 'pounds'
   },
   'mi': {
     returnUnit: 'km',
     unitName: 'miles'
   },
   'l': {
     returnUnit: 'gal',
     unitName: 'liters'
   },
   'kg': {
     returnUnit: 'lbs',
     unitName: 'kilograms'
   },
   'km': {
     returnUnit: 'mi',
     unitName: 'kilometers'
   }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    return +input.split(/[a-zA-z]/g)[0].trim() || 'invalid number';
  };
  
  this.getUnit = function(input) {    
    return input.split(/\d/g).pop().trim().toLowerCase() || 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {    
    return unitMap[initUnit.toLowerCase()].returnUnit || 'invalid unit';
  };

  this.spellOutUnit = function(unit) {
    return unitMap[unit.toLowerCase()].unitName || 'invalid unit';
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    
  switch(initUnit) {
    case 'l':
      result = +(initNum / galToL).toFixed(5);
      break;
    case 'gal':
      result = +(initNum * galToL).toFixed(5);
      break;
    case 'km':
      result = +(initNum / miToKm).toFixed(5);
      break;
    case 'mi':
      result = +(initNum * miToKm).toFixed(5);
      break;
    case 'kg':
      result = +(initNum / lbsToKg).toFixed(5);
      break;
    case 'lbs':
      result = +(initNum * lbsToKg).toFixed(5);
      break;
    default:
      result = '';
  }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {    
    return {initNum, initUnit, returnNum, returnUnit, string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`};
  };
  
}

module.exports = ConvertHandler;

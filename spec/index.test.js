import * as locust from '../index.js'

// -------------- isString -----------------
describe('locustjs-base test suite: testing isString', function() {
  it(`isString(null)`, function() {
     expect(locust.isString(null)).toBe(false);
  });
  
  it(`isString(undefined)`, function() {
     expect(locust.isString(undefined)).toBe(false);
  });
  
  it(`isString(23)`, function() {
     expect(locust.isString(23)).toBe(false);
  });
  
  it(`isString('')`, function() {
     expect(locust.isString('')).toBe(true);
  });
  
  it(`isString('23')`, function() {
     expect(locust.isString('23')).toBe(true);
  });
  
  it(`isString(new String(''))`, function() {
     expect(locust.isString(new String(''))).toBe(true);
  });
  
  it(`isString(new String('23'))`, function() {
     expect(locust.isString(new String('23'))).toBe(true);
  });
});

// -------------- isNumber -----------------
describe('locustjs-base test suite: testing isNumber', function() {
  it(`isNumber(null)`, function() {
     expect(locust.isNumber(null)).toBe(false);
  });
  
  it(`isNumber(undefined)`, function() {
     expect(locust.isNumber(undefined)).toBe(false);
  });
  
  it(`isNumber(23)`, function() {
     expect(locust.isNumber(23)).toBe(true);
  });
  
  it(`isNumber(23.45)`, function() {
     expect(locust.isNumber(23.45)).toBe(true);
  });
  
  it(`isNumber(Infinity)`, function() {
     expect(locust.isNumber(Infinity)).toBe(true);
  });
  
  it(`isNumber(Number.MAX_VALUE)`, function() {
     expect(locust.isNumber(Number.MAX_VALUE)).toBe(true);
  });
  
  it(`isNumber('')`, function() {
     expect(locust.isNumber('')).toBe(false);
  });
  
  it(`isNumber('23')`, function() {
     expect(locust.isNumber('23')).toBe(false);
  });
  
  it(`isNumber({})`, function() {
     expect(locust.isNumber({})).toBe(false);
  });
  
  it(`isNumber(new Number())`, function() {
     expect(locust.isNumber(new Number())).toBe(true);
  });
  
  it(`isNumber(new Number(''))`, function() {
     expect(locust.isNumber(new Number(''))).toBe(true);
  });
  
  it(`isNumber(new Number(23.45))`, function() {
     expect(locust.isNumber(new Number(23.45))).toBe(true);
  });
  
  it(`isNumber(new Number('23.45'))`, function() {
     expect(locust.isNumber(new Number('23.45'))).toBe(true);
  });
  
  it(`isNumber(new Number({}))`, function() {
     expect(locust.isNumber(new Number({}))).toBe(false);
  });
  
  it(`isNumber(new Number(null))`, function() {
     expect(locust.isNumber(new Number(null))).toBe(true);
  });
  
  it(`isNumber(new Number(undefined))`, function() {
     expect(locust.isNumber(new Number(undefined))).toBe(false);
  });
});

// -------------- isBool -----------------
describe('locustjs-base test suite: testing isBool', function() {
  it(`isBool(null)`, function() {
     expect(locust.isBool(null)).toBe(false);
  });
  
  it(`isBool(undefined)`, function() {
     expect(locust.isBool(undefined)).toBe(false);
  });
  
  it(`isBool(23)`, function() {
     expect(locust.isBool(23)).toBe(false);
  });
  
  it(`isBool('')`, function() {
     expect(locust.isBool('')).toBe(false);
  });
  
  it(`isBool('23')`, function() {
     expect(locust.isBool('23')).toBe(false);
  });
  
  it(`isBool('true')`, function() {
     expect(locust.isBool('true')).toBe(false);
  });
  
  it(`isBool(true)`, function() {
     expect(locust.isBool(true)).toBe(true);
  });
  
  it(`isBool(new String('23'))`, function() {
     expect(locust.isBool(new String('23'))).toBe(false);
  });
  
  it(`isBool({})`, function() {
     expect(locust.isBool({})).toBe(false);
  });
  
  it(`isBool(new Object())`, function() {
     expect(locust.isBool(new Object())).toBe(false);
  });
  
  it(`isBool(new Boolean())`, function() {
     expect(locust.isBool(new Boolean())).toBe(true);
  });
  
  it(`isBool(new Boolean(true))`, function() {
     expect(locust.isBool(new Boolean(true))).toBe(true);
  });
});

// -------------- isEmpty -----------------
describe('locustjs-base test suite: testing isEmpty()', function() {
  it(`isEmpty(null)`, function() {
     expect(locust.isEmpty(null)).toBe(true);
  });
  
  it(`isEmpty(undefined)`, function() {
     expect(locust.isEmpty(undefined)).toBe(true);
  });
  
  it(`isEmpty('')`, function() {
     expect(locust.isEmpty('')).toBe(true);
  });
  
  it(`isEmpty('   ')`, function() {
     expect(locust.isEmpty('   ')).toBe(true);
  });
  
  it(`isEmpty(new String(''))`, function() {
     expect(locust.isEmpty(new String(''))).toBe(true);
  });
  
  it(`isEmpty(new String('   '))`, function() {
     expect(locust.isEmpty(new String('   '))).toBe(true);
  });
});

// -------------- isNumeric -----------------
describe('locustjs-base test suite: testing isNumeric', function() {
  it(`isNumeric(null)`, function() {
     expect(locust.isNumeric(null)).toBe(false);
  });
  
  it(`isNumeric(undefined)`, function() {
     expect(locust.isNumeric(undefined)).toBe(false);
  });
  
  it(`isNumeric(23)`, function() {
     expect(locust.isNumeric(23)).toBe(true);
  });
  
  it(`isNumeric(23.45)`, function() {
     expect(locust.isNumeric(23.45)).toBe(true);
  });
  
  it(`isNumeric(Infinity)`, function() {
     expect(locust.isNumeric(Infinity)).toBe(false);
  });
  
  it(`isNumeric(Number.MAX_VALUE)`, function() {
     expect(locust.isNumeric(Number.MAX_VALUE)).toBe(true);
  });
  
  it(`isNumeric('')`, function() {
     expect(locust.isNumeric('')).toBe(false);
  });
  
  it(`isNumeric('23')`, function() {
     expect(locust.isNumeric('23')).toBe(true);
  });
  
  it(`isNumeric({})`, function() {
     expect(locust.isNumeric({})).toBe(false);
  });
  
  it(`isNumeric(new Number())`, function() {
     expect(locust.isNumeric(new Number())).toBe(true);
  });
  
  it(`isNumeric(new Number(''))`, function() {
     expect(locust.isNumeric(new Number(''))).toBe(true);
  });
  
  it(`isNumeric(new Number(23.45))`, function() {
     expect(locust.isNumeric(new Number(23.45))).toBe(true);
  });
  
  it(`isNumeric(new Number('23.45'))`, function() {
     expect(locust.isNumeric(new Number('23.45'))).toBe(true);
  });
  
  it(`isNumeric(new Number({}))`, function() {
     expect(locust.isNumeric(new Number({}))).toBe(false);
  });
  
  it(`isNumeric(new Number(null))`, function() {
     expect(locust.isNumeric(new Number(null))).toBe(true);
  });
  
  it(`isNumeric(new Number(undefined))`, function() {
     expect(locust.isNumeric(new Number(undefined))).toBe(false);
  });
});

// -------------- isObject -----------------
describe('locustjs-base test suite: testing isObject', function() {
  it(`isObject(null)`, function() {
     expect(locust.isObject(null)).toBe(false);
  });
  
  it(`isObject(undefined)`, function() {
     expect(locust.isObject(undefined)).toBe(false);
  });
  
  it(`isObject(23)`, function() {
     expect(locust.isObject(23)).toBe(false);
  });
  
  it(`isObject('')`, function() {
     expect(locust.isObject('')).toBe(false);
  });
  
  it(`isObject('23')`, function() {
     expect(locust.isObject('23')).toBe(false);
  });
  
  it(`isObject(new String(''))`, function() {
     expect(locust.isObject(new String(''))).toBe(false);
  });
  
  it(`isObject(new String('23'))`, function() {
     expect(locust.isObject(new String('23'))).toBe(false);
  });
  
  it(`isObject({})`, function() {
     expect(locust.isObject({})).toBe(true);
  });
  
  it(`isObject({ a: 10 })`, function() {
     expect(locust.isObject({ a: 10 })).toBe(true);
  });
  
  it(`isObject(new Object())`, function() {
     expect(locust.isObject(new Object())).toBe(true);
  });
  
  it(`isObject([])`, function() {
     expect(locust.isObject([])).toBe(true);
  });
  
  it(`isObject([10, 20])`, function() {
     expect(locust.isObject([10, 20])).toBe(true);
  });
});

// -------------- isSomeObject -----------------
describe('locustjs-base test suite: testing isSomeObject', function() {
  it(`isSomeObject(null)`, function() {
     expect(locust.isSomeObject(null)).toBe(false);
  });
  
  it(`isSomeObject(undefined)`, function() {
     expect(locust.isSomeObject(undefined)).toBe(false);
  });
  
  it(`isSomeObject(23)`, function() {
     expect(locust.isSomeObject(23)).toBe(false);
  });
  
  it(`isSomeObject('')`, function() {
     expect(locust.isSomeObject('')).toBe(false);
  });
  
  it(`isSomeObject('23')`, function() {
     expect(locust.isSomeObject('23')).toBe(false);
  });
  
  it(`isSomeObject(new String(''))`, function() {
     expect(locust.isSomeObject(new String(''))).toBe(false);
  });
  
  it(`isSomeObject(new String('23'))`, function() {
     expect(locust.isSomeObject(new String('23'))).toBe(false);
  });
  
  it(`isSomeObject({})`, function() {
     expect(locust.isSomeObject({})).toBe(false);
  });
  
  it(`isSomeObject({ a: 10 })`, function() {
     expect(locust.isSomeObject({ a: 10 })).toBe(true);
  });
  
  it(`isSomeObject(new Object())`, function() {
     expect(locust.isSomeObject(new Object())).toBe(false);
  });
  
  it(`isSomeObject([])`, function() {
     expect(locust.isSomeObject([])).toBe(false);
  });
  
  it(`isSomeObject([10, 20])`, function() {
     expect(locust.isSomeObject([10, 20])).toBe(true);
  });
});

// -------------- isArray -----------------
describe('locustjs-base test suite: testing isArray', function() {
  it(`isArray(null)`, function() {
     expect(locust.isArray(null)).toBe(false);
  });
  
  it(`isArray(undefined)`, function() {
     expect(locust.isArray(undefined)).toBe(false);
  });
  
  it(`isArray(23)`, function() {
     expect(locust.isArray(23)).toBe(false);
  });
  
  it(`isArray('')`, function() {
     expect(locust.isArray('')).toBe(false);
  });
  
  it(`isArray('23')`, function() {
     expect(locust.isArray('23')).toBe(false);
  });
  
  it(`isArray(new String(''))`, function() {
     expect(locust.isArray(new String(''))).toBe(false);
  });
  
  it(`isArray(new String('23'))`, function() {
     expect(locust.isArray(new String('23'))).toBe(false);
  });
  
  it(`isArray({})`, function() {
     expect(locust.isArray({})).toBe(false);
  });
  
  it(`isArray({ a: 10 })`, function() {
     expect(locust.isArray({ a: 10 })).toBe(false);
  });
  
  it(`isArray(new Object())`, function() {
     expect(locust.isArray(new Object())).toBe(false);
  });
  
  it(`isArray([])`, function() {
     expect(locust.isArray([])).toBe(true);
  });
  
  it(`isArray([ 10, 20 ])`, function() {
     expect(locust.isArray([ 10, 20 ])).toBe(true);
  });
  
  it(`isArray(new Array())`, function() {
     expect(locust.isArray(new Array())).toBe(true);
  });
  
  it(`isArray(new Array(10, 20))`, function() {
     expect(locust.isArray(new Array(10, 20))).toBe(true);
  });
});

// -------------- isSomeArray -----------------
describe('locustjs-base test suite: testing isSomeArray', function() {
  it(`isSomeArray(null)`, function() {
     expect(locust.isSomeArray(null)).toBe(false);
  });
  
  it(`isSomeArray(undefined)`, function() {
     expect(locust.isSomeArray(undefined)).toBe(false);
  });
  
  it(`isSomeArray(23)`, function() {
     expect(locust.isSomeArray(23)).toBe(false);
  });
  
  it(`isSomeArray('')`, function() {
     expect(locust.isSomeArray('')).toBe(false);
  });
  
  it(`isSomeArray('23')`, function() {
     expect(locust.isSomeArray('23')).toBe(false);
  });
  
  it(`isSomeArray(new String(''))`, function() {
     expect(locust.isSomeArray(new String(''))).toBe(false);
  });
  
  it(`isSomeArray(new String('23'))`, function() {
     expect(locust.isSomeArray(new String('23'))).toBe(false);
  });
  
  it(`isSomeArray({})`, function() {
     expect(locust.isSomeArray({})).toBe(false);
  });
  
  it(`isSomeArray({ a: 10 })`, function() {
     expect(locust.isSomeArray({ a: 10 })).toBe(false);
  });
  
  it(`isSomeArray(new Object())`, function() {
     expect(locust.isSomeArray(new Object())).toBe(false);
  });
  
  it(`isSomeArray([])`, function() {
     expect(locust.isSomeArray([])).toBe(false);
  });
  
  it(`isSomeArray([ 10, 20 ])`, function() {
     expect(locust.isSomeArray([ 10, 20 ])).toBe(true);
  });
  
  it(`isSomeArray(new Array())`, function() {
     expect(locust.isSomeArray(new Array())).toBe(false);
  });
  
  it(`isSomeArray(new Array(10, 20))`, function() {
     expect(locust.isSomeArray(new Array(10, 20))).toBe(true);
  });
});

// -------------- isPrimitive -----------------
describe('locustjs-base test suite: testing isPrimitive', function() {
  it(`isPrimitive(null)`, function() {
     expect(locust.isPrimitive(null)).toBe(false);
  });
  
  it(`isPrimitive(undefined)`, function() {
     expect(locust.isPrimitive(undefined)).toBe(false);
  });
  
  it(`isPrimitive(23)`, function() {
     expect(locust.isPrimitive(23)).toBe(true);
  });
  
  it(`isPrimitive('')`, function() {
     expect(locust.isPrimitive('')).toBe(true);
  });
  
  it(`isPrimitive('23')`, function() {
     expect(locust.isPrimitive('23')).toBe(true);
  });
  
  it(`isPrimitive(true)`, function() {
     expect(locust.isPrimitive(true)).toBe(true);
  });
  
  it(`isPrimitive(new Boolean(false))`, function() {
     expect(locust.isPrimitive(new Boolean(false))).toBe(true);
  });
  
  it(`isPrimitive(new String(''))`, function() {
     expect(locust.isPrimitive(new String(''))).toBe(true);
  });
  
  it(`isPrimitive(new String('23'))`, function() {
     expect(locust.isPrimitive(new String('23'))).toBe(true);
  });
  
  it(`isPrimitive({})`, function() {
     expect(locust.isPrimitive({})).toBe(false);
  });
  
  it(`isPrimitive(function(){})`, function() {
     expect(locust.isPrimitive(function(){})).toBe(false);
  });
  
  it(`isPrimitive({ a: 10 })`, function() {
     expect(locust.isPrimitive({ a: 10 })).toBe(false);
  });
  
  it(`isPrimitive(new Object())`, function() {
     expect(locust.isPrimitive(new Object())).toBe(false);
  });
  
  it(`isPrimitive([])`, function() {
     expect(locust.isPrimitive([])).toBe(false);
  });
  
  it(`isPrimitive([ 10, 20 ])`, function() {
     expect(locust.isPrimitive([ 10, 20 ])).toBe(false);
  });
  
  it(`isPrimitive(new Array())`, function() {
     expect(locust.isPrimitive(new Array())).toBe(false);
  });
  
  it(`isPrimitive(new Array(10, 20))`, function() {
     expect(locust.isPrimitive(new Array(10, 20))).toBe(false);
  });
});

// -------------- BaseEnum -----------------
describe('locustjs-base test suite: testing BaseEnum', function() {
  const Color = locust.Enum.define({ red: 0, green: 1, blue: 2}, 'Color');
  
  it(`enum.name`, function() {
     expect(locust.isSomeString(Color.name)).toBe(true);
  });
  
  it(`enum.name == name`, function() {
     expect(Color.name).toEqual('Color');
  });
  
  it(`Color.red != undefined`, function() {
     expect(Color.red).toBeDefined();
  });
  
  it(`Color.green != undefined`, function() {
     expect(Color.green).toBeDefined();
  });
  
  it(`Color.blue != undefined`, function() {
     expect(Color.blue).toBeDefined();
  });
  
  it(`Color.red == 0`, function() {
     expect(Color.red).toEqual(0);
  });
  
  it(`Color.green == 1`, function() {
     expect(Color.green).toEqual(1);
  });
  
  it(`Color['blue'] == 2`, function() {
     expect(Color['blue']).toEqual(2);
  });
  
  it(`Color[0] == 'red'`, function() {
     expect(Color[0] == 'red').toBe(true);
  });
  
  it(`Color[1]`, function() {
     expect(Color[1]).toEqual('green');
  });
  
  it(`Color[4]`, function() {
     expect(Color[4]).toBeUndefined();
  });
  
  it(`Color.green === 1`, function() {
     expect(Color.green).toEqual(1);
  });
  
  it(`Color.Red == undefined`, function() {
     expect(Color.Red).toBeUndefined();
  });
  
  it(`Color.isValid(0)`, function() {
     expect(Color.isValid(0)).toBe(true);
  });
  
  it(`Color.isValid('red')`, function() {
     expect(Color.isValid('red')).toBe(true);
  });
  
  it(`Color.isValid(4)`, function() {
     expect(Color.isValid(4)).toBe(false);
  });
  
  it(`Color.isValid(undefined)`, function() {
     expect(Color.isValid(undefined)).toBe(false);
  });
  
  it(`Color.isValid(null)`, function() {
     expect(Color.isValid(null)).toBe(false);
  });
  
  it(`Color.isValid('Red')`, function() {
     expect(Color.isValid('Red')).toBe(false);
  });
  
  it(`Color.isValid({})`, function() {
     expect(Color.isValid({})).toBe(false);
  });
  
  it(`Color.equals(0, Color.red)`, function() {
     expect(Color.equals(0, Color.red)).toBe(true);
  });
  
  it(`Color.equals('red', Color.red)`, function() {
     expect(Color.equals('red', Color.red)).toBe(true);
  });
  
  it(`Color.equals(Color.green, 1)`, function() {
     expect(Color.equals(Color.green, 1)).toBe(true);
  });
  
  it(`Color.equals(Color.green, 'green')`, function() {
     expect(Color.equals(Color.green, 'green')).toBe(true);
  });
  
  it(`Color.getNames().length`, function() {
     expect(Color.getNames().length).toEqual(3);
  });
  
  it(`Color.getNames().indexOf('green')`, function() {
     expect(Color.getNames().indexOf('green')).toEqual(1);
  });
  
  it(`Color.getValues().length`, function() {
     expect(Color.getValues().length).toEqual(3);
  });
  
  it(`Color.toArray().length`, function() {
     expect(Color.toArray().length).toEqual(3);
  });
  
  it(`Color.getString(Color.red)`, function() {
     expect(Color.getString(Color.red)).toEqual('red');
  });
  
  it(`Color.getString(Color.green)`, function() {
     expect(Color.getString(Color.green)).toEqual('green');
  });
  
  it(`Color.getString(Color.blue)`, function() {
     expect(Color.getString(Color.blue)).toEqual('blue');
  });
  
  it(`Color.getString(2)`, function() {
     expect(Color.getString(2)).toEqual('blue');
  });
  
  it(`Color.getString('blue')`, function() {
     expect(Color.getString('blue')).toEqual('blue');
  });
  
  it(`Color.getString('Blue')`, function() {
     expect(Color.getString('Blue')).toEqual('red');
  });
  
  it(`Color.getString(4)`, function() {
     expect(Color.getString(4)).toEqual('red');
  });
  
  it(`Color.getString(2, 'green')`, function() {
     expect(Color.getString(2, 'green')).toEqual('blue');
  });
  
  it(`Color.getString('blue', 'green')`, function() {
     expect(Color.getString('blue', 'green')).toEqual('blue');
  });
  
  it(`Color.getString('Blue', 'green')`, function() {
     expect(Color.getString('Blue', 'green')).toEqual('green');
  });
  
  it(`Color.getString(4, 'green')`, function() {
     expect(Color.getString(4, 'green')).toEqual('green');
  });
  
  it(`Color.getString(4, 'Green')`, function() {
     expect(Color.getString(4, 'Green')).toEqual('red');
  });
  
  it(`Color.getString('Blue', 'Green')`, function() {
     expect(Color.getString('Blue', 'Green')).toEqual('red');
  });
  
  
  
  it(`Color.getNumber(2)`, function() {
     expect(Color.getNumber(2)).toEqual(2);
  });
  
  it(`Color.getNumber('blue')`, function() {
     expect(Color.getNumber('blue')).toEqual(2);
  });
  
  it(`Color.getNumber('Blue')`, function() {
     expect(Color.getNumber('Blue')).toEqual(0);
  });
  
  it(`Color.getNumber(4)`, function() {
     expect(Color.getNumber(4)).toEqual(0);
  });
  
  it(`Color.getNumber(2, 'green')`, function() {
     expect(Color.getNumber(2, 'green')).toEqual(2);
  });
  
  it(`Color.getNumber('blue', 'green')`, function() {
     expect(Color.getNumber('blue', 'green')).toEqual(2);
  });
  
  it(`Color.getNumber('Blue', 'green')`, function() {
     expect(Color.getNumber('Blue', 'green')).toEqual(1);
  });
  
  it(`Color.getNumber(4, 'green')`, function() {
     expect(Color.getNumber(4, 'green')).toEqual(1);
  });
  
  it(`Color.getNumber(4, 'Green')`, function() {
     expect(Color.getNumber(4, 'Green')).toEqual(0);
  });
  
  it(`Color.getNumber('Blue', 'Green')`, function() {
     expect(Color.getNumber('Blue', 'Green')).toEqual(0);
  });
});
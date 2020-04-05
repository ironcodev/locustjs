const Version = '1.1.0';

const isEmpty       = (x) => x == null || (typeof x == 'string' && x.trim() == '');
const isSomeString  = (x) => typeof x == 'string' && x.trim() != '';
const isSomeObject  = (x) => typeof x == 'object' && x != null;
const isFunction    = (x) => typeof x == 'function' && typeof x.nodeType !== 'number';
const isNumeric     = (x) => _jQuery.isNumeric(x);
const isPrimitive   = (x) => !isEmpty(x) && !isFunction(x) && !isSomeObject(x) && !Array.isArray(x);

class BaseEnum {
    constructor(values, name) {
        this.name = name;

        if (_jQuery.isArray(values)) {
            for (let i; i < values.length; i++) {
                const value = values[i];

                if (isPrimitive(value)) {
                    this[i] = value;
                    this[value] = i;
                }
            }
        } else if (isSomeObject(values)) {
            for (let key of Object.keys(values)) {
                const value = values[key];

                if (isPrimitive(value)) {
                    this[key] = value;
                    this[value] = key;
                }
            }
        }
    }
    equals(value1, value2) {
        return Enum.equals(this, value1, value2);
    }
    getValues() {
        let result = [];

        for (let key of Object.keys(this)) {
            if (typeof key == 'string' && isPrimitive(this[key]) && !_jQuery.isNumeric(key) && key != 'name') {
                result.push({ name: key, value: this[key] })
            }
        }

        return result;
    }
}

const Enum = {
    define: function (values, name) {
        const result = Object.freeze(new BaseEnum(values, name));

        return result;
    },
    equals: function (enumType, value1, value2) {
        let result = false;

        if (isSomeObject(enumType) && isPrimitive(value1) && isPrimitive(value2)) {
            if (_jQuery.isNumeric(value1)) {
                if (_jQuery.isNumeric(value2)) {
                    result = value1 == value2 && enumType[value1] != undefined;
                } else {
                    result = value1 == enumType[value2];
                }
            } else {
                if (_jQuery.isNumeric(value2)) {
                    result = value1 == enumType[value2];
                } else {
                    result = value1 == value2 && enumType[value1] != undefined;
                }
            }
        }

        return result;
    }
}
// ---------------------- BASE ------------------------
const NotImplementedException = x => `${x} is not implemented`;

export {
    Version,
    NotImplementedException,
    isEmpty,
    isSomeString,
    isSomeObject,
    isFunction,
    isNumeric,
    isPrimitive,
    BaseEnum,
    Enum
}

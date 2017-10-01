/**
 * simple-stack.js
 *
 * @version '1.0'
 * @author 'P-774LSI'
 * @license 'MIT License'
 */

// Stack constructor.
/**
 * Create a new instance of a stack.
 *
 * @class
 * @param {integer} [maxLength=Infinity] Optional. An integer indicating the maximum length limit of elements in the array of stack. Default is unlimited.
 * @param {...*} [datas] Optional. An additional data(s).
 * @example
 * var myStack1 = new Stack();
 * var myStack2 = new Stack(10);  // Set the maximum length limit to 10.
 * var myStack3 = new Stack(-1, 'myData', function myFunc() { return 'called myFunc'; }, 111);
 */
function Stack(maxLength, data1/*, data2, data3, ..., dataN*/) {
    var i = 1,
        argsLength =  arguments.length;

    this.array = [];
    this.maxLength;
    this.setMaxLength(maxLength);

    if (argsLength >= 2) {
        for (; i < argsLength && this.array.length < this.maxLength; i++) {
            this.array.push(arguments[i]);
        }
    }
}

// Stack prototype.
/**
 * Push a data.
 *
 * @memberOf Stack.prototype
 * @param {*} data Required. An additional data.
 * @returns {boolean} Returns true if push was successful, false on failure.
 * @example
 * var myStack = new Stack();
 * myStack.push('myData');
 */
Stack.prototype.push = function(data) {
    if (!this.isFull()) {
        this.array.push(data);
        return true;
    } else {
        return false;
    }
};

/**
 * Pop a data.
 *
 * @memberOf Stack.prototype
 * @returns {*} Returns the newest data if stack is not empty.
 * @example
 * var myStack = new Stack(-1, 'myData1', 'myData2');
 * myStack.pop();  // myData2
 * myStack.pop();  // myData1
 */
Stack.prototype.pop = function() {
    if (this.array.length) {
        return this.array.pop();
    } else {
        //throw new Error('Stack is empty.');
    }
};

/**
 * Pop a data without removing it.
 *
 * @memberOf Stack.prototype
 * @returns {*} Returns the newest data if stack is not empty.
 * @example
 * var myStack = new Stack(-1, 'myData1', 'myData2');
 * myStack.peek();  // myData2
 * myStack.peek();  // myData2
 */
Stack.prototype.peek = function() {
    var length = this.array.length;

    if (length) {
        return this.array[length - 1];
    } else {
        //throw new Error('Stack is empty.');
    }
};

/**
 * Get the current length of a stack.
 *
 * @memberOf Stack.prototype
 * @returns {integer} Returns the stack length.
 * @example
 * var myStack = new Stack(-1, 'myData1', 'myData2');
 * myStack.getLength();  // 2
 */
Stack.prototype.getLength = function() {
    return this.array.length;
};

/**
 * Get the maximum length limit of a stack.
 *
 * @memberOf Stack.prototype
 * @returns {integer} Returns the maximum length limit of a stack.
 * @example
 * var myStack1 = new Stack(10, 'myData');
 * myStack1.getMaxLength();  // 10
 * var myStack2 = new Stack();
 * myStack2.getMaxLength();  // Infinity
 */
Stack.prototype.getMaxLength = function() {
    return this.maxLength;
};

/**
 * Set a new maximum length limit of a stack.
 *
 * Note: Data will not be deleted if you set the maximum length of stack shorter than the current length.
 *
 * @memberOf Stack.prototype
 * @param {integer} maxLength Required. An integer indicating a new maximum length limit of the stack.
 * @example
 * var myStack = new Stack(10, 'myData1', 'myData2');
 * myStack.setMaxLength(3);
 * myStack.push('myData3');
 * myStack.push('myData4');
 * myStack.toString();  // myData1,myData2,myData3
 */
Stack.prototype.setMaxLength = function(maxLength) {
    // For ES6 or higher.
    //this.maxLength = (Number.isInteger(maxLength) && maxLength >= 0) ? maxLength : Infinity;
    // For lower than ES6.
    this.maxLength = (typeof maxLength === 'number' && isFinite(maxLength) && Math.floor(maxLength) === maxLength && maxLength >= 0) ? maxLength : Infinity;
};

/**
 * Determines whether a stack is empty.
 *
 * @memberOf Stack.prototype
 * @returns {boolean} Returns true if the stack is empty, else false.
 * @example
 * var myStack = new Stack(-1, 'myData1');
 * myStack.isEmpty();  // false
 * myStack.pop();
 * myStack.isEmpty();  // true
 */
Stack.prototype.isEmpty = function() {
    if (this.array.length === 0) {
        return true;
    } else {
        return false;
    }
};

/**
 * Determines whether a stack is full.
 *
 * @memberOf Stack.prototype
 * @returns {boolean} Returns true if the stack is full, else false.
 * @example
 * var myStack = new Stack(2);  // Set the maximum length limit to 2.
 * myStack.push('myData1');
 * myStack.isFull();  // false
 * myStack.push('myData2');  // Now the stack will be full.
 * myStack.isFull();  // true
 */
Stack.prototype.isFull = function() {
    if (this.array.length >= this.maxLength) {
        return true;
    } else {
        return false;
    }
};

/**
 * Returns first index at which a given value can be found in a stack array, or -1 if a given value does not contain it.
 * This method similar to `Array.prototype.indexOf()`.
 *
 * @memberOf Stack.prototype
 * @returns {integer} Returns the index of the first occurrence of value in the stack array, or -1 if not found.
 * @example
 * var myStack = new Stack(-1, 'myData1', 'myData2', 'myData3');
 * myStack.indexOf('myData2');  // 1
 * myStack.indexOf('myData2', 2);  // -1
 */
Stack.prototype.indexOf = function(searchElement, fromIndex) {
    if (arguments.length > 1) {
        return this.array.indexOf(searchElement, fromIndex);
    } else {
        return this.array.indexOf(searchElement);
    }
};

/**
 * Remove data from an array of stack by index.
 *
 * @memberOf Stack.prototype
 * @returns {Array} An array containing the removed data.
 * @example
 * var myStack = new Stack(-1, 'myData1', 'myData2', 'myData3', 'myData4', 'myData5');
 * myStack.remove(1);  // [ 'myData2' ]
 * myStack.remove(0, 2);  // [ 'myData1', 'myData3' ]
 * myStack.remove();  // [ 'myData4', 'myData5' ]
 * myStack.isEmpty();  // true
 */
Stack.prototype.remove = function(fromIndex, howMany) {
    if (arguments.length === 0) {
        return this.array.splice(0, this.array.length);
    } else if (arguments.length === 1) {
        return this.array.splice(fromIndex, 1);
    } else {
        return this.array.splice(fromIndex, howMany);
    }
};

/**
 * Returns a string that represents the contents of a stack array.
 *
 * @memberOf Stack.prototype
 * @returns {string} The string representing contents of a stack array.
 * @example
 * var myStack = new Stack(-1, 'myData1', 'myData2', 'myData3');
 * myStack.toString()  // myData1,myData2,myData3
 */
Stack.prototype.toString = function() {
    return this.array.toString();
};
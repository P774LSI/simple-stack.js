# simple-stack.js
A simple stack data structure in pure JavaScript.


# Requirements
ES5 or higher.

Why?
`Array.prototype.indexOf()` used in this library.
If your host environment for JavaScript is ES3 or lower, can't use `.indexOf()` method.
However, you can polyfill the `Array.prototype.indexOf()` method.
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf>


# Basic Usage
    var myStack = new Stack();
    myStack.push('myData1');
    myStack.push('myData2');
    myStack.pop();  // myData2
    myStack.pop();  // myData1


# APIs
    .push(data)
    .pop()
    .peek()
    .getLength()
    .getMaxLength()
    .setMaxLength(maxLength)
    .isEmpty()
    .isFull()
    .indexOf(searchElement, fromIndex)
    .remove(fromIndex, howMany)
    .toString()

For more information, see docs.


# License
MIT License


# Author
P-774LSI
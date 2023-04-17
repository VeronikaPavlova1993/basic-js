const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
  arr = arr.join('');
  const open_bracket = ['['];
  const para = {
    ['[']: ']'
  };
   let stack = [];
   const count = 0;
   for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (open_bracket.includes(current)){
      stack.push(current);
    } else {
      break;
    };
    let topCurrent = stack[stack.length - 1];
    if (para[current] === topCurrent) {
      stack.pop();
      count++;
    } else {
      break
    }
  }
 return count;
}
}
module.exports = {
  DepthCalculator
};

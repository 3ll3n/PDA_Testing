var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add a number to the previous total', function() {
    calculator.previousTotal = 2;
    calculator.add(2);
    assert.equal(4, calculator.runningTotal);
  });

  it('should subtract a number from the previous total', function() {
    calculator.previousTotal = 5;
    calculator.subtract(2);
    assert.equal(3, calculator.runningTotal);
  });

  it('should multiply a number by the previous total', function() {
    calculator.previousTotal = 2;
    calculator.multiply(2);
    assert.equal(4, calculator.runningTotal);
  });

  it('should divide a number by the previous total', function() {
    calculator.previousTotal = 4;
    calculator.divide(2);
    assert.equal(2, calculator.runningTotal);
  });

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(123, calculator.runningTotal);
  });

  it('should chain multiple operations together', function() {
    calculator.operatorClick('+')
    calculator.add(10);
    calculator.operatorClick('-');
    calculator.subtract(7);

    assert.equal(3, calculator.runningTotal);
  });


  it('should clear the balance', function () {
    calculator.add(3);
    calculator.clearClick();
      assert.equal(0, calculator.runningTotal);
  });

});

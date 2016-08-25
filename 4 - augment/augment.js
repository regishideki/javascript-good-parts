// it creates a "method" method in Function prototype
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
}

// it uses "method" function created above to create a new "integer" function in Number
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});

((-10 / 3).integer());
// -3
// it creates a "method" method in Function prototype
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};

Array.method('reduce', function(f, value) {
  var i;
  for (i = 0; i < this.length; i++) {
    value = f(this[i], value);
  }

  return value;
});

[1, 2, 3].reduce(function(a, b) {
  return a + b;
}, 0);


// one option
Array.method('sumation', function() {
  var sum = function(a, b) {
    return a + b;
  }

  return this.reduce(sum, 0);
});

[1, 2, 3].sumation();

// another option
var sum = function(a, b) {
  return a + b;
};

[1, 2, 3].reduce(sum, 0);

// and another
data = [1, 2, 3];
data.total = function() {
  var sum = function(a, b) {
    return a + b;
  };

  return this.reduce(sum, 0);
}

data.total();
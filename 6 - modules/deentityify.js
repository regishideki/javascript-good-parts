// used in the beggining of the book
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
}

String.method('deentityify', function() {
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  return function() {
    return this.replace(/&([^&;]+);/g, function(a, b) {
      // alert("a = " + a + " b = " + b);
      var r = entity[b];
      return typeof r === 'string' ? r : a;
    });
  };
}());

document.writeln('&lt;&quot;&gt;'.deentityify());

// my version

// used in the beggining of the book
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
}

String.method('deentityify', function() {
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  return function() {
    return this.replace(/&([^&;]+);/g, function(a, b) {
      // alert("a = " + a + " b = " + b);
      var r = entity[b];
      return typeof r === 'string' ? r : a;
    });
  }();
};

document.writeln('&lt;&quot;&gt;'.deentityify());
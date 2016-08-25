// ============= using prototype: status is public
var Quo = function(string) {
  this.status = status;
};

Quo.prototype.get_status = function() {
  return 'status is ' + this.status;
};

var myQuo = new Quo('bla');

// ============= using closure (much better: status is private)
var quo = function(status) {
  return {
    get_status: function() {
      return 'status is ' + status;
    }
  };
};

var myQuo = quo('bla');
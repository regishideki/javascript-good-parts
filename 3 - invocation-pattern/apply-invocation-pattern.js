var Quo = function(string) {
  this.status = status;
};

Quo.prototype.get_status = function() {
  return 'status is ' + this.status;
};

var statusObject = {
  status: 'ok'
};

var status = Quo.prototype.get_status.apply(statusObject);
// status is ok


var add = function(a, b) {
  return a + b;
};

var array = [3, 4];

var sum = add(null, array);
// 7
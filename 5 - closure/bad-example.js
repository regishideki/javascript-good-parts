// in the final o for statement, i is nodes.length. So, every node will alerts the nodes.length
// it happens because inner function has access to actual i value, not a copy of the value
var add_the_handlers = function(nodes) {
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function(e) {
      alert(i);
    };
  }
};

// correct version
var add_the_handlers = function(nodes) {
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function(i) {
      return function(e) {
        alert(e);
      };
    }(i);
  }
};

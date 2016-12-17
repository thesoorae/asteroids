const Util = {
  inherits (childClass, parentClass){
    const Surrogate = function(){};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  },
    // childClass.constructor = childClass;
    scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
    }
};



module.exports = Util;

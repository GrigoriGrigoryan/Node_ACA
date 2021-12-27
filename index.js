//////////// Array Map ///////////////

Array.prototype.myMap = function(cbf) {
  var newArr = []
  for (let i = 0; i < this.length; i++) {
     newArr.push(cbf(this[i], i , this))
  }
  return newArr;
}


////////////////////////////////////////

//////////// Array Slice ///////////////

Array.prototype.mySlice = function (st, end) {
  let newArr = [];
  if (end < 0) end = this.length  - (-end);
  if (st < 0) return  newArr;
  for(st != end; st < end; st++ ) {
    newArr.push(this[st])
  }
  return newArr
}

////////////////////////////////////////

//////////// Array Flat ///////////////

Array.prototype.myFlat = function (depth) { 
  let newArr = [];
  let list = this;
  function flatting (arr, depth) {
    for (let val of arr) {
      if (!Array.isArray(val)) {
        newArr.push(val);
      } else {
        if (depth >= 1) {
          flatting(val, depth - 1)
        } else {
          newArr.push(val)
        }
      }
    }
  }
  flatting(list, depth);
  return newArr;
}

////////////////////////////////////////
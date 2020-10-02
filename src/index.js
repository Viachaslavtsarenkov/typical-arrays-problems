
exports.min = function min (array) {

  if(array === undefined || array.length === 0)
  return 0;

  let min = parseInt(array[0]);
  for (let i = 1; i < array.length; ++i){
    if (parseInt(array[i]) < min)
      min = parseInt(array[i]);
  }
  return min;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0)
  return 0;
  let max = parseFloat(array[0]);
  for (let i = 1; i < array.length; ++i){
    if (parseFloat(array[i]) > max)
      max = parseFloat(array[i]);
  }
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0)
  return 0;
  let avg= 0;
  for (let i = 0; i < array.length; ++i){
      avg += parseFloat(array[i]);
  }
  return avg / array.length;
}

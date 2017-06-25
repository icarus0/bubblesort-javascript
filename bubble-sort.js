var bubbleSort = function(array){
  var i = 0;
  var j = 0;
  var temp = 0;
  for(i=0; i < (array.length - 1); i++){
    for(j=0; j< (array.length - i - 1); j++){
      if( array[j+1] < array[j] ){
        temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
};

module.exports = {
  bubbleSort: bubbleSort
};
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    array.reduce((acc, curr) => acc + curr);
    return array;
  }

// console.log(flatten(arrays));

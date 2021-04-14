const bubbleSort = (arr) => {
    let swapping = true;
    let swap = 0;
    while (swapping) {
      swapping = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
          let tempVar = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = tempVar;
          swap++;
          swapping = true;
        }
      }
    }
    console.log(swap);
    return arr;
  }
  
  const a = [9, 8, 7, 6, 5, 4, 3, 2, 1] ;
  console.log(bubbleSort(a));
  
  
  
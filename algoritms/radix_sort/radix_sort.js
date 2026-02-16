function countingSort(arr, j) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / j) % 10;
    count[digit]++;
  }

  for (let d = 1; d < 10; d++) {
    count[d] += count[d - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / j) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  if (arr.length <= 1) return arr;

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  for (let j = 1; Math.floor(max / j) > 0; j *= 10) {
    countingSort(arr, j);
  }

  return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
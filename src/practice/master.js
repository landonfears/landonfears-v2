function solution(N) {
  // Max exponent = 32
  // Step 1: get max num of binary

  // No binary gaps === One "1" or all "1", or 2^X or 2^X - 1
  let oneArray = [];
  let currNum = N;
  //console.log('start num', currNum);
  while(currNum > 0) {
    let mp = maxPower(currNum);
    oneArray.push(mp);
    currNum -= Math.pow(2, mp);
    //console.log('currnum', currNum);
  }

  if (oneArray.length <= 1) {
    return 0;
  }

  // Compute max gap
  let maxGap = 0;
  var i;
  for (i = 1; i < oneArray.length; i++) {
    let tmpGap = oneArray[i - 1] - oneArray[i] - 1;
    maxGap = (maxGap < tmpGap) ? tmpGap : maxGap;
  }

  console.log('1a', oneArray, maxGap);
  return maxGap;
}

function maxPower(num) {
  let curr = 0;
  while(Math.pow(2, curr) <= num && curr < 32) {
    curr += 1;
    //console.log('curr max power', curr);
  }
  return curr === 0 ? 0 : curr - 1;
}

function mult(s1, s2) {
  // Pad smaller string with zeroes
  if (s1.length < s2.length) {
    s1 = padZeroes(s1, s2.length - s1.length);
  } else if (s2.length < s1.length) {
    s2 = padZeroes(s2, s1.length - s2.length);
  }

  //console.log('init strings', s1, s2)

  // Get length of string * length of string strings to add together
  var i, j;
  let sarr = [];
  for (i = s1.length - 1; i >= 0; i--){
    for (j = s2.length - 1; j >= 0; j--) {
      let tmp = (s1[i] * s2[j]).toString();
      tmp = padZeroes(tmp, (s1.length - 1 - i) + (s2.length - 1 - j), true);
      tmp = padZeroes(tmp, (s1.length + s1.length) - tmp.length);
      sarr.push(tmp);
    }
  }

  // Add array strings together
  let addStr = "";
  let carry = 0;
  for (i = s1.length + s2.length - 1; i >= 0; i--){
    let sum = carry;
    sarr.map(ss => {
      //console.log('summing', sum, ss[i]);
      sum += parseInt(ss[i]);
    });

    addStr = sum.toString().slice(-1) + addStr;
    carry = sum > 9 ? parseInt(sum.toString().slice(0, -1)) : 0;
    
    //console.log('sum', sum, carry, addStr);
  }
  addStr = carry.toString() + addStr;

// 567
// 294
  //console.log('sarr', sarr, addStr, carry);
  return trimZeroes(addStr);
//  28 + 24(1) + 20(2) + 63(1) + 54(2) + 45(3) + 14(2) + 12(3) + 10(4) = 166698
}

function padZeroes(str, num, right) {
  var i;
  let newStr = str;
  for(i = 0; i < num; i++) {
    newStr = right ? newStr + "0" :  "0" + newStr;
  }
  return newStr;
}

function trimZeroes(str) {
  //let trimStr = "";
  while(parseInt(str[0]) === 0) {
    str = str.slice(1)
  }
  return str;
}

function solution2(K, M, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // # write your code in Python 3.6
  let N = A.length;
  let result = [];
    
  let count = [];
  var i;
  for (i = 0; i < M + 2; i++) {
    count.push(0);
  }
  //console.log('old A', A);
  for (i = 0; i < K; i++){
    A[i] += 1;
  }
  //console.log('new A', A);
  A.map(a => {
    count[a] += 1;
  });
  //console.log('count', count);
  count.map((num, index) => {
    if (num >= (N + 1) / 2) {
      result.push(index);
    }
  })
  //console.log('result', result);

  for (i = 0; i < N - K; i++){
    let x = A[i];
    let y = A[i + K];

    count[A[i]] -= 1;
    count[A[i + K]] -= 1;

    A[i] -= 1;
    A[i + K] += 1;

    count[A[i]] += 1;
    count[A[i + K]] += 1;

    //console.log('compare...', count[A[i]], count[A[i + K]], ((N + 1) / 2))
    if (count[A[i]] >= ((N + 1) / 2)) {
      //console.log('pushing1...', A[i])
      result.push(A[i]);
    }
    if (count[A[i + K]] >= ((N + 1) / 2)) {
      //console.log('pushing2...', A[i + K]);
      result.push(A[i + K]);
    }

    //console.log('next A', A, count, result, A[i], A[i + K], count[A[i]], count[A[i + K]]);
  }
  //   for i in range(N - K):
  //       x, y = A[i], A[i + K]
  //       count[A[i]] -= 1
  //       count[A[i + K]] -= 1
  //       A[i] -= 1
  //       A[i + K] += 1
  //       count[A[i]] += 1
  //       count[A[i + K]] += 1
  //       if count[A[i]] >= (N + 1) / 2:
  //           result.add(A[i])
  //       if count[A[i + K]] >= (N + 1) / 2:
  //           result.add(A[i + K])
    
  //   return sorted(list(result))
  return sort(distinct(result));

  /*
  // Leaders can only be 2 - M + 1

  // init freq array with M values
  var i, j;
  let freqArray = [];
  let indexArray = [];
  for (i = 0; i < M + 1; i++) {
    freqArray[i] = 0;
  }

  // build freq values for untouched array
  A.map(a => {
    freqArray[a - 1] += 1;
  });

  // Consider all scenarios of adding 1 to K sequence
  //let tmpFreqArray = [...freqArray];
  for(i = 0; i < A.length - K + 1; i++) {
    let tmpFreqArray = [...freqArray];
    for (j = 0; j < K; j++) {
      tmpFreqArray[A[i + j] - 1] -= 1;
      tmpFreqArray[A[i + j]] += 1;
      // if (tmpFreqArray[A[i + j]] > (A.length / 2)) {
      //   console.log('pushing...', tmpFreqArray, A[i + j], tmpFreqArray[A[i + j]], (A.length / 2));
      //   indexArray.push(A[i + j] + 1);
      //   //break;
      // }
    }

    if (Math.max(...tmpFreqArray) > (A.length / 2)) {
      indexArray.push(indexOfMax(tmpFreqArray) + 1);
    }
    console.log('f and tmp', freqArray, tmpFreqArray);
    // Add index of max to new array
  }
  return sort(distinct(indexArray));
  //console.log('freqa', freqArray, finalArray);
  */
}

function reqNumbers(task, wait) {
  return new Promise((resolve, reject) => {
    var i;
    let nums = [];
    let defaultWait = randomNumber(0, 100);
    for (i = 0; i < randomNumber(3, 10); i++) {
      nums[i] = randomNumber(1, 100);
    }
    setTimeout(() => {
      resolve({
        task: task,
        wait: wait || defaultWait,
        numbers: nums
      });
    }, wait || defaultWait);
  });
}

function randomNumber(min, max, step) {
  min = min ? min : 0;
  max = max || max === 0 ? max : 1;
  step = step ? step: 1;
  var rnd = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(rnd / step ) * step;
}

function spi(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let smallest = 1;
  let max = Math.max(...A);
  let freq = [-1];
  for (var i = 0; i < max; i++) {
    freq.push(0);
  }
  //console.log('max', max, freq);
  A.map(num => {
    if (num > 0) {
      freq[num] += 1;
    }
  });
  let lowIndex = freq.findIndex(i => i === 0);
  if (lowIndex < 0) {
    if (freq.length === 1) {
      return 1;
    }
    return freq.length;
  }
  return lowIndex;
  // console.log('freq ret', freq, lowIndex);
  // return smallest;
}

function odd(A) {
  let sorted = sort(A);
  //console.log('sorted', sorted);

  let curr = 0;
  let num = 0;

  for(var i = 0; i < sorted.length; i++) {
    if (curr !== sorted[i]) {
      if (num === 1) {
        break;
      }
      curr = sorted[i];
      num += 1;
    } else {
      if (num === 1) {
        num = 0;
      } else {
        num += 1;
      }
    }
  }
  return curr;

  // let max = Math.max(...A);
  // let freqPairs = [];
  // for (var i = 0; i < max + 1; i++) {
  //   freqPairs[i] = 0;
  // }
  // A.map(num => {
  //   freqPairs[num] += 1;
  //   if (freqPairs[num] === 2) {
  //     freqPairs[num] = 0;
  //   }
  // })
  // //console.log('freq pairs', freqPairs);
  // let unpaired = freqPairs.findIndex(pair => pair === 1);

  // return unpaired;
}

function rotate(A, K) {
  // If K === A.length, do nothing
  // 2 segments: start to L - K, and L - K to end
  if (A.length === K) {
    return A;
  }
  if (K > A.length) {
    K = K % A.length
  }

  let rarr = [];
  for (var i = 0; i < A.length; i++) {
    let index = A.length - K + i;
    if (index >= A.length) {
      index = index % A.length;
    }
    rarr.push(A[index])
  }
  //console.log('rarr', rarr);
  // A.map(val => {
  //   rarr.push[A.length - K]
  // })
  return rarr;
}

function frogger(X, Y, D) {
  let curr = X;
  let num = 0;
  while (curr < Y) {
    curr += D;
    num += 1;
  }

  let jumps = Math.ceil((Y - X) / D);
  //console.log('jumps', jumps);
  return jumps;
}

function missing(A) {
  let sorted = sort(A);

  let curr = 0;
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] !== curr + 1) {
      return curr + 1;
    }
    curr = sorted[i];
  }
  return curr + 1;
}

function fliprows(A) {
  // Options are to flip 1 or 2, then count matching rows
  // For each row, get the indexes that need to be flipped to finish
  // Num 0's and 1's for each row

  let numRows = A.length;
  let zeroIndexes = [];
  let oneIndexes = [];
  let hash = {};
  let maxValue = 1;
  A.map(row => {
    let numCols = row.length;

    zeroIndexes = [];
    oneIndexes = [];

    // Get indexes with 0's and 1's
    row.map((val, index) => {
      if (val === 0) {
        zeroIndexes.push(index);
      } else {
        oneIndexes.push(index);
      }
    });

    let zi = zeroIndexes.join(':');
    let oi = oneIndexes.join(':');

    if (zi in hash) {
      hash[zi] += 1;
    } else {
      hash[zi] = 1;
    }

    if (hash[zi] > maxValue) {
      maxValue = hash[zi];
    }

    if (oi in hash) {
      hash[oi] += 1;
    } else {
      hash[oi] = 1;
    }

    if (hash[oi] > maxValue) {
      maxValue = hash[oi];
    }
    //console.log('z and one', zeroIndexes, oneIndexes, hash, maxValue)
  })
  return maxValue;
}

function contribution(A, B, F) {
  let diffArr = [];
  for (var i = 0; i < A.length; i++) {
    diffArr.push(B[i] - A[i])
  }
  
  let sorted = sort(diffArr);
  let bsum = B.reduce((total, num) => total + num);
  let fsum = F === 0 ? 0 : sorted.slice(0, F).reduce((total, num) => total + num);
  
  return bsum - fsum;
}

function minseq(A) {
  // [1,4,4,7]
  // 1 -> [5, 3] -> [10, 0, 8, 2] -> [17, 3, 7, 15, 1, 9, 5]
  // [-1, 1] -> [-5, 3, 5, 3] -> [1, -9, 7, -1, 9, 1, 7, -1] -> [8, -7, -2, -16, 14, 0, 6, -8, 16, 2, 8, -6, 14, 0, 6, -8]
  // [4, -4]
  // [8, 0, 0, -8]
  // [9, 7, 1, -1, 1, -1, -7, -9]
  // [16, 2, 14, 0]

  // if (A.length === 0) {
  //   return 0;
  // }
  
  // let tree = [];
  // A.map((val, index) => {
  //   if (index === 0) {
  //     tree.push([Math.abs(val)]);
  //   } else {
  //     let tpart = [];
  //     tree[index - 1].map(t => {
  //       tpart.push(Math.abs(t + val));
  //       tpart.push(Math.abs(t - val));
  //     });
  //     tree.push(tpart);
  //   }
    
  // });
  // console.log('tree', tree);
  // return Math.min(...(tree[tree.length - 1]));

  let N = A.length;
  if (N === 0) {
    return 0;
  }
  let M = 0;
  for (var i = 0; i < N; i++) {
    A[i] = Math.abs(A[i])
    M = Math.max(A[i], M);
  }
  let S = A.reduce((total, num) => total + num);
  //console.log('s', S, M);
  
  let count = [];
  for (i = 0; i < (M + 1); i++) {
    count[i] = 0;
  } 
  for (i = 0; i < N; i++) {
    count[A[i]] += 1;
  }
  //console.log('c and vals', A, count);
  let dp =[];
  for (i = 0; i < (S + 1); i++) {
    dp[i] = -1;
  } 
  dp[0] = 0;

  for (var a = 1; a < (M + 1); a++) {
    if (count[a] > 0) {
      for (var j = 0; j < S; j++) {
        if (dp[j] >= 0) {
          dp[j] = count[a];
        } else if (j >= a && dp[j - a] > 0) {
          dp[j] = dp[j - a] - 1;
        }
        console.log("tracking...", a, j, dp)
      }
    }
  }
  console.log('dp', A, S, count, dp);
  let result = S;
  for (i = 0; i < Math.round((S / 2) + 1); i++) {
    if (dp[i] >= 0) {
      result = Math.min(result, S - 2 * i)
      //console.log('adp', A, i, dp[i], result, S, S - 2 * i);
    }
  }
  return result;
// 15 for j in xrange(S):
// 16 if dp[j] >= 0:
// 17 dp[j] = count[a]
// 18 elif (j >= a and dp[j - a] > 0):
// 19 dp[j] = dp[j - a] - 1
// 20 result = S
// 21 for i in xrange(S // 2 + 1):
// 22 if dp[i] >= 0:
// 23 result = min(result, S - 2 * i)
// 24 return result
}

function minabs(A) {
  // let list = [];
  // for (var i = 0; i < A.length; i++) {
  //   for (var j = i; j < A.length; j++) {
  //     list.push(Math.abs(A[i] + A[j]));
  //   }
  // }
  // //console.log('list', A, list)
  // return Math.min(...list);

  // 1. ABS all values
  // 2. Get MAX
  // 3. Array with [0...MAX]
  // 4. determine possible values

  let sorted = sort(A);
  console.log('A', A);
  //Arrays.sort(A);
  let i = 0;
  let j = A.length - 1;
  let res = 9007199254740992;
  let sum = 0;
  //int res = Integer.MAX_VALUE;
  while (i <= j) {
    sum = A[i] + A[j];
    if (res > Math.abs(sum)) {
      res = Math.abs(sum);
    }
    if (sum < 0) {
      i++;
    } else if (0 < sum) {
      j--;
    } else {
      break;
    }
  }
  return res;
}

function minnope(A) {
  sort(A);
  let min = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] - min > 1) {
      return min + 1;
    } else {
      min = Math.max(A[i], 0);
    }
  }
  return min + 1;
}

function dwarf(N, S, T) {
  const BARREL_CODE = -1;
  const SITTING_DWARF_CODE = 1;
  const EMPTY_CODE = 0;
  
  let boat = [];
  for (var i = 0; i < N; i++) {
    boat[i] = [];
    for (var j = 0; j < N; j++) {
      boat[i][j] = 0; 
    }
  }
  let bloc = S.split(" ");
  if (S) {
    bloc.map(loc => {
      boat[parseInt(loc[0]) - 1][loc[1].charCodeAt(0) - 65] = BARREL_CODE;
    });
  }
  if (T) {
    
    let dloc = T.split(" ");
    dloc.map(loc => {
      boat[parseInt(loc[0]) - 1][loc[1].charCodeAt(0) - 65] = SITTING_DWARF_CODE;
    });
  }
  console.log('boat', boat)

  // numAvailable, numSitting in each Quadrant


  // numCanPut(quadrant)
  // numWillBeTotal(quadrant)
  // Q1 must === Q3, Q2 must === Q4

  let sittingDwarfs = [
    numSpaces(boat, 0, SITTING_DWARF_CODE),
    numSpaces(boat, 1, SITTING_DWARF_CODE),
    numSpaces(boat, 2, SITTING_DWARF_CODE),
    numSpaces(boat, 3, SITTING_DWARF_CODE)
  ];
  let numAvailable = [
    numSpaces(boat, 0, EMPTY_CODE),
    numSpaces(boat, 1, EMPTY_CODE),
    numSpaces(boat, 2, EMPTY_CODE),
    numSpaces(boat, 3, EMPTY_CODE)
  ]
  // console.log('boat', boat);
  //console.log('all vals', sittingDwarfs, numAvailable);

  // min of sitting + available is the number to have - if min = 0 return -1
  let minQuad1 = Math.min(sittingDwarfs[0] + numAvailable[0], sittingDwarfs[2] + numAvailable[2]);
  let minQuad2 = Math.min(sittingDwarfs[1] + numAvailable[1], sittingDwarfs[3] + numAvailable[3]);

  //console.log('mins', minQuad1, minQuad2);

  if (
    minQuad1 < sittingDwarfs[0] || 
    minQuad1 < sittingDwarfs[2] || 
    minQuad2 < sittingDwarfs[1] ||
    minQuad1 < sittingDwarfs[3]
  ) {
    return -1;
  }
  return (
    (minQuad1 - sittingDwarfs[0]) +
    (minQuad1 - sittingDwarfs[2]) +
    (minQuad2 - sittingDwarfs[1]) +
    (minQuad2 - sittingDwarfs[3])
  );
  //let newBoat = fillBoat(boat, maxAvailable)
}

function numSpaces(boat, quadrant, type) {
  var i, j;
  let count = 0;

  let ibounds = quadrant < 2 ? [0, boat.length /2] : [boat.length / 2, boat.length];
  let jbounds = quadrant < 1 || quadrant > 2 ? [0, boat.length /2]: [boat.length / 2, boat.length];
  for (i = ibounds[0]; i < ibounds[1]; i++) {
    for (j = jbounds[0]; j < jbounds[1]; j++) {
      if (boat[i][j] === type) {
        count += 1;
      }
    }
  }
  return count;
}

function sort(arr, desc) {
  return arr.sort((a, b) => desc ? b - a : a - b);
}

function indexSort(arr, desc) {
  return arr.sort((a, b) => {
    if (desc) {
      return a[0] < b[0] ? 1 : -1;
    }
    return a[0] < b[0] ? -1 : 1;
  });
}

function distinct(arr) {
  return [...new Set(arr)];
}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

export default {
  solution,
  solution2,
  mult,
  reqNumbers,
  spi,
  odd,
  rotate,
  frogger,
  missing,
  fliprows,
  contribution,
  minseq,
  minabs,
  minnope,
  dwarf
};




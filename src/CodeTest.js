function Animal() {
  this.mammal = true;
  this.numHeads = 1;
}

function Human() {
  this.numLegs = 2;
}
Human.prototype = new Animal();

function Dog() {
  this.numLegs = 4;
}
Dog.prototype = new Animal();

var dog1 = new Dog();
console.log('dog', dog1.numHeads, dog1.numLegs);
var human1 = new Human();
console.log('human', human1.numHeads, human1.numLegs);

var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";
map[bar] = "bar";

console.log('mapfoo', foo, map);  // what will this display??

// function addButtons(numButtons) {
//   for (var i = 0; i < numButtons; i++) {
//     var button = document.createElement('input');
//     function() => {
//       console.log('meee', i + 1);
//     };
//   }
// }

function unpad(str) {
  var index = 0;
  //str = str.split("");
  while(str[index] === "0") {
    index++;
  }
  return str.slice(index, str.length);
}

function pad(a, b) {
  var aArr = a.split("");
  var bArr = b.split("");
  
  var lenDiff = Math.abs(aArr.length - bArr.length);
  for (var i = 0; i < lenDiff; i++) {
    (aArr.length < bArr.length) ? aArr.unshift("0") : bArr.unshift("0");
  }
  return {
    aArr: aArr,
    bArr: bArr
  };
}

function add(a, b) {
  var {aArr, bArr} = pad(a, b);
  
  var carry = 0;
  var addStr = "";
  
  for (var i = aArr.length - 1; i >= 0; i--) {

    var strVal = parseInt(aArr[i]) + parseInt(bArr[i]) + carry;
    var left = strVal % 10;
    carry = Math.floor(strVal / 10);

    addStr = left.toString() + addStr;
  }
  return addStr;
}

function mult(aArr, bArr) {
  var multArr = [];
  for (var i = 0; i < aArr.length; i++) {
    for (var j = 0; j < bArr.length; j++) {
      var numZeroes = (aArr.length - i - 1) + (bArr.length - j - 1);
      var strVal = (parseInt(bArr[j]) * parseInt(aArr[i])).toString();
      for (var n = 0; n < numZeroes; n++) {
        strVal += "0";
      }
      multArr.push(strVal);
    }
  }
  return multArr;
}

function multStr(a, b) {

  // Pad with smaller number with zeroes to match larger
  var {aArr, bArr} = pad(a, b);
  
  // Start multiplication
  var multArr = mult(aArr, bArr);
  // console.log('a and b', aArr, bArr);
  
  // console.log('mul arr', multArr);

  while(multArr.length > 1) {
    var addStr = add(multArr[0], multArr[1]);
    multArr.shift();
    multArr.shift();
    multArr.unshift(addStr);
  }

  return unpad(addStr);
  /*
    a: "239"
    b: "349"

    60000, 09000, 02700, 08000, 01200, 00360, 01800, 00270, 00081
    
  */
}

// addButtons(5)();
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Simple Idea would be to start at 1, check if it is in the array, if not, stop
    // if in array increment to 2 and continue
    // keep going until we get the max num in array
    // if max num is in array, return max + 1
    // var max = 1;
    // A.map(num => {
    //   if (num > )
    // })

    /*
      23
      34

      128948359483594
      724834
    */

    // Get max value
    var max = Math.max(...A);
    var hashObj = [true];
    // Create array with all these values if max is > 0
    if (max > 0) {
      for (var i = 1; i <= max; i++) {
        hashObj[i] = false;
      }
      A.map(num => {
        hashObj[num] = true;
      })
    }
    else return 1;

    var low = hashObj.findIndex(ho => !ho);
    return (low < 0) ? max + 1 : low;

    // // var max = Math.max(...A);
    // // console.log('max', max, A.find(i => i === 3));
    // // for(var i = 1; i < max; i++) {
    // //     if (!A.find(i)) {
    // //         return i;
    // //     }
    // // }
    // // return max + 1;
    // var hashObj = [];
    // // Create hash array with MAX number of elements
    // // var max = Math.max(...A);
    // // for (var i = 1; i <= max; i++) {
    // //     hashObj[i.toString()] = {
    // //         inArr: false
    // //     }
    // // }
    // for (var j = 0; j < A.length; j++) {
    //     if (A[j] > 0) {
    //         //console.log('hashobj', hashObj[A[j]]);
    //         hashObj[A[j]] = true;
    //     }
    // }
    // var keys = Object.keys(hashObj).map(num => parseInt(num));
    // console.log('hashobj', hashObj, keys);

    // for ()
    // // var low = hashObj.find(ho => !ho.inArr);
    // // console.log('ho', low);



//   function solution(U, L, C) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // Iterate over C and subtract from U or L
//     // If after iterating U and L are not 0, IMPOSSIBLE
    
//     let uTemp = U;
//     let lTemp = L;
//     let M = ["", ""];
//     let fail = false;
    
//     C.map(K => {
//         // Subtract from either U or L
//         if (K === 2) {
//             if (uTemp > 0 && lTemp > 0) {
//                 M[0] = M[0] + "1";
//                 M[1] = M[1] + "1";
//                 uTemp = uTemp - 1;
//                 lTemp = lTemp - 1;
//             } else {
//                 fail = true;
//             }
//         }  else if (K === 1) {
//             if (uTemp > 0) {
//                 M[0] = M[0] + "1";
//                 M[1] = M[1] + "0";
//                 uTemp = uTemp - 1;
//             } else if (lTemp > 0) {
//                 M[0] = M[0] + "0";
//                 M[1] = M[1] + "1";
//                 lTemp = lTemp - 1;
//             } else {
//                  fail = true;
//             }
//         } else {
//              M[0] = M[0] + "0";
//              M[1] = M[1] + "0";
//         }
//     })

//     // fail if uTemp and lTemp are not 0
//     if (uTemp !== 0 || lTemp !== 0) {
//       fail = true;
//     }
    
//     return fail ? "IMPOSSIBLE" : M.join(",")
// }
//   function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // Calculate slope and direction of statue location
//     // Important data: slope (x / y), quadrant (top left, top right, bottom left, bottom right)
//     // Make 4 arrays with each quadrant, and calculate the slope, then count the sum of array lengths
    
//     let room = [[], [], [], []]; // room will have 4 quadrants
    
//     A.map(location => {
//          // Get slope
//          let slope = Math.abs(location.x / location.y);
         
//          // Put in correct quadrant
//          let quadrantIndex = -1;
//          if (location.x < 0 && location.y > 0) {
//              quadrantIndex = 0;
//          } else if (location.x > 0 && location.y > 0) {
//              quadrantIndex = 1;
//          } else if (location.x > 0 && location.y < 0) {
//              quadrantIndex = 2;
//          } else if (location.x < 0 && location.y < 0) {
//              quadrantIndex = 3;
//          }
         
//          if (!room[quadrantIndex].includes(slope)) {
//              room[quadrantIndex].push(slope); 
//          }
//     });
    
//     // Count lengths of room
//     return room[0].length + room[1].length + room[2].length + room[3].length;
// }

//console.log(solution([{x:-1, y:-2}, {x:1, y:2}, {x:2, y:4}, {x:-3, y:2}, {x:2, y:-2}] ))

// console.log(solution(2, 3, [0, 0, 1, 1, 2]))
// console.log(solution(6, 7, [2, 0, 2, 0]))

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   // Get index of min and max
//   // If min index is greater than max index, return 1
//   // else recursion through with array between min and max index
  
//   let minIndex = A.indexOf(Math.min(...A));
//   let maxIndex = A.indexOf(Math.max(...A));

//   if (minIndex >= maxIndex) {
//     return 1;
//   }

//   return 1 + solution(A.slice(minIndex + 1));
// }

// var s1 = solution([2, 4, 1, 6, 7, 9, 5]);
//  console.log('s1', s1);

//  var a = {
//    b: 2,
//    c: 3
//  }
//  console.log('yost', Object.keys(a).length);

}
console.log(multStr("7", "20"));

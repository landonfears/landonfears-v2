import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Toptal from './Toptal';
import Master from './practice/master';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// it('smallest possible integer', () => {
//   const res1 = Master.spi([1, 3, 6, 4, 1, 2]);
//   const res2 = Master.spi([-1, -3]);
//   const res3 = Master.spi([1,2,3]);
//   const res4 = Master.spi([1, 3, 6, 4, 1, 2, 7, 10, 5]);
//   console.log('smallest poss int', res1, res2, res3, res4);
// });

// it('binary gap', () => {
//   const res = Master.solution(993);
//   console.log(res);
// });

// it('string mult', () => {
//   const res = Master.mult("34723489483924382432947381249123", "88998983437483249329");
//   console.log(res);
// })

// it('leader', () => {
//   const res = Master.solution2(3, 5, [2,1,3,1,2,2,3]);
//   //const res = Master.solution2(4, 2, [1,2,2,1,2]);
//   // [2,1,3,1,2,2,3], [2,3,2,0,0,0]
//   // [3,2,4,1,2,2,3], [1,3,2,1,0,0]
//   // [2,2,4,2,2,2,3], [0,5,1,1,0,0]
//   // [2,1,4,2,3,2,3], [1,3,2,1,0,0]
//   // [2,1,3,2,3,3,3], [1,2,4,0,0,0]
//   // [2,1,3,1,3,3,4], [2,1,3,1,0,0]
//   console.log(res);
// })

// it('promise', async () => {
//   //const waitTimes = [1000, 60, 25, 50]
//   const numCalls = 5;
//   let calls = [];
//   for (var i = 0; i < numCalls; i++) {
//     calls.push(Master.reqNumbers(i));
//   }
  
//   // const res = Master.reqNumbers(1, waitTimes[0]);
//   // const res2 = Master.reqNumbers(2, waitTimes[1]);
//   // const res3 = Master.reqNumbers(3, waitTimes[2]);
//   let all = Promise.all(calls);
//   const timeout = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('timeout');
//     }, 50)
//   });
//   let race = await Promise.race([
//     all, 
//     timeout
//   ]).then(res => res).catch(err => err);

//   let result = [];
//   //console.log('race', race);
//   if (race === 'timeout') {
//     // Race for all three calls
//     let race1 = await Promise.race(calls);
//     //console.log('calls', calls, race1.task);
//     calls.splice(race1.task, 1); // filter(o => o.task !== race1.task);
//     console.log('race1', race1);
//     let race2 = await Promise.race(calls);
//     console.log('race2', race2);

//     // if (race1.task === 1) {
//     //   race2 = await Promise.race([res2, res3]);
//     // } else if (race1.task === 2) {
//     //   race2 = await Promise.race([res, res3]);
//     // } else {
//     //   race2 = await Promise.race([res, res2]);
//     // }
//     //result = (await all).slice(0, -1);
//     result = [race1, race2];
//     //console.log('all', (await all).slice(0, -1))
//   } else {
//     result = race;
//     console.log('race', race);
//   }

//   let sumArr = 0;
//   let sum = result.map(nums => {
//     //console.log('nums', nums);
//     let dosum = nums.numbers.reduce((total, num) => total + num);
//     //console.log('dosum', dosum);
//     sumArr += dosum;
//   })
//   console.log('final answers', sumArr);
//   // console.log('race', race[0]);
//   // console.log('all', all);
// })

// it('odd unpaired', () => {
//   const res1 = Master.odd([9,3,9,3,9,7,9]);
//   // const res2 = Master.spi([-1, -3]);
//   // const res3 = Master.spi([1,2,3]);
//   // const res4 = Master.spi([1, 3, 6, 4, 1, 2, 7, 10, 5]);
//   console.log('unpaired element', res1);
// })

// it('goes ok', () => {
//   // findWord(["P>E","E>R","R>U"]) // PERU
//   // findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
//   let param1 = ["P>E","E>R","R>U"];
//   let param2 = ["I>N","A>I","P>A","S>P"];
//   const result1 = Toptal.findWord(param1);
//   const result2 = Toptal.findWord(param2);
//   console.log(result1)
//   console.log(result2)
//   //expect(result).toBe(17);
// });

// it('goes ok get change', () => {
//   // findWord(["P>E","E>R","R>U"]) // PERU
//   // findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
//   //let param = ["I>N","A>I","P>A","S>P"];
//   const result = Toptal.getChange(5, 0.99);
//   console.log(result)
//   //expect(result).toBe(17);
// });

it('rotate array', () => {
  //const res1 = Master.rotate([3, 8, 9, 7, 6], 3);
  const res1 = Master.rotate([3], 3);
  console.log('rotated array', res1);
})

it('frogger', () => {
  //const res1 = Master.rotate([3, 8, 9, 7, 6], 3);
  const res1 = Master.frogger(7, 1000000000, 2);
  console.log('max jumps', res1);
})

it('missing', () => {
  //const res1 = Master.rotate([3, 8, 9, 7, 6], 3);
  const res1 = Master.missing([]);
  console.log('missing', res1);
})

it('flip rows', () => {
  //const res1 = Master.rotate([3, 8, 9, 7, 6], 3);
  const res1 = Master.fliprows([[0, 0, 0, 0], [0, 1, 0, 0], [1, 0, 1, 1]]);
  const res2 = Master.fliprows([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]);
  console.log('flip rows', res1, res2);
})

it('contribution', () => {
  const res1 = Master.contribution([4,2,1], [2,5,3], 2);
  const res2 = Master.contribution([7,1,4,4], [5,3,4,3], 2);
  const res3 = Master.contribution([5,5,5], [5,5,5], 1);
  const res4 = Master.contribution([1], [3], 0);
  console.log('flip rows', res1, res2, res3, res4);
})

// it('min seq', () => {
//   const res1 = Master.minseq([1,5,2,-2]);
//   const res2 = Master.minseq([1,4,4,7]);
//   const res3 = Master.minseq([2,2,1]);
//   const res4 = Master.minseq([3, 3, 3, 4, 5]);
//   console.log('min sequence', res1, res2, res3, res4);
// })

// it('min seq', () => {
//   const res1 = Master.minabs([1,4,-3]);
//   const res2 = Master.minabs([-8,4,5,-10,3]);
//   const res3 = Master.minabs([2,2,1]);
//   const res4 = Master.minabs([3, 3, 3, 4, 5]);
//   console.log('min sequence', res1, res2, res3, res4);
// })

it('min nope', () => {
  const res1 = Master.minnope([1,3,6,4,1,2]);
  const res2 = Master.minnope([1,2,3]);
  const res3 = Master.minnope([-1,-3]);
  const res4 = Master.minnope([1]);
  console.log('min nope', res1, res2, res3, res4);
})

it('dwarf', () => {
  const res1 = Master.dwarf(4, "1B 1C 4B 1D 2A", "3B 2D");
  const res2 = Master.dwarf(2, '1B 2A', '1A 2B');
  // const res3 = Master.minnope([-1,-3]);
  // const res4 = Master.minnope([1]);
  console.log('dwarf', res1, res2);
})
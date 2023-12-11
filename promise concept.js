// let arr = ['shiv', 'nilu']
// console.log(arr.map((el)=>el))

// let num = [1, 2,3,4,5]
// console.log('num:', num.map((n)=>n*2))
//Call back hell
//promises.

// function savedb(data, success, failure) {
//   let internet = Math.floor(Math.random() * 10) + 1;
//   console.log("internet:", internet);
//   if (internet < 5) {
//     console.log("strong connection");
//     success();
//   } else {
//     console.log("weak connection");
//     failure();
//   }
// }
// savedb(
//   "apna gaon",
//   () => {
//     console.log("data strong");
//   },
//   () => {
//     console.log("weak strong");
//   }
// );

// function savedb(data) {
//   return new Promise((resolved, rejected) => {
//     let internet = Math.floor(Math.random() * 10) + 1;
//     console.log("internet:", internet);
//     if (internet < 5) {
//       console.log("strong connection");
//       resolved("success: data strong");
//     } else {
//       console.log("weak connection");
//       rejected("fail: weak data");
//     }
//   });
// }

// savedb("Speed")
//   .then(() => {                  //
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("fail");
//   });

/*output: internet: 3
             strong connection
             success */
/*output:
savedb("speed")
 internet: 2
 strong connection
Promise {<fulfilled>: 'success: data strong'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"success: data strong"
savedb("speed")
new.js:34 internet: 1
new.js:36 strong connection
Promise {<fulfilled>: 'success: data strong'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"success: data strong"
savedb("speed")
new.js:34 internet: 2
new.js:36 strong connection
Promise {<fulfilled>: 'success: data strong'}
savedb("speed")
new.js:34 internet: 6
new.js:39 weak connection
Promise {<rejected>: 'fail: weak data'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"rejected"
[[PromiseResult]]
: 
"fail: weak data"*/

function savedb(data) {
  return new Promise((resolved, rejected) => {
    let internet = Math.floor(Math.random() * 10) + 1;
    console.log("internet:", internet);
    if (internet < 5) {
      console.log("solved");
      resolved("compelte");
    } else {
      console.log("rejected");
      rejected("not compelte");
    }
  });
}

savedb("apna college")
  .then((result) => {
    console.log("resolve");
    console.log("result:", result);
  })
  .catch((result) => {
    console.log("reject");
    console.log("result:", result);
  });

async function greet() {
  //ab.ab(); // rejected
  //   throw ("errors.......")
  return "jay";
}
//throw() always return errors.

greet()
  .then(() => {
    console.log("done");
  })
  .catch(() => {
    console.log("Not done");
  });

function msg() {
  return "hii....";
}
let msg1 = msg();
console.log("msg:", msg1);

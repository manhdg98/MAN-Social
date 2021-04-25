// let getTime = (a) => {
//     return new Promise((res, rej) => {
//         if (a === 1) {
//             res("Success")
//         }
//         rej("Bug");
//     })
// }

// getTime(2)
//     .then( 
//         (data) => console.log(data),
//         (err) => {
//             console.log("err", err)
//         }
//     )
//     .then ( 
//         console.log("Handle Time")
//     )


let sum = async (a,b) => {

  console.log(`a = ${a}, b = ${b}`)
  let c = async (a,b) => {
    return ++a 
  } 
  d = await c(a,b)
  console.log("2", d)
}

sum(3,4)
    
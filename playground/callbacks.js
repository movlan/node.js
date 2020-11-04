// setTimeout(() => {
//     console.log(`Two seconds are up`)
// }, 2000)

// const geocode = (query, callback) => {
//     const data = {
//         query,
//         lat: 0,
//         lng: 0
//     }

//     setTimeout(()=>{
//         callback(data)
//     }, 1500)

// }

// geocode("philadelphia", (data) => {
//     console.log(data)
// })

const add = (num1, num2, cb) => {
    setTimeout(() => {
        cb(num1 + num2)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)
} )
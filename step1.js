// console.log(process.argv[2])
const fs = require('fs');


// fs.readFile('one.txt', 'utf-8', (err, data) =>{
//     if (err){
//         console.log('Error:', err)
//     }
//     console.log(data)
// })

    // console.log(data)
// return fs.readFile(path)

function cat(path){
    if (!path) return
    fs.readFile(path, 'utf-8', (err, data) =>{
        if (err){
            console.log('Error:', err)
        }console.log(data)})
    }

cat(process.argv[2])
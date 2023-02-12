// console.log(process.argv[2])
const { default: axios } = require('axios');
const fs = require('fs');


function cat(path){
    if (!path) return
    fs.readFile(path, 'utf-8', (err, data) =>{
        if (err){
            console.log('Error:', err)
        }console.log(data)})
    }

async function webCat(url){
    if (!url) return
    try{let webpage = await axios.get(url)
    console.log(webpage.data)
}catch(e){
    console.log(e)
}
}

if(process.argv[2].indexOf('http') !== -1){
webCat(process.argv[2])
} else if(process.argv[2].indexOf('txt') !== -1){
cat(process.argv[2])
} else{
    console.log('ERRORRRROROROOR')
}
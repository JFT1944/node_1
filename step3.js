// console.log(process.argv)
const { default: axios } = require("axios");
const fs = require("fs");

async function cat(path) {
  if (!path) return;
  console.log(`path: ${path}`);
  fs.readFile(path, "utf-8", (err, data) => {
    console.log(data);
    if (err) {
      console.log("Error:", err);
    }
    console.log(`data in funct: ${data}`);
    newData = data;
    // return data;
  });
}

async function webCat(url) {
  if (!url) return;
  try {
    let webpage = await axios.get(url);
    // console.log(webpage.data)
    newData = webpage.data;
    return newData;
  } catch (e) {
    console.log(e);
  }
}

if (process.argv.indexOf("--out") !== -1) {
  console.log("with --out");
  console.log(process.argv);
  if (process.argv[3].indexOf("http") !== -1) {
    console.log("has http");
    feedback = webCat(process.argv[3]).then((res) => {
      // console.log(res)
      try {
        fs.writeFile(process.argv[3], res, "utf-8", (err) => {
          console.log(err);
        });
      } catch (e) {
        console.log(`Error:${e}`);
      }
    });
    // console.log(`pending: ${feedback}`)
  } else if (process.argv[3].indexOf("txt") !== -1) {
    console.log("has txt");
    let feedback = cat(process.argv[4])
    // console.log(`feedback: ${feedback}`);
    fs.writeFile(process.argv[3], feedback, "utf-8", (err) => {
      console.log(err);
    });
  } else {
    console.log("ERRORRRROROROOR1");
  }
} else {
  console.log("no --out");
  if (process.argv[2].indexOf("http") !== -1) {
    console.log("http");
    webCat(process.argv[2]).then((res) => {
      console.log(res);
    });
  } else if (process.argv[2].indexOf("txt") !== -1) {
    newInfo = cat(process.argv[2]);
    // console.log(`final: ${newInfo}`)
  } else {
    console.log("ERRORRRROROROOR2");
  }
}

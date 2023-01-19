const fs = require("fs").promises;
const path = require("path");

// devuelve los files según el camino que se indique revisar
// fs.readdir("..")
//   .then((resolve) => {
//     if (resolve.slice(-2, -1) === "js") {
//       console.log("javascript");
//     }
//   })
//   .catch((err) => console.log(err));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/.node_modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    if (!/\.css$/g.test(fileFullPath)) continue;
    if (/.sec/g.test(fileFullPath)) continue;
    console.log(fileFullPath);
  }
}

readdir("c:/Users/Cesar Hooper/Desktop/JS/");

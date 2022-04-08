const basePath = process.cwd();
const fs = require("fs");

const {
  baseUri,
  description,
  namePrefix,
} = require(`${basePath}/src/config.js`);

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

console.log("Info will be updated using the config.js data.");

data.forEach((item) => {
  item.name = `${namePrefix} #${item.edition}`;
  item.description = description;
  item.image = `${baseUri}/${item.edition}.png`;
 
  fs.writeFileSync(
    `${basePath}/build/json/${item.edition}.json`,
    JSON.stringify(item, null, 2)
  );
});

fs.writeFileSync(
  `${basePath}/build/json/_metadata.json`,
  JSON.stringify(data, null, 2)
);

console.log(`Updated name prefix for images to ===> ${namePrefix}`);
console.log(`Updated baseUri for images to ===> ${baseUri}`);
console.log(`Updated description for images to ===> ${description}`);

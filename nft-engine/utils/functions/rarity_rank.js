const basePath = process.cwd();
const fs = require("fs");
const { layerConfigurations } = require(`${basePath}/src/config.js`);

try {
  // read json data
  const rawdata = fs.readFileSync(
    `${basePath}/build/json/_metadata_with_rarity.json`
  );
  const nfts = JSON.parse(rawdata);
  
  const top = layerConfigurations.growEditionSizeTo;
  const sortedNfts = nfts.sort(
    (a, b) => b.total_rarity_score - a.total_rarity_score
  );
  const topNfts = sortedNfts.slice(0, top);
  console.log(
    topNfts.map(({ rank, total_rarity_score, name }) => {
      return {
        name,
        rank,
        total_rarity_score,
      };
    })
  );
  
} catch (e) {
  console.error("unable to rank", e);
}

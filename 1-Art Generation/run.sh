#!/bin/sh

#Considering that step 0 is already executed, we now need only to install the node dependencies and run the generation script
cd ../nft-engine
npm install 

# Generates unique images based on the layers in the layers folder.
# WARNING: This command deletes the build folder if it exists!
npm run --prefix ../nft-engine generate


#Now that we have created our NFT image files we need to calculate the rarity to update our metadata
npm run --prefix ../nft-engine rarity_md
npm run --prefix ../nft-engine rarity_rank
npm run --prefix ../nft-engine update_info
npm run --prefix ../nft-engine create_generic
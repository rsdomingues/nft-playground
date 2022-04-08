#!/bin/sh

#Considering that step 0, 1 are already executed, we now need only to upload the image files and metadata to the IPFS
npm run --prefix ../nft-engine upload_files
npm run --prefix ../nft-engine upload_metadata


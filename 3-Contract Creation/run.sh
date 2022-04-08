#!/bin/bash

#Considering that step 0, 1, 2 are already executed, we now need to register the contract that we will use to create our NFT's
npm run --prefix ../nft-engine deploy_contract

#after deployment we have to wait for the contract to be deployed, we can check the deployment using the following comand. On the test network is very fast, but it can take more time on the polygon network
npm run --prefix ../nft-engine get_contract
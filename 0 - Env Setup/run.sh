#!/bin/sh

#setting the base environment
export NFT_PORT_TOKEN="<nft_port_token>" 
export NFT_ONWER_WALLET="<your_wallet_where_nfts_will_be_originated>"
export NFT_TREASURY_WALLET="<your_trasury_wallet>"

#confirming environment configuration
echo NFT_PORT_TOKEN set to "${NFT_PORT_TOKEN}"
echo NFT_ONWER_WALLET set to "${NFT_ONWER_WALLET}"
echo NFT_TREASURY_WALLET set to "${NFT_TREASURY_WALLET}"
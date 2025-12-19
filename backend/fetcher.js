const { Alchemy, Network } = require("alchemy-sdk");

const config = {
  apiKey: "YOUR_ALCHEMY_API_KEY",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

async function getFloorPrices(collectionAddress) {
  try {
    // Alchemy se floor price fetch karna
    const floorPrice = await alchemy.nft.getFloorPrice(collectionAddress);
    
    console.log("Prices for Collection:", collectionAddress);
    console.log("OpenSea Floor:", floorPrice.openSea.floorPrice);
    console.log("LooksRare Floor:", floorPrice.looksRare.floorPrice);
    
    return floorPrice;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getFloorPrices("0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"); // Example: BAYC

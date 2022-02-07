const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('SmoothApe');
    const nftContract = await nftContractFactory.deploy("SmoothApe Country Club", "SACC", "https://gateway.pinata.cloud/ipfs/QmaoMZ19zhpC6T4id6jdBP1Qz5dQSmRZMkQZU7Zt8hyFNQ/", "https://ipfs.io/ipfs/QmTtwzaNy5a28u6c92Vyf8u8si8Sp6FbcabEoyRaxymF2Y?filename=CodySeekins_CrystalTranshumanist_Framed_Original-978x978.png");
    // const nftContract = await nftContractFactory.deploy("ipfs://QmcVcgXSYAQcbRAZm64U6y5ZJAX8d293Voj5dvNdBh7DHE/", "ipfs://QmcVcgXSYAQcbRAZm64U6y5ZJAX8d293Voj5dvNdBh7DHE/");
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    // set royalty fee function to 10% of contract value
    const setRoyalty = await nftContract.setRoyalties("0x7350243981aB92E2A3646e377EBbFC28e9DE96C1", 1000);
    await setRoyalty.wait();

    // set presale to true
    // const setPresale = await nftContract.setPresale(true);
    // await setPresale.deployed();
  };
  
const runMain = async () => {
try {
    await main();
    process.exit(0);
} catch (error) {
    console.log(error);
    process.exit(1);
}
};

runMain();
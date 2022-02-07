const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('SmoothApe');
  const nftContract = await nftContractFactory.deploy("https://ipfs.io/ipfs/QmcVcgXSYAQcbRAZm64U6y5ZJAX8d293Voj5dvNdBh7DHE", "https://ipfs.io/ipfs/Qmc6T38WT9avKCNa2UQkLM8pbV8umGM7tvJ1jq6eGGuEdK?filename=90.webp");
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // let mintNFT = await nftContract.mintApe({
  //   value: hre.ethers.utils.parseEther('0.001'),
  // });
  // await mintNFT.wait();
  // console.log("NFT minted");
  // let mintNFT1 = await nftContract.mintApe({
  //   value: hre.ethers.utils.parseEther('0.001'),
  // });
  // await mintNFT1.wait();
  // console.log("NFT minted");
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
const hre = require("hardhat");

async function main() {
  const [deployer, addr1, addr2] = await hre.ethers.getSigners();
  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  
  // Deploy with 2-of-3 setup
  const wallet = await MultiSig.deploy([deployer.address, addr1.address, addr2.address], 2);

  await wallet.waitForDeployment();
  console.log(`MultiSig Wallet deployed to: ${await wallet.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

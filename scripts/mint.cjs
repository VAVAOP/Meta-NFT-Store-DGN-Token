// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Degen.sol/Degen.json");
require('dotenv').config()

const tokenAddress = "0x79B62fF9aE32dEA12Bcb36573A4E5Eb72F6742CF"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xe7785AC2efB7034BBcBD841394CE8813F09E5cEC"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
      const depositTx = await token.mint(walletAddress,10000);
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    console.log("DGN Token Deposited To Your Account !!!!");
    console.log("You now have: " + await token.balanceOf(walletAddress) + " DGN");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
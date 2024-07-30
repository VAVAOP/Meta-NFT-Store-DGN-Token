# Meta-NFT-Store-DGN-Token
This Is A Project in Which We Develop FrontEnd Of And NFT(ERC721A) Redeeming Store In Exchange Of Token(ERC20) Using React.js And Deploy The Both Token And NFT Contract To Avalanche Fuji Network And Verify Those Contracts.The Main Components That Needed To Build The Project is :
* NodeJS
* HardHat
* Solidity
* React
## Description
This Project Include :
* Deploying Two Contracts One Is ERC20 DGN Token Contract And ERC721A Contract For NFT
* Developing Frontend Of Dapp So That Users Can Interact With Contract Using Their MetaMask Wallet
* Token Contract Should Be Able To Perform Simple Task Like :
**Get Balance**  ,
**Mint Token (Only Owner Should Able To Call)** ,
**Transfer Token** ,
 And **Burn Token**
* NFT Contract Should Be Able To Perform Task Like:
**Get Balance**  ,
**Mint NFT (Only Owner Should Able To Call)** ,
**Transfer NFT** ,
**Redeem NFT** ,
 And **Burn NFT**
* Front End Is Builded Using React.js :
* Which Has The Inputs To Take Value From User To Contract
* Able To call The Wallet And Connect To Metamask
* AVALANCHE FUJI NETWORK Will Be Using To Deploy The Contract
* Front End Will Be Hosting In Local Server Of Your Enviornment
## Getting Started
The Token Is Written In Solidity And ERC20 Templates And More Details Can Be obtained From OpenZeppelin libraries [here](https://openzeppelin.com/contracts/)
And You Can Build Your on Token Contract From Scratch By Importing ERC20 Standards From This [page](@openzeppelin/contracts@5.0.1/token/ERC20/ERC20.sol)
This Project Just Shows A Simple Version Of token Contract In Solidity With ERC20 Standards It Doesn't Means Final Output It Needs To Be Further Developer For Interacting With Deapps And Deploy In Main Net .You Can Develop You NFT Contract By Importing The Standard  Of ERC721A From [Here](https://github.com/chiru-labs/ERC721A)
Finally You Need To Setup Your React Dependencies For Your Front End You Can Use React TEMPLATE Specially Developed For Building Dapps From [Here](https://create-react-app.dev/) And Also Get A Quick Guide On Writing And Deploying Solidity Contract Into Fuji Network And Interacting With Contract Using Forntend Developed Using React JS From [Quicknode](https://www.quicknode.com/guides/other-chains/avalanche/how-to-create-a-dapp-on-avalanches-fuji-testnet-with-quicknode)
* After You Guys Setuped Your Token And NFT Contract Now Delpoy It In Fuji Network For THat You Need Test Tokens InFuji NetWork .You Can Get Test Faucet For Free From [Here](https://faucet.avax-test.network/)(Upto 2 AVAX)By Joinig Their Guild
* All The Contracts And Front End Script Has Been Provided With The Project So Feel Free To Use Them As Template Or As Reference Study Material
* Dont Forget to Add Your Private Key In env File And Rename That File To ".env"
* After That You Guys Are Good To Deploy Your Contracts To Fuji TestNetWork
## Executing Programme
*First We Need To Compile The Token And Nft Contract For That Type This Command On Your Terminal
````
npx harhat compile
````
* After Compilation Has Been Succesful


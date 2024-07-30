# Meta-NFT-Store-DGN-Token
This Is A Project in Which We Develop FrontEnd Of And NFT(ERC721A) Redeeming Store In Exchange Of Token(ERC20) Using React.js And Deploy The Both Token And NFT Contract To Avalanche Fuji Network And Verify Those Contracts.The Main Components That Needed To Build The Project is :
* NodeJS
* HardHat
* Solidity
* React
[](MetaStore.jpg)
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
* The Token Is Written In Solidity And ERC20 Templates And More Details Can Be obtained From OpenZeppelin libraries [here](https://openzeppelin.com/contracts/)
* And You Can Build Your on Token Contract From Scratch By Importing ERC20 Standards From This [page](@openzeppelin/contracts@5.0.1/token/ERC20/ERC20.sol)
* This Project Just Shows A Simple Version Of token Contract In Solidity With ERC20 Standards It Doesn't Means Final Output It Needs To Be Further Developer For Interacting With Deapps And Deploy In Main Net .
* You Can Develop You NFT Contract By Importing The Standard  Of ERC721A From [Here](https://github.com/chiru-labs/ERC721A)
* Finally You Need To Setup Your React Dependencies For Your Front End You Can Use React TEMPLATE Specially Developed For Building Dapps From [Here](https://create-react-app.dev/) And
* Also Get A Quick Guide On Writing And Deploying Solidity Contract Into Fuji Network And Interacting With Contract Using Forntend Developed Using React JS From [Quicknode](https://www.quicknode.com/guides/other-chains/avalanche/how-to-create-a-dapp-on-avalanches-fuji-testnet-with-quicknode)
* Make Sure You Have MetaMAsk Installed on YOur Browser And Use THe Adress From The Metamask For The project
* After You Guys Setuped Your Token And NFT Contract Now Delpoy It In Fuji Network For THat You Need Test Tokens InFuji NetWork .You Can Get Test Faucet For Free From [Here](https://faucet.avax-test.network/)(Upto 2 AVAX)By Joinig Their Guild
* All The Contracts And Front End Script Has Been Provided With The Project So Feel Free To Use Them As Template Or As Reference Study Material
* Dont Forget to Add Your Private Key In env File And Rename That File To ".env"
* After That You Guys Are Good To Deploy Your Contracts To Fuji TestNetWork
## Executing Programme
* First We Need To Compile The Token And Nft Contract For That Type This Command On Your Terminal
````
npx harhat compile
````
* After Compilation Has Been Succesfully You Need To Deploy It To Fuji Network
* Before That Add Your Contact.json File Path To The Deploy Script And Deploy It USing Command:
````
 npx hardhat run scripts/deploy.cjs --network fuji
````
* After That We Need To Verify The Contract For That Run The Command with Your Token ADdRess That You Get While You dEploed:
````
npx hardhat verify --network fuji <YOUR TOKEN CONTRACT>
````
* Deploy The NFt Contract In The Same Manner
* Next You Need To Mint Token To The Address That You Like
* Remember Only Owner Can Call mint Function
* So PAste Your Contract Address And Wallet Address To Mint Script
* Make Sure To Check The Name Of the mint fn is same then Enter The Amount of Token That You Wanna mint And Then Run Command:
````
 npx hardhat run scripts/mint.cjs --network fuji
````
* Finally We need To Launch Our Frontend To Local Host:
* For That Paste Your Token And NFT Contract Address To App.jsx in src Folder Also Paste the Wallet Address Of Owner
* Then run The Command:
 ````
npm run dev
````
This Will Host Your Frontend To LocalServer:[http://localhost:5173/]
## Connect Wallet To The Page
* In Order To connect Wallet to Your Web3 Page You Need To Have A Wallet At First place (MetaMask Wallet Is Required)
* For Other Details Of Net Work Follow Below Info
````
Name:Avalanche Fuji C-Chain
RPC URL: https://api.avax-test.network/ext/bc/C/rpc
Chain ID:43113
Currency Symbol:AVAX
Explorer: https://testnet.snowtrace.io/
````
[](NFTStore.jpg)
## INTERACT With FrontENd
* After That You Will Taken To MetaStore !!!!!
* Were You Can See You Token Balance And NFT Balance
* you Will Have The Token That You Minted To Your Account As balance
* From There You Can Call TRANSFER FUNCTION,BURN FUNCTION For Both Token And NFT!!
* And You Can See The NFT Store From Were You CAn Exchange Your Token For NFT
* When you Redeem You Need To Sign In Two Transcation One For Transfering Token To owners Account And Other For Minting NFT To Users Account!!!!
* You Can Track Your Transaction in [SnowTrace](https://testnet.snowtrace.io/) By Pasting Your Contract ADRESSES
## Explore Your Creativity
*Ofcourse This Is Just And Basic Template That You Can Play With You Can Add Different Functions,Images,Button And Bring Your Creativity To Life*
## Help
* There Are Many Chances We You Encounter Error Either You Can Google is As Most Of The Errors Are Solved Before There OR
 Feel Free To Contact Me On My Gmail For Futher Clarification About The Project:
````
iamoneofthechoosen1@gmail.com
````

## Authors

Dabi 
[@Dabi](iamoneofthechoosen1@gmial.com)


## License

This project is licensed under the [Dabi] License - see the LICENSE.md file for details





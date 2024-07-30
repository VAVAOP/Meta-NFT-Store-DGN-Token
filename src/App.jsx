import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import './App.css'
import atm_abi from '../artifacts/contracts/Degen.sol/Degen.json'
import nft_abi from '../artifacts/contracts/NFT.sol/FuturisticFactory.json'


function App() {
  
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [nft,setNFT] =useState(undefined);
  const [balance,setBalance] = useState(undefined);
  const [nftbalance, setnftBalance] = useState(undefined);

  const contractAddress = "0x79B62fF9aE32dEA12Bcb36573A4E5Eb72F6742CF";
  const nftcontractAddress="0x2aB9CF13A69382410848e030399B2582c22943dd";
  const Owner ="0xe7785AC2efB7034BBcBD841394CE8813F09E5cEC";
  const atmABI = atm_abi.abi;
  const nftABI =nft_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts" });
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
     
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
    getNFTContract();
    
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.GetBalance()).toNumber());
    }
  }

  const getNFTContract =() =>{
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(nftcontractAddress, nftABI, signer);
 
   setNFT(nftContract);
  }

  const [User,setUser] =useState(undefined);
  const getUser =async()=>{
    if (nft){
      setUser((await nft.user()));
    }
  }

  const getNFTBalance =async() =>{
    if(nft){
    
     
      setnftBalance((await nft.getBalance(User)).toNumber());
    }
  }



  const [TransferAddress,SetTransferAddress]=useState(undefined);
  const transferaddresschange=event =>{
    SetTransferAddress(event.target.value)
  }
  const [TransferAmount,SetTransferAmount]=useState(undefined);
  const transferchange=event =>{
    SetTransferAmount(event.target.value)
  }
 const amounttransfer =async() =>  {
   if (atm) {
     let tx = await atm.TransferDGNtokens(TransferAddress,TransferAmount);
     await tx.wait()
     getBalance();
   }
 }
 const [Tokenid,SetTokenid]=useState(undefined);
 const Tokenidchange=event =>{
   SetTokenid(event.target.value)
 }
const nfttransfer =async() =>  {
  if (nft) {
    let YU = await nft.TransferNFT(User,TransferAddress,0);
    await YU.wait()
    getNFTBalance(); 
  }
}

 const amountburn = async() => {
  if (atm) {
    let tx = await atm.BurnDGNtokens(BurnAmount);
    await tx.wait()
    getBalance();
  }
}
const [BurnAmount,SetBurnAmount]= useState(undefined);

const burnchange = event =>{
  SetBurnAmount(event.target.value)
}

const nftburn = async() => {
  if (nft) {
    let tx = await nft.BurnNFT(BurnToken);
    await tx.wait()
    getNFTBalance();
  }
}
const [BurnToken,SetBurnToken]= useState(undefined);

const burntokenchange = event =>{
  SetBurnToken(event.target.value)
}

const[BalanceAddress,SetBalanceAddress]=useState(undefined);
const balanceaddresschange = event =>{
  SetBalanceAddress(event.target.value)
}
const checkbalance = async() => {
  if (atm) {
    SetCheckBalance(await atm.GetBalanceOf(BalanceAddress));
    
    
  }
}
const[CheckBalance,SetCheckBalance]=useState(undefined);
const getbalanceprint =()=>{
  alert(CheckBalance);
  checkbalance();

}


const checknftbalance = async() => {
  if (nft) {
    SetCheckNFTBalance(await nft.getBalance(BalanceAddress));
    
    
  }
}
const[CheckNFTBalance,SetCheckNFTBalance]=useState(undefined);
const getnftbalanceprint =()=>{
  alert(CheckNFTBalance);
  checknftbalance();
}




const Redeem = async(Price)=>{
   let tx = await atm.TransferDGNtokens(Owner,Price); 
   await tx.wait()
   getBalance();
   let nx =await nft.RedeemNFT();
   await nx.wait()
  getNFTBalance();
}



  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }
    if(User == undefined){
      getUser();
    }
    if (nftbalance ==undefined){
      getNFTBalance();
    }
  
    return (
   <div>
     <h2>Your Profile</h2>
     <p>Your Account: {account}</p>
     <p>DGN Token : {balance}</p>
     <p>NFT's Acquired :{nftbalance}</p>
     <div>
      <input
      type="text"
      placeholder="Transfer Address"
      value={TransferAddress}
      onChange={transferaddresschange}/>
       <input
      type="text"
      placeholder="Transfer Amount"
      value={TransferAmount}
      onChange={transferchange}/>

      <button  onClick ={()=>{
        amounttransfer() 
       }}>Transfer DGN Token</button>
     </div><div>
     <input
      type="text"
      placeholder="Transfer Address"
      value={TransferAddress}
      onChange={transferaddresschange}/>
       <input
      type="text"
      placeholder="Token Id"
      value={Tokenid}
      onChange={Tokenidchange}/>
      <button  onClick ={()=>{
        nfttransfer() 
       }}>Transfer NFT</button>
     </div>
     <div>
      <input
      type="text"
      placeholder="Burn Amount"
      value={BurnAmount}
      onChange={burnchange}/>
       <button  onClick ={()=>{
        amountburn() 
       }}>Burn DGN Token</button>
      
     </div>
     <div>
      <input
      type="text"
      placeholder="NFT Id For Burn "
      value={BurnToken}
      onChange={burntokenchange}/>
       <button  onClick ={()=>{
        nftburn() 
       }}>Burn NFT</button>
      
     </div>
     <div>
      <input
      type="text"
      placeholder="Address"
      value={BalanceAddress}
      onChange={balanceaddresschange}
      />
      <button  onClick ={()=>{
        checkbalance();
        getbalanceprint();
        
        
       }}>DGN Balance</button>
          <button  onClick ={()=>{
        checknftbalance();
        getnftbalanceprint();
        
        
       }}>NFT Balance</button>
     </div>
     <div><h2>NFT Store</h2></div>
     <div>
     <img style={{
      width:'150px',
      height:'150px',
      padding:'20px'
     }} src="src/images/FuturisticFactory 0.jpg" alt=""/>
     <img style={{
      width:'150px',
      height:'150px',
      padding:'20px'
     }} src="src/images/FuturisticFactory 1.jpg" alt=""/>
      <img style={{
      width:'150px',
      height:'150px',
      padding:'20px'
     }} src="src/images/FuturisticFactory 2.jpg" alt=""/>
      <img style={{
      width:'150px',
      height:'150px',
      padding:'20px'
     }} src="src/images/FuturisticFactory 3.jpg" alt=""/>
      <img style={{
      width:'150px',
      height:'150px',
      padding:'20px'
     }} src="src/images/FuturisticFactory 4.jpg" alt=""/>
     </div>
     <div >
      <button style={{marginInline:'20px'}}  onClick ={()=>{
       
      Redeem(3000);
     
       
        }}>3000 DGN</button>
      <button style={{marginInline:'65px'}} onClick ={()=>{
        
        Redeem(250);
     
        }}>250 DGN</button>
      <button style={{margin:'20px'}} onClick ={()=>{
     Redeem(700);
    
        
        }}>700 DGN</button>
      <button style={{marginInline:'65px'}} onClick ={()=>{
     
     Redeem(1500);
     
        }}>1500 DGN</button>
      <button style={{marginInline:'20px'}} onClick ={()=>{
     
     Redeem(100);
     
        }}>100 DGN</button>
     </div>
    
   
     
   </div>
   
    

      
      
    )
  }
  useEffect(() => {getWallet();}, []);

  return (
    <>
    <header><h1>Meta Store !!!</h1></header>
      <div>
      
      {initUser()}
       
      </div>
      
     
    </>
  )
}

export default App

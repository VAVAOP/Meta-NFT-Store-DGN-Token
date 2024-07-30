// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract FuturisticFactory is ERC721A{

    address public owner;

    // Maximum number of tokens that can be minted
    uint256 public maxQuantity = 5;

    // Base url for the nfts
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmYkQRKVrAzBKkqs9TKrG9VhRFP9YubSHeTbXuWoBoQjDu/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    // URL for the prompt description
    string public prompt =
        "a future, modern and futuristic print & packaging factory inside, hd, 16:9";

    constructor() ERC721A("FuturisticFactory", "FF") {
        owner = msg.sender;
    }

    // Modifier that only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    // Function to mint NFT which only owner can perform
    function mint(uint256 quantity) external payable {
        require(totalSupply() + quantity <= maxQuantity ,"You can not mint more than 5");
        _mint(msg.sender, quantity);
    }
    

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Return the URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
    function TransferNFT(address _from,address _to,uint256 _value)public payable {
        transferFrom(_from,_to,_value);
    }
    function getBalance (address _user)public view returns (uint256) {
        return balanceOf(_user);

    }
    function BurnNFT(uint256 _value)external{
     _burn(_value,false);
    }
    function user() view public returns(address) {
        return address(msg.sender);
    }
    function RedeemNFT() external payable {
        _mint(msg.sender,1);

    }
}

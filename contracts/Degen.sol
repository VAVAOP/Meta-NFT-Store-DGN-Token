// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Degen is ERC20, ERC20Burnable, Ownable {
    constructor(address initialOwner)
        ERC20("Degen", "DGN")
        Ownable(initialOwner)
    { }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    function GetBalance() external view returns(uint256){
        return this.balanceOf(msg.sender);
    }
      function GetBalanceOf(address checker)external view returns(uint256){
        return balanceOf(checker);
    }
       function TransferDGNtokens(address _receiver,uint256 _value)external {
        require(balanceOf(msg.sender)>=_value,"You Dont Possess Enough Tokens To Transfer");
        approve(msg.sender,_value);
        transferFrom(msg.sender,_receiver,_value);
    }
       function BurnDGNtokens(uint256 _value) external{
        require(balanceOf(msg.sender)>=_value,"You Dont Possess Enough Tokens To Burn");
        approve(msg.sender,_value);
        burn(_value);

    }



}

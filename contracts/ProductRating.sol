pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ProductRating is StandardToken, Ownable {

    struct Product {
        string description;
        uint totalRating;
        uint amountReviews;
        mapping(address => bool) rated;
    }

    Product product;

    //Default token properties
    string public name = "ProductRating";
    string public symbol = "PDR";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 1000000;

    constructor() public {
        owner = msg.sender;
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

    //Replace the product to be rated
    function addOrReplace(string _description) public onlyOwner {
        require(keccak256(bytes(_description)) != keccak256(""), "The product must have a description!");
        require(msg.sender == owner, "Permission denied! Reason: This operation is allowed only to the owner");

        Product memory _product = Product({
            description: _description,
            totalRating: 0,
            amountReviews: 0
        });

        product = _product;
    }

    //Review the product
    function review(uint8 _userReview) public {
        require(_userReview >= 0 && _userReview <= 5, "The value of rating must be between 0 and 5");
        require(!product.rated[msg.sender], "This address already rated the product");

        product.amountReviews++;
        product.rated[msg.sender] = true;
        product.totalRating += _userReview;
    }

    //Calculate the product rating and returns it and the product description
    function get() public view returns (string description, uint average) {
        return (
            product.description,
            product.amountReviews > 0 ? ((product.totalRating * 10)/product.amountReviews) : 0
        );
    }
}


























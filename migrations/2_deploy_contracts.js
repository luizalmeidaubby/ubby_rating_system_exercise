var RatingToken = artifacts.require("ProductRating.sol");

module.exports = function(deployer) {
    deployer.deploy(RatingToken);
};
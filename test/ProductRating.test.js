const ProductRating = artifacts.require("./ProductRating.sol");

contract("ProductRating", accounts => {
    beforeEach(async () => {

        prodRating = await ProductRating.new();
    });

    describe("Rating", async() => {
        it('add the product', async() => {
            await prodRating.addOrReplace("Product test", {from: accounts[0], gas: '1000000'});
        });

        it("Replace the product", async() => {
            await prodRating.addOrReplace("Product test", {from: accounts[0], gas: '1000000'});
            await prodRating.addOrReplace("Product test 2", {from: accounts[0], gas: '1000000'});
        });

        it("Trying to add a product with another account", async() => {
            try{
                await prodRating.addOrReplace("Product test", {from: accounts[1], gas: '1000000'});
              } catch(_err) {
                var err = _err;
              };
              assert(err);
        });

        it("Trying to review more than once", async() => {
            await prodRating.addOrReplace("Product test", {from: accounts[0], gas: '1000000'});

            try {
                await prodRating.review(2, {from: accounts[1], gas: '1000000'});
                await prodRating.review(2, {from: accounts[1], gas: '1000000'});
            } catch (_err) {
               var err = _err;
            }

            assert(err);
        });

        it('Add product reviews', async() => {
            await prodRating.addOrReplace("Product test", {from: accounts[0], gas: '1000000'});
            await prodRating.review(2, {from: accounts[1], gas: '1000000'});
            await prodRating.review(3, {from: accounts[2], gas: '1000000'});
        
            let product = await prodRating.get({from: accounts[3], gas: '1000000'});
            assert(product[1].c[0] == 25);
        });

        it("Add a product review out of range", async() => {
            await prodRating.addOrReplace("Product test", {from: accounts[0], gas: '1000000'});
            try {
                await prodRating.review(9, {from: accounts[1], gas: '1000000'});
            } catch (_err) {
                var err = _err;
            }

            assert(err);
        });
    });
});
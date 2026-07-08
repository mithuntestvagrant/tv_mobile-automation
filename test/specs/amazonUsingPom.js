
import searchPage from '../pageobject/searchPage.js';
import addToCart from '../pageobject/addToCart.js';
import proceedToBuy from '../pageobject/proceedToBuy.js';

describe('Amazon With POM', () => {

    it('should search for jeans', async () => {
        await searchPage.searchDetails('mobiles');
        await addToCart.cartButton();
        await proceedToBuy.purchase();
    });

});

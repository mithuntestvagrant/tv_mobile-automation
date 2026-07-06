
import productpage from '../pageobject/productpage.js';
import infopage from '../pageobject/infopage.js';
import checkoutData from '../../testData/data/checkoutData.json';

describe('Sauce Demo App', () => {

    it('Verify successful checkout', async () => {

        await productpage.addProductAndCheckout();

        await infopage.enterShippingDetails(
            checkoutData.fullName,
            checkoutData.address,
            checkoutData.city,
            checkoutData.zipCode,
            checkoutData.country
        );

        await infopage.clickPayment();

        await infopage.enterCardDetails(
            checkoutData.cardHolderName,
            checkoutData.cardNumber,
            checkoutData.expiryDate,
            checkoutData.securityCode
        );

        await infopage.clickReview();

        await infopage.placeOrder();

        await infopage.verifyCheckoutComplete();

    });

});
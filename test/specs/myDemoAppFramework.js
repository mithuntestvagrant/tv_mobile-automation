import myDemoAppCheckoutPage from "../pageobject/myDemoAppCheckoutPage";
import myDemoAppPaymentPage from "../pageobject/myDemoAppPaymentPage";
//import myDemoAppLoginPage from "../pageobject/myDemoAppLoginPage";
import myDemoAppProductPage from "../pageobject/myDemoAppProductPage";
import myDemoAppPlaceOrderPage from "../pageobject/myDemoAppPlaceOrderPage";
describe(' MyDemo App - Checkout Flow', () => {
    it('should login, add product to cart, and complete checkout', async () => {

        await myDemoAppProductPage.addProductToCartAndCheckout();
        await myDemoAppCheckoutPage.enterCheckoutDetails('John Doe', 'btm', 'pune', 'goa', '12345', 'india');
       await myDemoAppPaymentPage.enterPaymentDetails('John Doe', '1234567890123456', '12/25', '123');
        await myDemoAppPlaceOrderPage.placeOrder();

        await myDemoAppPlaceOrderPage.validateCheckoutComplete();

    
    });
});
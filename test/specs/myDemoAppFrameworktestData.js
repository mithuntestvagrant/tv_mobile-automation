import myDemoAppCheckoutPage from "../pageobject/myDemoAppCheckoutPage";
import myDemoAppPaymentPage from "../pageobject/myDemoAppPaymentPage";
//import myDemoAppLoginPage from "../pageobject/myDemoAppLoginPage";
import myDemoAppProductPage from "../pageobject/myDemoAppProductPage";
import myDemoAppPlaceOrderPage from "../pageobject/myDemoAppPlaceOrderPage";
import checkoutData from "../../testDataDemoApp/checkout.json";
describe(' MyDemo App - Checkout Flow', () => {
    it('should login, add product to cart, and complete checkout', async () => {

        await myDemoAppProductPage.addProductToCartAndCheckout();
        await myDemoAppCheckoutPage.enterCheckoutDetails(checkoutData.checkout.fullName, checkoutData.checkout.address, checkoutData.checkout.city, checkoutData.checkout.state, checkoutData.checkout.postalCode, checkoutData.checkout.country);
       await myDemoAppPaymentPage.enterPaymentDetails(checkoutData.payment.fullName, checkoutData.payment.cardNumber, checkoutData.payment.expirationDate, checkoutData.payment.cvv);
        await myDemoAppPlaceOrderPage.placeOrder();

        await myDemoAppPlaceOrderPage.validateCheckoutComplete();

    
    });
});
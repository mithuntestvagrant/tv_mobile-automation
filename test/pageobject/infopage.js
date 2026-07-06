class infopage {

    
    get fullName() {
        return $('#com.saucelabs.mydemoapp.android:id/fullNameET');
    }

    get address() {
        return $('#com.saucelabs.mydemoapp.android:id/address1ET');
    }

    get city() {
        return $('#com.saucelabs.mydemoapp.android:id/cityET');
    }

    get zipCode() {
        return $('#com.saucelabs.mydemoapp.android:id/zipET');
    }

    get country() {
        return $('#com.saucelabs.mydemoapp.android:id/countryET');
    }

    get paymentBtn() {
        return $('~Saves user info for checkout');
    }



    get cardHolderName() {
        return $('#com.saucelabs.mydemoapp.android:id/nameET');
    }

    get cardNumber() {
        return $('#com.saucelabs.mydemoapp.android:id/cardNumberET');
    }

    get expiryDate() {
        return $('#com.saucelabs.mydemoapp.android:id/expirationDateET');
    }

    get securityCode() {
        return $('#com.saucelabs.mydemoapp.android:id/securityCodeET');
    }

    

    get reviewBtn() {
        return $('~Saves payment info and launches screen to review checkout data');
    }

    get placeOrderBtn() {
        return $('~Completes the process of checkout');
    }

    

    get checkoutCompleteMsg() {
        return $('#com.saucelabs.mydemoapp.android:id/completeTV');
    }

    

    async enterShippingDetails(data) {
        await this.fullName.setValue(data.fullName);
        await this.address.setValue(data.address);
        await this.city.setValue(data.city);
        await this.zipCode.setValue(data.zipCode);
        await this.country.setValue(data.country);
    }

    async clickPayment() {
        await this.paymentBtn.click();
    }

    async enterCardDetails(data) {
        await this.cardHolderName.setValue(data.cardHolderName);
        await this.cardNumber.setValue(data.cardNumber);
        await this.expiryDate.setValue(data.expiryDate);
        await this.securityCode.setValue(data.securityCode);
    }

    async clickReview() {
        await this.reviewBtn.click();
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }

    async completeCheckout() {
        await this.clickPayment();
        await this.clickReview();
        await this.placeOrder();
    }

    async verifyCheckoutComplete() {
        await expect(this.checkoutCompleteMsg)
            .toHaveText('Checkout Complete');
    }
}

export default new infopage();
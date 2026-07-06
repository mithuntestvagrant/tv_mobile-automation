describe('Android UIAutomator Demo', () => {

    it('Click the third product', async () => {

        const thirdProduct = await $(
            'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(2)'
        );

        await thirdProduct.click();

    });

});
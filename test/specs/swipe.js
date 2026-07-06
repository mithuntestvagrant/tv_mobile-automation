describe('Swipe Demo', () => {

    it('Swipe Up', async () => {

        await driver.execute('mobile: swipeGesture', {
            left: 562,
            top: 982,
            width: 463,
            height: 578,
            direction: 'right',
            percent: 0.8
        });

        const product = await $('#com.saucelabs.mydemoapp.android:id/productIV');

        await product.click();

    });

});
describe('Amazon Search', () => {

    it('should search for jeans', async () => {
        
        
        const searchBar = await $('//android.widget.TextView[@resource-id="in.amazon.mShop.android.shopping:id/chrome_search_hint_view"]');
        //await searchBar.waitForDisplayed({ timeout: 10000 });
        await searchBar.click();

        
        const searchInput = await $('//android.widget.EditText[@resource-id="in.amazon.mShop.android.shopping:id/rs_search_src_text"]');
       // await searchInput.waitForDisplayed({ timeout: 10000 });

        // Enter the search text
        await searchInput.setValue('mobiles');

        // Press the Search/Enter key
        await driver.pressKeyCode(66);

        await $('~Add to cart').click()

       await $('~close').click()
          await $('//android.widget.FrameLayout[@content-desc="Cart 1 item Tab 3 of 4"]/android.widget.FrameLayout/android.widget.ImageView[@resource-id="in.amazon.mShop.android.shopping:id/bottom_tab_button_icon"]').click()

          await $('//android.view.View[@resource-id="sc-buy-box-ptc-button"]').click()

        //   await $('//android.widget.TextView[@text="Enter mobile number or email"]').setValue('8340693404')

        //   await $('//android.widget.Button[@text="Continue"]').click();


        
    });

});
describe('Amazon App', () => {

    it('Search and add product to cart', async () => {

        const searchHint = await $('//*[@resource-id="in.amazon.mShop.android.shopping:id/chrome_search_hint_view"]');
        await searchHint.waitForDisplayed({ timeout: 10000 });
        await searchHint.click();

        const search = await $('//*[@resource-id="in.amazon.mShop.android.shopping:id/rs_search_src_text"]');
        await search.click();
        await search.setValue('mobiles');

        const mobilesSuggestion = await $('//android.view.View[@resource-id="sac-suggestion-row-3"]');
        await mobilesSuggestion.click();

        const cart = await $('//android.widget.Button[@content-desc="Add to cart"]');
        await cart.click();

    });

    

});
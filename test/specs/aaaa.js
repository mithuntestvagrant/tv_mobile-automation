describe('demo',()=>{
    it('amazon',async()=>{
        await $('//android.widget.TextView[@resource-id="in.amazon.mShop.android.shopping:id/chrome_search_hint_view"]').click()
        await $('//android.widget.EditText[@resource-id="in.amazon.mShop.android.shopping:id/rs_search_src_text"]').click();
    })
})
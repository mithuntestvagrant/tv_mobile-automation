describe('Vertical Scroll', () => {
    it('should scroll vertically', async () => {
        await $ ('~App').click();
        await $('~Activity').click();

        // scroll to the bottom of the page

        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // await $('~Secure Surfaces').click();

        // scroll into view

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();


    })
})
    
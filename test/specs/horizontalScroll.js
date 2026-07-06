describe('Horizontal Scroll', () => {
    it('should scroll horizontally', async () => {
    
        await $('~Views').click();
        await $('~Gallery').click();
        await $('~1. Photos').click();


        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(1000);

    })
})

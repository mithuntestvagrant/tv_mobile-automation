describe('demo', () => {        
    it('scroll practice', async () => {
        const element = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Emergency SOS, medical info, alerts"))');
        await element.click();
        await browser.pause(2000);
    });
}); 

describe('Date Widget', () => {
    it('should select a date', async () => {
        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(1000);
        await $('~10 August 2026').click();
    })
})
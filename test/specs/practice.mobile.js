describe('Home page', () => {

    it('Open Notifications', async () => {
        const setting=await $('~Predicted app: Settings')
        await setting.click();

        const notifications = await $('//*[@resource-id="android:id/title" and @text="Notifications"]');
        await notifications.waitForDisplayed({ timeout: 10000 });

        await notifications.click();

        
    });

});
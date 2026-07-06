describe('Alert', () => {
    it('should handle alert', async () => {
        await $ ('~App').click();
        await $ ('~Alert Dialogs').click();
        await $('~OK Cancel dialog with a message').click();

        // accept alert

        //await driver.acceptAlert();

        // dismiss alert

       // await driver.dismissAlert();

       // get alert text
       const alertText = await driver.getAlertText();
       console.log(alertText);

       // click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();


    })
})
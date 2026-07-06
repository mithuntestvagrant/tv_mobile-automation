describe('Scroll Down', () => {

    it('Scroll to the 7th Settings item', async () => {

        const element = await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.android.settings:id/text_frame").instance(6))'
        );

        await element.click();

    });

});


// describe('Scroll Down', () => {

//     it('Click 8th Settings item', async () => {

//         await driver.execute('mobile: scrollGesture', {
//             left: 100,
//             top: 300,
//             width: 800,
//             height: 1200,
//             direction: 'down',
//             percent: 0.8
//         });

//         const items = await $$('//*[@resource-id="com.android.settings:id/text_frame"]');
//         await items[5].click();   

//     });

// });
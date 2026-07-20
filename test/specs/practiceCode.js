describe('demo', () => {

    it('scroll to Accessibility and click', async () => {
        const accessibility = await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Accessibility"))'
        );
        await accessibility.click();
    });

});


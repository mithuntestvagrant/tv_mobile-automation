describe('Scroll Down', () => {

    it('Settings item', async () => {
        await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.android.settings:id/recycler_view"]/android.widget.LinearLayout[5]/android.widget.RelativeLayout[@resource-id="com.android.settings:id/text_frame"]').click();

      await driver.pause(3000);

    })
})

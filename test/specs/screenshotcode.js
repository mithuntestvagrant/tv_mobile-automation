
import { captureScreenshot } from '../utils/screenshot.js';
describe('demo App', () => {

    it('sauce demo mobile app', async () => {

        const product = await $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.ImageView[@content-desc="Product Image"]')
        await product.click();

        const addToCart = await $('~Tap to add product to cart');
        await addToCart.click();

        const cartbox= await $('//android.widget.ImageView[@content-desc="Displays number of items in your cart"]')
        await cartbox.click();

        const checkout =await $('~Confirms products for checkout')
        await checkout.click()

        const login= await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]')
       await login.click();
        await login.setValue('bod@example.com')

         const password= await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]')
         //await password.click();
        await password.setValue('10203040')

         const loginbutton= await $('~Tap to login with given credentials')
        await loginbutton.click();



         const fullname=await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/fullNameET"]')
         await fullname.click()
         await fullname.setValue('raj')

         const address=await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/address1ET"]')
         await address.click()
         await address.setValue('pune')

         const city=await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cityET"]')
         await city.click()
         await city.setValue('btm')

         const zipcode=await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/zipET"]')
         await zipcode.click()
         await zipcode.setValue(21212)
         
         const counrty=await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/countryET"]')
         await counrty.click()
         await counrty.setValue('south africa')
         
         const payment =await $('~Saves user info for checkout')
         await payment.click()

         const carddeatils= await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]')
         await carddeatils.click()
         await carddeatils.setValue('rishab kumar')

         const cardno= await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cardNumberET"]')
         await cardno.click()
         await cardno.setValue(1234567887654321)

         const date= await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/expirationDateET"]')
         await date.click()
         await date.setValue(1234)

         const code= await $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/securityCodeET"]')
         await code.click()
         await code.setValue(321)

         const review =await $('~Saves payment info and launches screen to review checkout data')
         await review.click()

         const placeorder =await $('~Completes the process of checkout')
         await placeorder.click()

         const completeMsg = await $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/completeTV"]');

        await expect(completeMsg).toHaveText('Checkout Complete');

        await captureScreenshot('checkout-complete');

         




   });

});
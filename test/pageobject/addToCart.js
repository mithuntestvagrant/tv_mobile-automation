class cart{
    get addCart(){
        return $('~Add to cart')
    }
    get close(){
        return $('~close')
    }

    get cartBox(){
        return $('//android.widget.FrameLayout[@content-desc="Cart 1 item Tab 3 of 4"]/android.widget.FrameLayout/android.widget.ImageView[@resource-id="in.amazon.mShop.android.shopping:id/bottom_tab_button_icon"]')
    }

    async cartButton(){
        await this.addCart.click();
        await this.close.click();
        await this.cartBox.click();
    }
}

export default new cart();
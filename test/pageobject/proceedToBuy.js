class proceed{
    get buy(){
        return $('//android.view.View[@resource-id="sc-buy-box-ptc-button"]')
    }

    async purchase(){
        await this.buy.click();
    }
}
export default new proceed();
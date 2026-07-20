class search{
    get searchButton(){
        return $('//android.widget.TextView[@resource-id="in.amazon.mShop.android.shopping:id/chrome_search_hint_view"]')
    }

    get searchInput(){
        return $('//android.widget.EditText[@resource-id="in.amazon.mShop.android.shopping:id/rs_search_src_text"]')
    }

   

    async searchDetails(searchTerm){
        await this.searchButton.click();
        await this.searchInput.setValue(searchTerm);
        await driver.pressKeyCode(66); // Press the Enter key on the Android keyboard.
    }
}

export default new search();
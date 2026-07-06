class productpage {
    
    get firstProduct() {
        return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.ImageView[@content-desc="Product Image"]');
    }

    get addToCartBtn() {
        return $('~Tap to add product to cart');
    }

    get cartIcon() {
        return $('//android.widget.ImageView[@content-desc="Displays number of items in your cart"]');
    }

    get checkoutBtn() {
        return $('~Confirms products for checkout');
    }

    async addProductAndCheckout() {
        await this.firstProduct.click();
        await this.addToCartBtn.click();
        await this.cartIcon.click();
        await this.checkoutBtn.click();
    }
}

export default new productpage();
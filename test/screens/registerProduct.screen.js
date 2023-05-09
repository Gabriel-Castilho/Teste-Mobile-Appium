class RegisterProductScreen{
    //deixa privado para classe colocar o #
    get #enterProducts(){
        return $('id:products')
    }

    get #openModalRegister(){
        return $('id:addProductButton')
    }

    get #registerProductBtn(){
        return $('id:productDetailInfoItem_desc')
    }

    get #enterProductTitle(){
        return $('android=new UiSelector().text("Enter Product Title")')
    }

    get #publishProductBtn(){
        return $('id:menu_done')
    }

    get #messagePublished(){
        return $('id:snackbar_text')
    }

    async goToProducts(){
        await this.#enterProducts.click()
    }

    async goToModalRegister(){
        await this.#openModalRegister.click()
    }

    async goToRegisterproduct(){
        await this.#registerProductBtn.click()
    }

    async registerProduct(title){
        await this.#enterProductTitle.click()
        await this.#enterProductTitle.setValue(title)
        await this.#publishProductBtn.click()

    }

    async showMessage(){
        await this.#messagePublished.waitForExist()
        await this.#messagePublished.getText()
    }

}
module.exports = new RegisterProductScreen()
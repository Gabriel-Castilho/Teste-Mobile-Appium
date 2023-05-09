class MyStoreScreen {
    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    //como pegar texto
    async getStoreName(){
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }
}

module.exports = new MyStoreScreen()
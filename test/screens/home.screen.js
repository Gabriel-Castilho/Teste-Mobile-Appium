class HomeScreen{
    //deixa privado para classe colocar o #
    get #enterStoreAddress(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        this.#enterStoreAddress.click()
    }
}
module.exports = new HomeScreen()
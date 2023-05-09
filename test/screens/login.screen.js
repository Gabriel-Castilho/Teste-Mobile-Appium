class LoginScreen {
 //deixa privado para classe colocar o #
 get #storeAddress(){
    return $('android.widget.EditText')
}

get #continue(){
    return $('id:bottom_button')
}

get #continueStoreCredentials(){
    //console.log("erro aqui no credentials")
    return $('id:login_site_creds')
}

get #username(){
    return $('android=new UiSelector().text("Username")')
}



get #password(){
    return $('android=new UiSelector().text("Password")')
} 



get #twoFactorPasswordButton(){
    return $('id:login_enter_password')
}


async setStoreAddress(url){
    await this.#storeAddress.setValue(url)
}

async continue (){
    await this.#continue.click()
}

async continueStoreCredentials(){
    await this.#continueStoreCredentials.click()
}

async login(username,password){
   await this.#username.setValue(username)
   await this.#password.setValue(password)
   await this.#continue.click()

}
async goToTwoFactorAuth(){
    await this.#twoFactorPasswordButton.click()
}

async twoFactorLogin(password){
    await this.#password.setValue(password)
    await this.#continue.click()
}

}

module.exports = new LoginScreen()
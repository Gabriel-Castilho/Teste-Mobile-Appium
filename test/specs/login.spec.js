const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")
const registerProduct = require('../screens/registerProduct.screen')

let user = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let storeUrl = 'http://lojaebac.ebaconline.art.br'

describe('Acess Admin Panel', () => {
  it('should login with valid credentials', async () => {
    await homeScreen.goToLogin()
    await loginScreen.setStoreAddress(storeUrl)
    await loginScreen.continue()
    await loginScreen.continueStoreCredentials()
    await loginScreen.login(user, password)
    await loginScreen.goToTwoFactorAuth();
    await loginScreen.twoFactorLogin(password)
    //  expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
    //   expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

    await registerProduct.goToProducts()
    await registerProduct.goToModalRegister()
    await registerProduct.goToRegisterproduct()
    await registerProduct.registerProduct("Botas Voadoras2")

  })
})


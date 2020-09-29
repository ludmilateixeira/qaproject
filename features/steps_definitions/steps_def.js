const Page = require('../page_objects/base')
const Login = require('../page_objects/login')

const assert = require('assert')
const { Given, When, Then, Before, After } = require('cucumber')
const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

let driver, page

Before(async () => {
    page = new Page()
    driver = page.driver
})

Given('que eu acesse a pagina inicial do sistema', function () {
    page.visit('http://www.aprendendotestar.com.br/treinar-automacao.php')
  })

Then('o campo de Usuario deve ser exibido vazio, para que eu possa preencher', function () {
    expect(page.findByName(Login.usuario)).to.exist.and.to.be.empty
})

Given('que o campo de Senha esteja vazio para que eu possa preencher', function () {
    expect(page.findByName(Login.senha)).to.be.empty
})

When('eu preencher o campo de senha', function () {
    page.findByName(page.findByName(Login.senha)).click()
    page.write('senha')
    
})

Then('o campo irá ocultar os valores digitados', function () {

})

After(async () => {
    page.quit()
})
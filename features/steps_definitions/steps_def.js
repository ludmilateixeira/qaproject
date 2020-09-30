const Page = require('../page_objects/base')
const Login = require('../page_objects/dadosUsuario')

const assert = require('assert')
const { Given, When, Then, And, Before, After } = require('cucumber')
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

Given('Dado que eu acione o botao enviar',function () {
  return 'terminando...'
})

And('que o campo de Senha esteja vazio para que eu possa preencher', function () {
  expect(page.findByName(Login.senha)).to.be.empty
})

And('E o campo Usuario esteja vazio',function () {
  expect(page.findByName(Login.usuario)).to.be.empty
})

When('eu preencher o campo de senha', function () {
    let el = page.findByName(Login.senha)
    page.click(el)
    page.write(el, 'senha')
})

Then('o campo de Usuario deve ser exibido vazio, para que eu possa preencher', function () {
  expect(page.findByName(Login.usuario)).to.exist.and.to.be.empty
})

Then('o campo irá ocultar os valores digitados', function () {
  expect(page.findByName(Login.senha)).to.not.have.keys('senha')
})

Then('o campo de Nome deve ser exibido vazio, para que eu possa preencher', function () {
  expect(page.findByName(Login.nome)).to.exist.and.to.be.empty
})

Then('Então eu verei uma mensagem de falha solicitando que eu preencha este campo',function () {
  return 'Feature ainda sendo implementada na UI'
})

After(async () => {
    page.quit()
})
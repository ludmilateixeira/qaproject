'use strict';
 
const { Given, When, Then, Before } = require('cucumber')
const { assert, expect, should  } = require('chai');

const login = require('../../PageObjects/login')
 
// // The step definitions are defined for each of the scenarios // //

  Given('que o usuario acesse a pagina inicial do sistema', function () {
    login.inicializaDriver()
    const assert = driver.findElements(webdriver.By.name('form_usuario')).expect(assert).to.be.exist;
  });

  // When(/^There is a title on the page as "SeleniumHQ Browser Automation" "([^"]*)"$/, function () {

  // })

  Then('o campo de Usuario deve ser exibido vazio, para ser preenchido', function () {
  })
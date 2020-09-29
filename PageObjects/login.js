const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

module.exports = {

    url: 'https://www.google.com',
  
    elements: {
      searchInput: by.name('q'),
      searchResultLink: by.css('div.g > h3 > a')
  
    },

     inicializaDriver: function() {
        const service = new chrome.ServiceBuilder(path).build()
        chrome.setDefaultService(service)
        const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
        return driver.get('http://www.aprendendotestar.com.br/treinar-automacao.php')
     }
  };
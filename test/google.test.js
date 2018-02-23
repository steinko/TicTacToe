var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

describe('To test board',() => {
    
    it('should contain a div tag ', () => {
          var driver = new webdriver.Builder()
          .forBrowser('chrome')
           .build();

           driver.get('http://www.google.com');

             driver.findElement(By.name('q')).sendKeys('webdriver');

             driver.sleep(1000).then(function() {
             driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
              });

             driver.findElement(By.name('btnK')).click();

            driver.sleep(2000).then(function() {
             driver.getTitle().then(function(title) {
           expect(title === 'webdriver - Google Search').toBeTruthy();
       });
     });
                       
     driver.quit();
     
    });
    
    it ('shoul veify buttons', () => {
    	
    	var driver = new webdriver.Builder()
        .forBrowser('chrome')
         .build();

         driver.get('http://localhost/3000/');
         driver.findElements(By.className("sqare"))
         .then(elements => {elements[1].click(); expect(elements[1].getText()).equal('o').toBeTruthy(); });
        
         
    });   
});
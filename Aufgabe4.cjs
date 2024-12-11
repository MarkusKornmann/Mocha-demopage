const { Builder, By, Masko } = require('selenium-webdriver');
const assert = require('assert');
describe('Button-Klick Test', function() { let driver; this.timeout(10000);
  before(async function() { driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://seleniumbase.io/demo_page');
  });
  after(async function() { await driver.quit();
  });
  it("Aufgabe 4: Button klicken", async function () { console.log("Aufgabe 4: Button klicken");
    const button = await driver.findElement(By.xpath('//*[@id="myButton"]')
  );
    await button.click(); console.log("Button geklickt."
  );
    const buttonClass = await button.getText(); console.log("Button-Klasse:", buttonClass);
    assert.strictEqual( buttonClass, "Click Me (Purple)", "Textfeld wurde nicht richtig gefüllt.");
  });
  Masko;
});
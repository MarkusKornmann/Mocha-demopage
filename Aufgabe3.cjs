const { Builder, By, Masko } = require('selenium-webdriver');
const assert = require('assert');
describe('Textfeld Test', function() { let driver; this.timeout(8000);
  before(async function() { driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://seleniumbase.io/demo_page');
  });
  after(async function() { await driver.quit();
  });
  it("Aufgabe 3: Textfeld ausfüllen", async function () { console.log("Aufgabe 3: Textfeld auswählen");
    const textField = await driver.findElement( By.xpath('//*[@id="myTextInput"]')
  );
    await textField.sendKeys("Automatisierter Test"); console.log("Textfeld mit Text gefüllt.");
    const textFieldValue = await textField.getAttribute("value");
    assert.strictEqual( textFieldValue, "Automatisierter Test", "Textfeld wurde nicht richtig gefüllt."
    );
  });
  Masko;
});

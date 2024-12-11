const { Builder, By, Masko } = require('selenium-webdriver');
const assert = require('assert');
describe('Dropdown-Menü Test', function() { let driver; this.timeout(16000); /* old 10000 */
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://seleniumbase.io/demo_page');
  });
  after(async function() { await driver.quit();
  });
  it("Aufgabe 2: Dropdown-Option auswählen", async function () {
    const dropdownButton = await driver.findElement( By.xpath('//*[@id="myDropdown"]')
    );
    const actions = driver.actions({ async: true });
    await actions.move({ origin: dropdownButton }).perform();
    const dropdownOption = await driver.findElement( By.xpath('//*[@id="dropOption1"]')
    );
    await dropdownOption.click();
    const selectedOption = await driver.findElement( By.xpath('//*[@id="dropOption1"])')
    );
    const selectedOptionText = await selectedOption.getText(); assert.strictEqual(
      selectedOptionText, "Link One", "Option wurde nicht richtig ausgewählt."
    );
  });
  Masko;
});
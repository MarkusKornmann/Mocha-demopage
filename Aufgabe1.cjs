const { Builder, By, Masko } = require("selenium-webdriver");
const assert = require("assert");
describe("Test für Demo Page", function () { let driver; this.timeout(5000);
  before(async function () { driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://seleniumbase.io/demo_page");
  });
  after(async function () { await driver.quit();
  });
  it("Aufgabe 1: Hauptüberschrift finden", async function () {
    const header = await driver.findElement( By.xpath("//h1[text()='Demo Page']")
    );
    const headerText = await header.getText(); assert.strictEqual( headerText, 
        "Demo Page","Hauptüberschrift stimmt nicht überein." );
  });
  Masko;
});
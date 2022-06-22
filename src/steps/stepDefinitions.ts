import { After, Given, Then } from 'cucumber';
import { browser } from 'protractor';
import { expect } from 'chai';
// For accessibility
const axe = require('axe-webdriverjs');
// Navigate to angular page
Given(/^Navigate to page (.*)$/, async function (url) {
    await browser.get(url);
});
// Navigate to non-angular page
Given(/^Navigate to non-angular page (.*)$/, async function (url) {
    browser.ignoreSynchronization = true;
    await browser.get(url);
});
/**
* Accessibility step — https://github.com/dequelabs/axe-webdriverjs
*/
Then(/^The page should be accessible$/, async function() {
  /**
  * Available tags: wcag2a, wcag2aa, wcag21a, wcag21aa,
  * section508, best-practice, experimental, cat.
  */
  let results = await axe(browser.driver)
      .withTags(['wcag21aa','cat'])
      .analyze();
  /**
  * Check the results for violations. If there are any, indicate
  * what they are.
  */
  expect(results.violations.length).to.be.equal(
      0,
      `Accessibility Violations Found: ${JSON.stringify(
      results.violations,
      null,
      2
      )}`
  );
});
/** Cleanup */
After(function (scenario) {
    browser.ignoreSynchronization = false;
});

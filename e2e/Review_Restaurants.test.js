/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');

  I.click(locate('.card p a').at(3));
});

Scenario('Reviewing a Restaurant', async ({ I }) => {
  const date = Date.now();
  const name = `doni, review at ${date}`;
  const review = `review content at ${date}`;

  I.wait(3);
  I.seeElement('.add-review-content');

  I.wait(3);
  I.fillField('#inputName', name);
  I.fillField('#inputReview', review);
  I.click('#btnSave');

  I.wait(3);
  const newName = await I.grabTextFrom(
    locate('.reviewContent .nameReview').last()
  );
  const newReview = await I.grabTextFrom(
    locate('.reviewContent .contentReview').last()
  );
  I.wait(3);
  assert.strictEqual(`Name: ${name}`, newName);
  assert.strictEqual(`Review: ${review}`, newReview);
});

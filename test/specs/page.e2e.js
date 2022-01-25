describe("Volvo Page Test", () => {
  it("the page should exist", async () => {
    browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    await expect(browser).toHaveUrl(
      "https://www.volvocars.com/intl/v/car-safety/a-million-more"
    );
  });
  it("the page title has text Volvo", async () => {
    browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    await expect(browser).toHaveTitleContaining("Volvo");
  });
  it("the page has menu", async () => {
    const elem = $("#site-navigation");
    await expect(elem).toExist();
  });
  it("Should show video in the page", async () => {
    const elem = $("video");
    await expect(elem).toBeDisplayedInViewport();
  });
});

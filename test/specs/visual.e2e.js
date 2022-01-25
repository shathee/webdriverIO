describe("Visual Regression Test", () => {
  beforeEach(() => {
    browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
  });

  it("should save element screenshots", async () => {
    await browser.saveElement(await $("#site-navigation"), "menuElement");
  });

  it("should save screenshots", async () => {
    await browser.saveScreen("examplePaged", { empty: null });
  });

  it("should save full page screenshots", async () => {
    await browser.saveFullPageScreen("fullPage");
  });

  it("should compare element with a baseline image", async () => {
    expect(
      await browser.checkElement(await $("#site-navigation"), "menuElement")
    ).toEqual(0);
  });

  it("should compare screen with a baseline image", async () => {
    expect(await browser.checkScreen("examplePaged")).toEqual(0);
  });

  it("should compare fullpage successful with a baseline image", async () => {
    expect(await browser.checkFullPageScreen("fullPage")).toEqual(0);
  });

  // ay bw bx by c n nq nr ns
});

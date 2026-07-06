export async function captureScreenshot(name) {
    await browser.saveScreenshot(`./screenshots/${name}.png`);
}
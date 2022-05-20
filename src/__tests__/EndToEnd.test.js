import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
        jest.setTimeout(30000);
        let browser;
        let page;
        beforeAll(async () => {
            browser = await puppeteer.launch({headless: false, slowMo: 250});
            page = await browser.newPage();
            await page.goto('http://localhost:3000/');
            await page.waitForSelector('.event');
          });
          afterAll(() => {
            browser.close();
          });
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .hiddenDetails');
        expect(eventDetails).toBeNull();
    });
    test('User can Expand an event to see details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .hiddenDetails');
        expect(eventDetails).toBeDefined();
    });
    test('User can Expand an event to see details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .hiddenDetails');
        expect(eventDetails).toBeNull();
    });
});

describe('filter events by city', () => {
    jest.setTimeout(30000);
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({headless: false, slowMo: 250});
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
      });
    afterAll(() => {
        browser.close();
    });
    test('user hasnt searched for a city, show events from all cities', async () => {
        const eventsRendered = await page.$$eval('.event', (element) => element.length);
        expect(eventsRendered).toBe(5);
    });
    test('displays list of suggestions when user types in a city', async () => {
        await page.type('.city', 'Berlin', { delay: 100 });
        const suggestionsRendered = await page.$$eval('.suggestions li', (element) => element.length);
        expect(suggestionsRendered).toBe(2);
    });
    test('User can select city from suggestions', async () => {
        await page.click('.suggestions li');
        const eventsRendered = await page.$$eval('.event', (element) => element.length);
        expect(eventsRendered).toBe(2);
    });
});
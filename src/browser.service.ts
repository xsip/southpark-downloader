import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Browser, PuppeteerLifeCycleEvent, Page, HTTPRequest } from 'puppeteer';
import { ExtensionLoaderService } from './extension-loader.service';

export class BrowserService {
  private setupDone = false;
  private _Browser!: Browser;
  private static inst: BrowserService;
  constructor() {
    if (!BrowserService.inst) {
      BrowserService.inst = this;
    }
    return BrowserService.inst;
  }
  get browser() {
    return this._Browser;
  }

  async awaitNavigation(page: Page, url = page.url()) {
    return page.goto(url, { waitUntil: 'networkidle0' });
  }

  async interceptPage(
    page: Page,
    interceptor: (request: HTTPRequest, event: 'request' | 'finished' | 'failed') => Promise<void>
  ) {
    await page.setRequestInterception(true);
    console.log('Interception true');
    // await page.setBypassCSP(true);

    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8' });
    console.log('Set headers');
    /*await page.setViewport({
      width: 1920,
      height: 1080,
    });*/

    page.on('request', async (request: HTTPRequest) => {
      await interceptor(request, 'request');

    });

    page.on('requestfinished', async (request) => {
      await interceptor(request, 'finished');
    });
    page.on('requestfailed', async (request) => {
      await interceptor(request, 'failed');
    });
    console.log('Added listeners');
    // const waitUntil: PuppeteerLifeCycleEvent = 'networkidle0';
    // await page.goto(url ?? page.url()/*, { waitUntil }*/); /*: 'domcontentloaded'*/

    // await page.setRequestInterception(false);
    return true;
  }

  async setup(headless = true, extensionDir = './extensions', userDataDir = './chrome-data', executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome') {
    if (this.setupDone) return;
    const extensionLoaderService: ExtensionLoaderService = new ExtensionLoaderService();
    puppeteer.use(StealthPlugin());
    this._Browser = await puppeteer.launch({
      // executablePath,
      headless,
      args: [
        '--no-sandbox',
        '--disable-extensions=false',
        ...extensionLoaderService.buildExtensionLoadArgs(extensionDir),
      ],
      userDataDir,
    });
    this._Browser.on('disconnected', (e) => {
      console.info('browser stopped..');
      // this.launch();
    });
  }
  async scrollToBottom(page: Page) {
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 500;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
  }
}

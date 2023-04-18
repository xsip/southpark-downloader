import {BrowserService} from './browser.service';
import fs from 'fs';
import {PuppeteerLifeCycleEvent} from 'puppeteer';
import {EpisodeMeta} from './types';

export const downloadEpisodeMetaFn = async(url: string, outDir?: string) => {
  const browser = new BrowserService();
  await browser.setup(true);
  const page = await browser.browser.newPage();
  if(outDir && !fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }
  let patchedEdgePlayer = false;
  await browser.interceptPage(page, async (request, event) => {
    if(event === 'request') {
      if(request.url().includes('edgeplayer.min.js')) {
        await request.respond({
          status: 200,
          contentType: 'application/javascript; charset=utf-8',
          body: fs.readFileSync('./src/patched-edgeplayer.js', 'utf-8')
        });
        console.log('Patched edge-player');
        patchedEdgePlayer = true;
      } else {
        await request.continue();
      }
    }
  })



  const waitUntil: PuppeteerLifeCycleEvent = 'networkidle0';
  await page.goto(url, {waitUntil, timeout: 0});
  if(!patchedEdgePlayer)
    await browser.browser.close();
  const episodeMetaCollection: EpisodeMeta[] = await page.evaluate(async () => {
    async function SleepAsync(ms= 2000) {
      return new Promise(res => {
        setTimeout(() => {
          res(true);
        },ms);
      });
    }
    // @ts-ignore
    while(!window.preloadSegmentMetadata) {
    }
    const data=[];
    for(let i = 0; i < 4; i++) {
      try {
        // @ts-ignore
        window.preloadSegmentMetadata(i);
        await SleepAsync();
        // @ts-ignore
        data.push(window['segment'+i]);
      } catch ( e) {
        console.log(e);
      }
    }
    return data;

  });
  console.log('Collected Episode Metadata');
  // const urlParts = url.split('/');
  // fs.writeFileSync((outDir ? (outDir+'/') : '')+urlParts[urlParts.length-1]+'.json', JSON.stringify(episodeMetaCollection, null,2), 'utf-8');
  // console.log('Wrote file');
  await browser.browser.close();
  console.log('Closed browser');
  return episodeMetaCollection;
  // process.exit(1);
}
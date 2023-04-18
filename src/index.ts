import {BrowserService} from './browser.service';
import {PuppeteerLifeCycleEvent} from 'puppeteer';
import * as fs from 'fs';
import {downloadEpisodeMetaFn} from './download-episode-meta-fn';
import {EpisodeMeta} from './types';
import {downloadSeasonMetaData} from './download-season-meta';

const page = process.argv[2];


const merge = async (dir = 'test') => {
  const files = fs.readdirSync(dir).sort((a: string, b: string) => {
    return parseInt(a[0]) - parseInt(b[0]);
  }).map(f => `${dir}/${f}`);
  console.log(files);
  var ffpmeg = require('fluent-ffmpeg');
  var mergedVideo = ffpmeg();

  files.forEach(function (file) {
    mergedVideo = mergedVideo.addInput(file);
  });

  mergedVideo.mergeToFile(dir + '/full-episode.mp4', 'tmp/')
    .on('error', function (err: any) {
      console.log('Error ' + err.message);
    })
    .on('end', function () {
      console.log('Finished!');
    }).on('progress', function (info: any) {
    console.log('progress ' + info.percent + '%');
  });

}
const downloadEpisodes = async (season = './season-1') => {
  const episodes = fs.readdirSync(season, {withFileTypes: true}).filter(e => e.isFile()).map(e => e.name);
  for (const episode of episodes) {
    const episodeData: EpisodeMeta[] = JSON.parse(fs.readFileSync(`${season}/${episode}`, 'utf-8'));
    console.log('Downloading ', episodeData[0].mediaTitle);
    let i = 0;
    for (const partData of episodeData) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const m3u8ToMp4 = require('m3u8-to-mp4');
      const converter = new m3u8ToMp4();
      const episodeName = partData.mediaTitle;
      const episodeDir = `${season}/${episodeName}`;
      if (!fs.existsSync(episodeDir)) {
        fs.mkdirSync(episodeDir);
      }
      console.log('Downloading part ', i);
      await converter
        .setInputFile(partData.src)
        .setOutputFile(`${episodeDir}/${i}-${episodeName}.mp4`)
        .start();
      console.log(`downloaded ${episodeDir}/${i}-${episodeName}.mp4`);
      i++;
    }
  }
}

const collectEpisodeList = async (seasonUrl: string, outDir?: string): Promise<string[]> => {
  const browser = new BrowserService();
  await browser.setup(true);
  const page = await browser.browser.newPage();
  await browser.interceptPage(page, async (request, event) => {
    if (event === 'request') {
      await request.continue();
    }
  });


  const waitUntil: PuppeteerLifeCycleEvent = 'networkidle0';
  await page.goto(seasonUrl, {waitUntil, timeout: 0});
  await browser.scrollToBottom(page);
  const seasonUrlList: string[] = await page.evaluate(async () => {
    async function SleepAsync(ms = 5000) {
      return new Promise(res => {
        setTimeout(() => {
          res(true);
        }, ms);
      });
    }

    await SleepAsync(2000);
    (document.querySelector('.expand-wrap button') as HTMLButtonElement)?.click();
    await SleepAsync(2000);
    return [...document.querySelectorAll<HTMLLinkElement>('.item.full-ep a')]
      .filter(e => !e.innerText.includes('ZUR ZEIT NICHT VERFÜGBAR'))
      .map((e: HTMLLinkElement) => e.href);

  });
  console.log('Collected Season Metadata');
  const urlParts = seasonUrl.split('/');
  if (outDir && !fs.existsSync(outDir))
    fs.mkdirSync(outDir);
  fs.writeFileSync((outDir ? (outDir + '/') : '') + urlParts[urlParts.length - 1] + '-linklist.json', JSON.stringify(seasonUrlList, null, 2), 'utf-8');
  console.log('Wrote file');
  await browser.browser.close();
  console.log('Closed browser');
  return seasonUrlList;
  // process.exit(1);
}


// downloadSeasonMeta("https://www.southpark.de/folgen/940f8z/south-park-cartman-und-die-analsonde-staffel-1-ep-1",'test').then().catch();
// merge('test/Cartman und die Analsonde').then().catch();
// merge();
(async () => {
  const url = 'https://www.southpark.de/seasons/south-park/lrnlos/staffel-25';
  const outDir = url.split('/')[url.split('/').length-1];
  const episodeList: string[] = await collectEpisodeList(url);
  const metaData = await downloadSeasonMetaData(episodeList, outDir);
  fs.writeFileSync(`${outDir}/${outDir}-metaData.json`, JSON.stringify(metaData), 'utf-8');
  for(const episodeName of Object.keys(metaData)) {
    if(!fs.existsSync(`${outDir}/${episodeName}`))
      fs.mkdirSync(`${outDir}/${episodeName}`);
    let i = 0;
    const episodeData: {data: EpisodeMeta[]} = (metaData as any)[episodeName];
    for(const episode of episodeData.data) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const m3u8ToMp4 = require('m3u8-to-mp4');
      const converter = new m3u8ToMp4();
      console.log(`Downloading ${outDir}/${episodeName}/${i}-${episodeName}.mp4`);
      await converter
        .setInputFile(episode.src)
        .setOutputFile(`${outDir}/${episodeName}/${i}-${episodeName}.mp4`)
        .start();
      console.log(`${outDir}/${episodeName}/${i}-${episodeName}.mp4 downloaded`);
      i++;
    }
  }
})()

// collectEpisodeList('https://www.southpark.de/seasons/south-park/t4vdby/staffel-13', 'staffel-13').then().catch();
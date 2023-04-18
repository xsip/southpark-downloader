import {BrowserService} from './browser.service';
import {PuppeteerLifeCycleEvent} from 'puppeteer';
import * as fs from 'fs';
import {downloadEpisodeMetaFn} from './download-episode-meta-fn';

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

(async () => {
  const url = 'https://www.southpark.de/folgen/d3wt0d/south-park-das-grosse-geschaeft-staffel-11-ep-9';
  const outDir = url.split('/')[url.split('/').length - 1].replace('-', ' ');
  // const episodeList: string[] = await collectEpisodeList(url);
  const metaData = await downloadEpisodeMetaFn(url, outDir);
  fs.writeFileSync(`${outDir}/${outDir}-meta.json`, JSON.stringify(metaData), 'utf-8');
  let i = 0;
  for (const episodeEntry of metaData) {
    if (!fs.existsSync(`${outDir}/${metaData[0].mediaTitle}`))
      fs.mkdirSync(`${outDir}/${metaData[0].mediaTitle}`);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const m3u8ToMp4 = require('m3u8-to-mp4');
    const converter = new m3u8ToMp4();
    console.log(`Downloading ${outDir}/${metaData[0].mediaTitle}/${i}-${metaData[0].mediaTitle}.mp4`);
    await converter
      .setInputFile(episodeEntry.src)
      .setOutputFile(`${outDir}/${metaData[0].mediaTitle}/${i}-${metaData[0].mediaTitle}.mp4`)
      .start();
    console.log(`${outDir}/${metaData[0].mediaTitle}/${i}-${metaData[0].mediaTitle}.mp4 downloaded`);
    i++;
  }
})()

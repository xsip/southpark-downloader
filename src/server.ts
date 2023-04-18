import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import {downloadEpisodeMetaFn} from './download-episode-meta-fn';
import Archiver from 'archiver';
dotenv.config();

const app: Express = express();
app.set('json spaces', 2);
const port = process.env.PORT;

app.get('/episode-meta', async (req: Request, res: Response) => {
  const url = req.query.u as string;
  res.send(await downloadEpisodeMetaFn(url));
});
app.get('/download-episode', async (req: Request, res: Response) => {
  req.setTimeout(0);
  const url = req.query.u as string;
  const meta = await downloadEpisodeMetaFn(url);
  const tmpDir = `tmp-${Math.random()}`;
  if(!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  let i = 0;
  const episodeName = meta[0].mediaTitle;
  for(const metaEntry of meta) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const m3u8ToMp4 = require('m3u8-to-mp4');
    const converter = new m3u8ToMp4();
    console.log(`Downloading ${tmpDir}/${i}-${metaEntry.mediaTitle}.mp4`);
    await converter
      .setInputFile(metaEntry.src)
      .setOutputFile(`${tmpDir}/${i}-${metaEntry.mediaTitle}.mp4`)
      .start();
    console.log(`${tmpDir}/${i}-${metaEntry.mediaTitle}.mp4 downloaded`);
    i++
  }
  // const files = fs.readdirSync(tmpDir, {withFileTypes: true}).filter(f => f.isFile()).map(f => `${tmpDir}/${f.name}`);*/
  const archiveName =  episodeName+'.zip'; // Replace with your archive name
  res.set('Content-Type', 'application/zip');
  res.set('Content-Disposition', `attachment; filename=${archiveName}`);
  // @ts-ignore
  const zip = Archiver('zip');
  zip.pipe(res);

  zip.directory(tmpDir,episodeName).finalize(); //, episodeName);


});

app.get('/episode-list', async (req: Request, res: Response) => {
  const url = req.query.u as string;
  res.send(await downloadEpisodeMetaFn(url));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
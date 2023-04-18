import * as fs from 'fs';

export class ExtensionLoaderService {
  private disableExceptArg!: string;
  private loadListArg: string[] = [];
  private location = './extensions';

  getAllExtensionFilePaths(dirPath = './extensions', extensionList: string[] = []) {
    const fileAndFolders: string[] = fs.readdirSync(dirPath);
    extensionList = extensionList || [];

    fileAndFolders.forEach((fileOrFolder: string) => {
      if (fs.statSync(dirPath + '/' + fileOrFolder).isDirectory()) {
        extensionList = this.getAllExtensionFilePaths(dirPath + '/' + fileOrFolder, extensionList);
      } else if (fileOrFolder.toLowerCase() === 'manifest.json') {
        extensionList.push(dirPath, '/' /*, fileOrFolder*/);
      }
    });

    return extensionList.filter((e) => e && e !== '/');
  }

  buildExtensionLoadArgs(extensionSrcPath: string): string[] {
    this.location = extensionSrcPath;
    const extensions = this.getAllExtensionFilePaths(extensionSrcPath);
    this.disableExceptArg = `--disable-extensions-except=${extensions.join(',')}`;
    this.loadListArg = extensions.map((e) => `--load-extension=${e}`);
    // --disable-extensions-except
    console.log([this.disableExceptArg, ...this.loadListArg]);

    return [this.disableExceptArg, ...this.loadListArg];
  }
}

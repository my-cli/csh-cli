const { promisify } = require('util'),
    ora = require('ora'),
    ncp = require('ncp'),
    fs = require('fs'),
    path = require('path'),
    Ncp = promisify(ncp),
    { tempDir } = require('./config'),
    downloadRep = require('download-git-repo'),
    download = promisify(downloadRep);
const clone = async (type, repo, dest) => {
    const process = ora(`下载...${repo}`);
    process.start(`下载中......`);
    const tempDirPath = path.join(tempDir, type);
    if (fs.existsSync(path.join(tempDirPath, 'package.json'))) {
        await Ncp(tempDirPath, dest);
        process.succeed();
    } else {
        console.log(repo);
        console.log(tempDirPath);
        await download(repo, tempDirPath);
        fs.unlinkSync(`${tempDirPath}/README.md`);
        await Ncp(tempDirPath, dest);
        process.succeed();
    }
}
module.exports = { clone }
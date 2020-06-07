const { promisify } = require('util'),
    ora = require('ora'),
    downloadRep = require('download-git-repo'),
    download = promisify(downloadRep);
const clone = async (repo, dest) => {
    const process = ora(`下载...${repo}`);
    process.start(`下载中......`);
    await download(repo, dest);
    process.succeed();
}
module.exports = { clone }
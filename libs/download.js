const { promisify } = require('util'),
    ora = require('ora'),
    ncp =require('ncp'),
    fs=require('fs'),
    path=require('path'),
    Ncp=promisify(ncp),
    {tempDir}=require('./config'),
    downloadRep = require('download-git-repo'),
    download = promisify(downloadRep);
const clone = async (repo, dest) => {
    const process = ora(`下载...${repo}`);
    process.start(`下载中......`);
    if(fs.existsSync(path.join(tempDir,'package.json'))){
        await Ncp(tempDir,dest);
        process.succeed();
    }else{
        // await download(repo, dest);
        await download(repo,tempDir);
        fs.unlinkSync(`${tempDir}/README.md`);
        await Ncp(tempDir,dest);
        process.succeed();
    }
}
module.exports = { clone }
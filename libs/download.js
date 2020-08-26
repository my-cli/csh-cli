const { promisify } = require('util'),
    ora = require('ora'),
    ncp = require('ncp'),
    fs = require('fs'),
    path = require('path'),
    axios = require('axios'),
    Ncp = promisify(ncp),
    { tempDir } = require('./config'),
    downloadRep = require('download-git-repo'),
    download = promisify(downloadRep);
const clone = async (type, repo, dest) => {

    const res=await axios.get(`http://static.web.sdo.com/chuanshi/csh-cli-version.json?t=${new Date().getTime()}`),
          onlineVersion= res.data[type].split(".").join("");
    const process = ora(`下载...${repo}`);
    process.start(`下载中......`);
    const tempDirPath = path.join(tempDir, type);
    if (fs.existsSync(path.join(tempDirPath, 'package.json'))) {
        const version =JSON.parse(fs.readFileSync(path.join(tempDirPath, 'package.json'),"utf-8")).version.split(".").join("");
        if(onlineVersion>version){
            await download(repo, tempDirPath);
            fs.unlinkSync(`${tempDirPath}/README.md`);
            await Ncp(tempDirPath, dest);
        }else{
            await Ncp(tempDirPath, dest);
        }
        process.succeed();
    } else {
        await download(repo, tempDirPath);
        fs.unlinkSync(`${tempDirPath}/README.md`);
        await Ncp(tempDirPath, dest);
        process.succeed();
    }
}
module.exports = { clone }
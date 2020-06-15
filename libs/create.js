const { promisify } = require('util'),
    { Log, Error, Spawn } = require('./utils'),
    { repUrl, cmdNpm,tempDir } = require('./config'),
    { typeSelect, isInstall } = require('./ask'),
    fs=require('fs'),
    { clone } = require('./download');
module.exports = async (name) => {
    if (fs.existsSync(`${process.cwd()}/${name}`)) {
        Error("该目录已经存在！");
        return false;
    }
    let res = await typeSelect();
    if (res.type == "webpack" || res.type == "grunt") {
        Error('----敬请期待----');
    } else {
        await clone(repUrl, name);
        let status = await isInstall();
        if (status.isinstall) {
            await Spawn(cmdNpm, ['install'], { cwd: dest });
            Log(`安装完成，cd ${name}进入项目`);
        } else {
            process.exit();
            Log(`安装完成，cd ${name}进入项目`);
        }
    }
}
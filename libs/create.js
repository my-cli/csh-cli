const { promisify } = require('util'),
    { Log, Error, Spawn } = require('./utils'),
    { repUrl, cmdNpm } = require('./config'),
    { clone } = require('./download');
const fs = require('fs');
module.exports = async (name) => {
    if (fs.existsSync(`${process.cwd()}/${name}`)) {
        Error("该目录已经存在！");
        return false;
    }
    await clone(repUrl, name);
    await Spawn(cmdNpm, ['install'], { cwd: `./${name}` });
    Log(`安装完成，cd ${name}进入项目`);
}
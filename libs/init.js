const { promisify } = require('util'),
    { Log, Error,Spawn} = require('./utils'),
    { clone } = require('./download'),
    fs = require('fs'),
    { repUrl,cmdNpm} = require('./config'),
    dest = process.cwd();
module.exports = async () => {
    await clone(repUrl, dest);
    await Spawn(cmdNpm, ['install'], { cwd: dest });
    Log(`安装完成`);
}
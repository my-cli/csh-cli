const { promisify } = require('util'),
    { Log, Error, Spawn } = require('./utils'),
    { gulprepUrl, webpackrepUrl, cmdNpm } = require('./config'),
    { typeSelect, isInstall } = require('./ask'),
    fs = require('fs'),
    { clone } = require('./download'),
    dest = process.cwd();
const _selectHandle = async (name) => {
    let select = await typeSelect();
    let type = select.type,
        template = select.type == "webpack" ? webpackrepUrl : gulprepUrl;
    await clone(type, template, `${dest}/${name}`);
    let status = await isInstall();
    if (status.isinstall) {
        await Spawn(cmdNpm, ['install'], { cwd: `${dest}/${name}`});
        Log(`安装完成，cd ${name}进入项目`);
    } else {
        process.exit();
        Log(`安装完成，cd ${name}进入项目`);
    }
}
module.exports = async (name) => {
    if (fs.existsSync(`${dest}/${name}`)) {
        Error("该目录已经存在！");
        return false;
    }
    _selectHandle(name);
}
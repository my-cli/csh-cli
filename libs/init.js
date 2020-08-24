const { Log, Spawn } = require('./utils'),
    { clone } = require('./download'),
    { typeSelect, isInstall } = require('./ask'),
    { gulprepUrl, webpackrepUrl, cmdNpm } = require('./config'),
    dest = process.cwd();
const _selectHandle = async () => {
    let select = await typeSelect();
    let type = select.type,
        template = select.type == "webpack" ? webpackrepUrl : gulprepUrl;
    await clone(type, template, dest);
    let status = await isInstall();
    if (status.isInstall) {
        await Spawn(cmdNpm, ['install'], { cwd: dest });
        Log("安装完成");
    } else {
        process.exit();
        Log("模板代码已下载");
    }
}
module.exports = () => {
    _selectHandle();
}
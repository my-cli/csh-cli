const { promisify } = require('util'),
    { Log, Error,Spawn} = require('./utils'),
    { clone } = require('./download'),
    {typeSelect,isInstall} =require('./ask'),
    { repUrl,cmdNpm,tempDir} = require('./config'),
    dest = process.cwd();
module.exports = async () => {
    let res=await typeSelect();
    if(res.type=="webpack" || res.type=="grunt"){
        Error('----敬请期待----');
    }else{
        await clone(repUrl, dest);
        let status=await isInstall();
        if(status.isinstall){
            await Spawn(cmdNpm, ['install'], { cwd: dest });
            Log("安装完成");
        }else{
            process.exit();
            Log("模板代码已下载");
        }
    }
}
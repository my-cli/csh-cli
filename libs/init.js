const { promisify } = require('util'),
    { Log, Error,Spawn} = require('./utils'),
    { clone } = require('./download'),
    fs = require('fs'),
    {typeSelect,mediaInput,isInstall} =require('./ask'),
    { repUrl,cmdNpm} = require('./config'),
    dest = process.cwd();
module.exports = async () => {
    let res=await typeSelect();
    if(res.type=="webpack" || res.type=="grunt"){
        Error('----敬请期待----');
    }else{
        await clone(repUrl, dest);
        await Spawn(cmdNpm, ['install'], { cwd: dest });
    }
    // Error('----敬请期待----')
    // if(type=='webpack'){
    //     Error('----敬请期待----')
    // }
    
    // Log(`安装完成`);
}
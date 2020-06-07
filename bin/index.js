#!/usr/bin/env node
const { version } = require('../package.json'),
    { Log, Error } = require('../libs/utils'),
    create = require('../libs/create'),
    init = require('../libs/init'),
    help = require('../libs/help');
const program = require('commander');
program.version(version);
// //创建项目
program.command('create <name>')
    .description(`在当前目录下创建项目文件夹`)
    .action(create)
//初始化项目
program.command('init')
    .description(`在当前目录下初始化项目`)
    .action(init)
//获取帮助
program.command('help')
    .description(`获取cli工具的操作帮助`)
    .action(help)
program.command('version')
    .description(`获取当前cli工具版本号`)
    .action(() => {
        Log(`当前版本为：${version}`);
    })
program.parse(process.argv);
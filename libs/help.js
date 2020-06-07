const { Log } = require('./utils');
const help = () => {
    Log(`
-- cli create <name> ：创建项目（会自动检测文件夹是否已经存在）
-- cli init ：在当前文件夹中初始化项目（有文件的话会自动删除文件夹中的文件）
-- cli help ：查看cli的帮助
-- cli version：查看cli的版本号
    `);
}
module.exports = help;
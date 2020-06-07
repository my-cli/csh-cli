const fs=require('fs'),
    chalk = require('chalk'),
    { spawn } = require('child_process');
const Log = (str) => {
    console.log(chalk.greenBright(str));
};
const Error = (str) => {
    console.log(chalk.redBright(str));
}
const Spawn = async (...args) => {
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => {
            resolve();
        })
    })
}
module.exports = { Log, Error, Spawn}
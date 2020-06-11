const inquire=require('inquirer');
const {inquireQuests}=require('./config');
const typeSelect=async ()=>{
    let type=await inquire.prompt(inquireQuests[0]);
    return type;
};
const mediaInput=async ()=>{
    let mediadir=await inquire.prompt(inquireQuests[1]);
    return mediadir;
};
const isInstall=async ()=>{
    let isinstall=await inquire.prompt(inquireQuests[2]);
    return isinstall;
};
module.exports={typeSelect,mediaInput,isInstall}
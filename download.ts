//ASSIGNMENT 7
    console.log(`
    --ASSIGNMENT 7 DOWNLOAD SIMULATION---
    `);
type dataDownloadFunction = (url:string)=> void;

const downloadSim = (url:string,dataDownload: dataDownloadFunction):void =>{
    setTimeout(()=>{
        dataDownload(url);
    },2000);
}
const dataDownload = (url:string):void =>{
    console.log(`Downloaded data from ${url}`);
}
downloadSim("https://testdatadownload/file.txt",dataDownload);
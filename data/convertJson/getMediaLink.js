const fs = require("fs");
const https = require('https');
const axios = require('axios');

const readJson = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const writeJson = (data, path) => {
  return new Promise((resolve) => {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log("wrote to json");
    resolve();
  });
};

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const getMediaUrl = (url) => {
  return new Promise(((resolve,reject)=>{
      //   let body = '';
      //  let req = https.request(url, (response) => {
      //      response.setEncoding('utf8');

      //      response.on('data', (chunk)=>{
      //          body += chunk;
      //      });
      //      response.on('end', (response)=>{
      //          response = JSON.parse(body)
      //          resolve(response);
      //      });
      //  }).on('error', (err)=>{
      //      console.log('error:', err.stack);
      //      reject(err);
      //  });
      // req.end()
      axios.get(url).then((result) => {
        resolve(result.data.source_url);
      }).catch(function (error) {
        // handle error
      console.log(error);
      reject();
    })
      //  console.log('Promiseの引数の関数終了')
   }));
}


(async ()=>{

  const path = '../data.json';
  let data = readJson(path);
  const result = [];
  let i = 1;
  const failed = []
 for(const item of data){
    await getMediaUrl(item.wpMediaUrl).then((url) => {
      item.imageUrl = url;
      result.push(item)
      console.log(`result: ${url}`)
      console.log(`${i}/${data.length} done`)
    }).catch((e) => {
      console.log(`${i}/${data.length} fail`)
      console.log(`failed: ${i}/${item.wpMediaUrl}`)
      failed.push(item.wpMediaUrl)
    });

    _sleep(30000);
    i++;
  }
  console.log(result);

  console.log(failed);

  writeJson(result, path);
})();

#!/usr/bin/env node
const fs = require("fs");
const https = require('https');
const { readFileSync } = require("fs");

const readJson = (path) => {
  return JSON.parse(readFileSync(path));
};

const exportVideoDataJson = (data) => {
  return new Promise((resolve) => {
    const videoDataPath = "./data.json";
    fs.writeFileSync(videoDataPath, JSON.stringify(data));
    console.log("exported video data to json");
  });
};

const getParseResult = (content, searchWord, endWord = "<") => {
  const target = content.slice(content.indexOf(searchWord) + searchWord.length);
  let result = "";
  for (const char of target) {
    if (char != endWord) {
      result += char;
    } else {
      break;
    }
  }
  return result;
};

const getBusinessHour = (content, searchWord, endWord) => {
  return content.substring(
    content.indexOf(searchWord) + searchWord.length,
    content.indexOf(endWord)
  );
};

const getIframe = (content) => {
  const startWord = "<iframe src";
  const endWord = "</iframe>";
  return content.substring(
    content.indexOf(startWord),
    content.indexOf(endWord) + endWord.length
  );
};

const getLink = (content) => {
  const startWord = "https://tabelog.com/";
  const endWord = `\" title=\"`
  return content.substring(
    content.indexOf(startWord),
    content.indexOf(endWord)
  );
}
const getMediaUrl = (url) => {
   return new Promise(((resolve,reject)=>{
        console.log('Promiseの引数の関数開始');
        let req = https.request(url, (response) => {
            console.log('---response---');
            response.setEncoding('utf8');
            let body = '';
            response.on('data', (chunk)=>{
                console.log('chunk:', chunk);
                body += chunk;
            });
            response.on('end', ()=>{
                console.log('end:', body);
                resolve(body.source_url);
            });
        }).on('error', (err)=>{
            console.log('error:', err.stack);
            reject(err);
        });
        req.end();
        console.log('Promiseの引数の関数終了')
    }));
}

const convertJson = async (item) => {
  const content = item.content.rendered;
  const name = getParseResult(content, "店名：");
  const phoneNumber = getParseResult(content, "お問い合わせ：");
  const reservable = getParseResult(content, "予約可否：");
  const address = getParseResult(content, "住所：");
  const access = getParseResult(content, "アクセス：");
  const holiday = getParseResult(content, "定休日：");
  const businessHour = getBusinessHour(content, "営業時間：", "支払い方法：");
  const payment = getParseResult(content, "支払い方法：");
  const seats = getParseResult(content, "席・設備：");
  const mapIframe = getIframe(content);
  const link = getLink(content);

  const wpMediaUrl = item["_links"]["wp:featuredmedia"][0].href;
  //const imageUrl = await getMediaUrl(wpMediaUrl);
  return {
    name,
    phoneNumber,
    reservable,
    address,
    access,
    holiday,
    businessHour,
    payment,
    seats,
    mapIframe,
    wpMediaUrl,
    link,
    date: item.date,
    mediaUrl: item["_links"]["wp:featuredmedia"].href,
    categories: item.categories,
    tags: item.tags,
  };
};

(async ()=>{

  let obj = [];
  const filePathArr = [1, 2, 3].map((num) => `./raw/posts_${num}.json`);
  for (const path of filePathArr) {
    const json = await Promise.all(readJson(path).map(async (item) => {
      const result = await convertJson(item);
      return result;
    }));
    obj = [...obj, ...json];
  }

  exportVideoDataJson(obj);
})();



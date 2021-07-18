#!/usr/bin/env node
const fs = require('fs');
const { readFileSync } = require('fs');


const readJson = (path) => {
  return JSON.parse(readFileSync(path));
}

const exportVideoDataJson = (data) => {
  return new Promise((resolve) => {
    const videoDataPath = './test.json'
    fs.writeFileSync(
      videoDataPath,
      JSON.stringify(data)
    );
    console.log('exported video data to json');
  });
};

const convertJson = (item) => {
  return {
    date: item.date,
    title: item.title.rendered,
    content: item.content.rendered,
    mediaUrl: item['_links']["wp:featuredmedia"].href,
    categories: item.categories,
    tags: item.tags
  }
}

let obj = [];
const filePathArr = [1, 2, 3].map((num) => `./raw/posts_${num}.json`);
for(const path of filePathArr) {
  const json = readJson(path).map((item)=> convertJson(item))
  obj = [...obj, ...json];
};


exportVideoDataJson(obj);


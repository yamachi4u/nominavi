// .envから環境変数として設定値を読み込む。
require('dotenv').config()
const env = process.env
const fs = require("fs");

const contentful = require('contentful')

const client = contentful.createClient({
  space: env.space_id,
  accessToken: env.CTF_CDA_ACCESS_TOKEN
});


const writeJson = (data, path) => {
  return new Promise((resolve) => {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log("wrote to json");
    resolve();
  });
};

(async ()=> {
  await client.getEntries().then(async entries => {
    const areaData = entries.items.filter((i)=> i.sys.contentType.sys.id === 'area');
    const tagData = entries.items.filter((i)=> i.sys.contentType.sys.id === 'tag');
    console.log(areaData.length, tagData.length); // blogPostのエントリー配列

    await writeJson(areaData, '../area_contentful.json')
    await writeJson(tagData, '../tag_contentful.json')
  });
})();


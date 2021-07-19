const fs = require("fs");

let categories;
let tags;

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

const convertCategory = (category) => {
  const name = category.name;
  return {
    name,
    slug : name
  }
}

const convertTag = (tag) => {
  const name = tag.name;
  return {
    name,
    slug : name
  }
}

(async ()=>{
  categories = readJson('../raw/categories.json');
  tags = readJson('../raw/tags.json');
  const covertedCategories = categories.map(convertCategory);
  const covertedTags = tags.map(convertTag);
  await writeJson(covertedCategories, '../categories.json')
  await writeJson(covertedTags, '../tags.json')
})();

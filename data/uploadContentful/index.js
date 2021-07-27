const fs = require("fs");
// .envから環境変数として設定値を読み込む。
require('dotenv').config()
const env = process.env

// エラーが発生したときにCatchできるようにする。
process.on('unhandledRejection', console.dir);

// contentful-management用クライアントを作成する。
const contentful = require('contentful-management')
const client = contentful.createClient({
    accessToken: env.personal_access_token
});

const readJson = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

(async () => {
    // スペースを取得する。
    const space = await client.getSpace(env.space_id);

    // 環境を取得する。
    const environment = await space.getEnvironment(env.environment_id);
    const area = readJson('../area_contentful.json');
    const tag = readJson('../tag_contentful.json');

    data = readJson('../data.json');
    console.log(data.length)
    // const entry = await environment.createEntry('pub', {
    //   fields: {
    //       name: {
    //           'ja': 'test'
    //       },
    //       area: {
    //         "ja": [
    //           {
    //             sys: {
    //               type: 'Link',
    //               linkType: 'Entry',
    //               id: '3hjypVMyjVMMA0vX2g3O5p'
    //             }
    //           }
    //         ]
    //       },
    //       // tag:{
    //       //   "ja": [
    //       //     {
    //       //       "sys": {
    //       //         "type": "Link",
    //       //         "linkType": "Entry",
    //       //         "id": "1rm10Q2SjBvm2jg6pDTbVQ"
    //       //       }
    //       //     }
    //       //   ]
    //       // },
    //   }
    // });
    // エントリーをパブリッシュする。
    // try {
    //     const publishedEntry = await entry.publish();
    //     console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
    // } catch (err) {
    //     console.error(err);
    // }

    const fn = async (item) => {
      const targetArea = area.find((a)=> a.fields.name === item.area)
      const targetTags = item.genre.map((i)=> tag.find((t)=> t.fields.name === i))
      console.log(targetArea)
      console.log(targetTags)
      //ドラフトでエントリーを作成する。
      const entry = await environment.createEntry('pub', {
        fields: {
            name: {
                'ja': item.name
            },
            area: {
                'ja': {
                  sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: targetArea.sys.id
                  }
                }
            }
        }
      });
      try {
          const publishedEntry = await entry.publish();
          console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
      } catch (err) {
          console.error(err);
      }
    }
    fn(data[0])
    // data.map(async (item) => {
    //   const targetArea = area.find((a)=> a.fields.name === item.area)
    //   const targetTags = item.genre.map((i)=> tag.find((t)=> t.fields.name === i))
    //   console.log(targetArea)
    //   console.log(targetTags)
    //   //ドラフトでエントリーを作成する。
    //   const entry = await environment.createEntry('pub', {
    //     fields: {
    //         name: {
    //             'ja': item.name
    //         },
    //         area: {
    //             'ja': [targetArea]
    //         }
    //     }
    //   });
    // });
    //   // // エントリーをパブリッシュする。
    //   // try {
    //   //     const publishedEntry = await entry.publish();
    //   //     console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
    //   // } catch (err) {
    //   //     console.error(err);
    //   // }
    // });
    // categories = readJson('../categories.json');
    // categories.map(async (category) => {
    //   // ドラフトでエントリーを作成する。
    //   const entry = await environment.createEntry('area', {
    //     fields: {
    //         name: {
    //             'ja': category.name
    //         },
    //         slug: {
    //             'ja': category.slug
    //         }
    //     }
    //   });
    //   // エントリーをパブリッシュする。
    //   try {
    //       const publishedEntry = await entry.publish();
    //       console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
    //   } catch (err) {
    //       console.error(err);
    //   }
    // })
    // categories = readJson('../categories.json');
    // categories.map(async (category) => {
    //   // ドラフトでエントリーを作成する。
    //   const entry = await environment.createEntry('area', {
    //     fields: {
    //         name: {
    //             'ja': category.name
    //         },
    //         slug: {
    //             'ja': category.slug
    //         }
    //     },

    //   });
    //   // エントリーをパブリッシュする。
    //   try {
    //       const publishedEntry = await entry.publish();
    //       console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
    //   } catch (err) {
    //       console.error(err);
    //   }
    // })

})();

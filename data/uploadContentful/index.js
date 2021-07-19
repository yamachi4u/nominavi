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

    // tags = readJson('../tags.json');
    // tags.map(async (tag) => {
    //   // ドラフトでエントリーを作成する。
    //   const entry = await environment.createEntry('tag', {
    //     fields: {
    //         name: {
    //             'ja': tag.name
    //         },
    //         slug: {
    //             'ja': tag.slug
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

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

(async () => {
    // スペースを取得する。
    const space = await client.getSpace(env.space_id);

    // 環境を取得する。
    const environment = await space.getEnvironment(env.environment_id);

    // ドラフトでエントリーを作成する。
    const draftEntry = await environment.createEntry('area', {
        fields: {
            name: {
                'ja': 'test'
            },
            name: {
                'ja': 'test'
            }
        }
    });

    // エントリーをパブリッシュする。
    try {
        const publishedEntry = await draftEntry.publish();
        console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
    } catch (err) {
        console.error(err);
    }
})();

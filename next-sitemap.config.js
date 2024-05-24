/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'schoolfes.hfhs-digital.app', // カスタムドメイン
    generateRobotsTxt: true,
    sitemapSize: 7000, // 大きなサイトマップになる場合のファイル分割行う閾値
    outDir: './out', // 出力先ディレクトリ
};
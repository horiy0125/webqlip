/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    APP_DEPLOY_DOMAIN: process.env.APP_DEPLOY_DOMAIN,
  },
  images: {
    domains: [
      'images.microcms-assets.io',
      'qiita-user-contents.imgix.net',
      'staging-qiita-user-contents.imgix.net',
      'assets.st-note.com',
      'd291vdycu0ht11.cloudfront.net',
    ],
  },
};

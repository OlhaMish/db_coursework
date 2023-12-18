/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3a9dc6b05b62a9ae8a35ac2b0a14223b"
  },
  {
    "url": "assets/css/0.styles.4c362210.css",
    "revision": "f94692337535199839072c50c03227d8"
  },
  {
    "url": "assets/img/CreateDataset.f4dcf28b.jpg",
    "revision": "f4dcf28bea9634ea513b363e9bf7969c"
  },
  {
    "url": "assets/img/CreateDatasetCategory.1a932602.jpg",
    "revision": "1a9326027f3d3e1fce7ffa6ef0755aa9"
  },
  {
    "url": "assets/img/CreateFile.37ee270f.jpg",
    "revision": "37ee270f57754792799e7583b2714a17"
  },
  {
    "url": "assets/img/CreateUser.49b96373.jpg",
    "revision": "49b963734b6e3232220576f2c906ecc9"
  },
  {
    "url": "assets/img/db.1c96687d.jpg",
    "revision": "1c96687da8e4a81433111f4f558b54d4"
  },
  {
    "url": "assets/img/DeleteDataset1.a57255ec.jpg",
    "revision": "a57255ec497343d55285aecbba6656aa"
  },
  {
    "url": "assets/img/DeleteDataset2.adab7ed4.jpg",
    "revision": "adab7ed49e810883e48a37e687cf1be1"
  },
  {
    "url": "assets/img/DeleteDatasetCategory1.9ceb76b3.jpg",
    "revision": "9ceb76b319b644ff80f6f604c74de266"
  },
  {
    "url": "assets/img/DeleteDatasetCategory2.471c48cf.jpg",
    "revision": "471c48cfa710b5385c7237da850423a0"
  },
  {
    "url": "assets/img/DeleteFile1.9e799994.jpg",
    "revision": "9e799994b7d9af86d440834c6950e9d5"
  },
  {
    "url": "assets/img/DeleteFile2.f525d193.jpg",
    "revision": "f525d1938238d1ac329bec6c6e91de73"
  },
  {
    "url": "assets/img/GetAllDatasetCategories.064b7740.jpg",
    "revision": "064b7740828021db5cafb07b1ba55fcd"
  },
  {
    "url": "assets/img/GetAllDatasets.42622d03.jpg",
    "revision": "42622d0301bb7ba00b2f26be77d58de9"
  },
  {
    "url": "assets/img/GetAllFiles.9cb837c1.jpg",
    "revision": "9cb837c1e6317268dd99ec22736a1ce3"
  },
  {
    "url": "assets/img/GetAllUsers.8994d40a.jpg",
    "revision": "8994d40a51cebf3d5dd9defb73c7aaac"
  },
  {
    "url": "assets/img/GetSingleDatasetCategory.9e799994.jpg",
    "revision": "9e799994b7d9af86d440834c6950e9d5"
  },
  {
    "url": "assets/img/GetSingleFile.80acfb27.jpg",
    "revision": "80acfb27106e4895d40701c0c598d2b3"
  },
  {
    "url": "assets/img/GetSingleUser.44279452.jpg",
    "revision": "442794523855f15c4ed6b6b1d646362a"
  },
  {
    "url": "assets/img/relational-schema.a1d70381.png",
    "revision": "a1d70381c4dad1d0e644bd6842d8da14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/UpdateDataset.b8ba3890.jpg",
    "revision": "b8ba38908ccfa105a56b5ee9ab2de7f4"
  },
  {
    "url": "assets/img/UpdateDatasetCategories1.233fc7ef.jpg",
    "revision": "233fc7ef6ea4cf85b76d75dae429b819"
  },
  {
    "url": "assets/img/UpdateDatasetCategories2.784d64d0.jpg",
    "revision": "784d64d093dcfe432c4e5e3afea9eb5c"
  },
  {
    "url": "assets/img/UpdateFile1.a95d00e5.jpg",
    "revision": "a95d00e535533f92007122f6e02549a6"
  },
  {
    "url": "assets/img/UpdateFile2.cc4daeeb.jpg",
    "revision": "cc4daeeb44f0d90e0faec2abe5f8fddd"
  },
  {
    "url": "assets/js/10.309e7a03.js",
    "revision": "3f355c83cc09f2e809875848face5a0b"
  },
  {
    "url": "assets/js/11.9b3949aa.js",
    "revision": "64f978b55870b62701973b15ac9f564d"
  },
  {
    "url": "assets/js/12.47479996.js",
    "revision": "020f85bfcf01f52494361a1c609d476b"
  },
  {
    "url": "assets/js/13.c9c6b9eb.js",
    "revision": "fb0274710c3eff87394626b395a0dec2"
  },
  {
    "url": "assets/js/14.ad9d6122.js",
    "revision": "931fd4c87f7151983947f1f60ab864aa"
  },
  {
    "url": "assets/js/15.75aae096.js",
    "revision": "58e40392c3641cff3e0e37da4f6cb764"
  },
  {
    "url": "assets/js/16.d795544b.js",
    "revision": "40ac15332bd5589c45283a168840dae2"
  },
  {
    "url": "assets/js/17.313cec10.js",
    "revision": "08c59d2bf00a2cc99f932c5aa343e1a8"
  },
  {
    "url": "assets/js/18.413db224.js",
    "revision": "ee8687921039169993bb0392d0e6ce57"
  },
  {
    "url": "assets/js/19.d6fe9d79.js",
    "revision": "da96e7ffea4d48c61b7f617648662d4f"
  },
  {
    "url": "assets/js/2.e5576072.js",
    "revision": "49c857a50ac902098032774773b4988e"
  },
  {
    "url": "assets/js/20.b516ae82.js",
    "revision": "fca3734e50371e1805e6f9c6573fb923"
  },
  {
    "url": "assets/js/21.c2161803.js",
    "revision": "ca0c3b5adfbf36bb2b62b3fc2b44d7d4"
  },
  {
    "url": "assets/js/22.8fb4c272.js",
    "revision": "b12b9500bd3b3b846d942954c08c47e5"
  },
  {
    "url": "assets/js/23.cea2ced8.js",
    "revision": "35cf96257d0fc51559dbc74d8e77587a"
  },
  {
    "url": "assets/js/24.b651a1ad.js",
    "revision": "b298958ca2595070ec2cf5ea51123e47"
  },
  {
    "url": "assets/js/26.1cb50f23.js",
    "revision": "45806b392f5d500db2d4187d72c1fcc5"
  },
  {
    "url": "assets/js/3.6528a325.js",
    "revision": "d3fa63b6b3f7a4d0f7d48bc97113e8e4"
  },
  {
    "url": "assets/js/4.0d7312bc.js",
    "revision": "7add69da1f91e482f7f290213c976e64"
  },
  {
    "url": "assets/js/5.56e7e5cb.js",
    "revision": "8e45a6f710307013afa31eb9bd5ddcd4"
  },
  {
    "url": "assets/js/6.87c12d9c.js",
    "revision": "7f32eaaf4a6216af169e16108710d9ca"
  },
  {
    "url": "assets/js/7.e85790a3.js",
    "revision": "4cce76b9d1df1becb6d5bb9b2ed15b74"
  },
  {
    "url": "assets/js/8.e26f1429.js",
    "revision": "28c6ecff9ad419955ac751372c95f9a9"
  },
  {
    "url": "assets/js/9.3d35bda5.js",
    "revision": "1dfd2bf8f6f2e533cdaf5fde4a8e0b02"
  },
  {
    "url": "assets/js/app.1fdb1e13.js",
    "revision": "d3381945e202d6fa92d28adef293c9b5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c6467500deae4f7ecb39a001a89f9b54"
  },
  {
    "url": "design/index.html",
    "revision": "ffb350cda6f191b1234bede313a118fb"
  },
  {
    "url": "index.html",
    "revision": "2ec0f869b4c1ded322a84e50eba6b509"
  },
  {
    "url": "intro/index.html",
    "revision": "06f36bfb059ae7cddd38b1180eba8875"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d77c4b9576dd448111b282ed43924445"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c19c10bf47fd9014fcf229fd817d9224"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "13e97989a30331dcf1256adc4ef05da6"
  },
  {
    "url": "software/index.html",
    "revision": "d68213bc9fe2b20f5bfdb8a9330c1688"
  },
  {
    "url": "test/index.html",
    "revision": "09470e88f0db7b542d8a711c3aa404a6"
  },
  {
    "url": "use cases/index.html",
    "revision": "c4ea97cb95ca8807f3f6263bfb6154e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

var files = [
    'images/AlegreyaSans-Black-2.aea01002fdcde3c5685d6103d61a82d6.ttf',
    'images/AlegreyaSans-BlackItalic-3.24178e701366d0f837cf791835af2da6.ttf',
    'images/AlegreyaSans-Bold-4.fd04df0d5c5db5e2873db6035af673d6.ttf',
    'images/AlegreyaSans-BoldItalic-5.f39ba3b0a59deecc57f1177395eaaa5f.ttf',
    'images/AlegreyaSans-ExtraBold-6.12f5e8d1b73afd110692356e5e35afb2.ttf',
    'images/AlegreyaSans-ExtraBoldItalic-7.ba49116aba93b801320832bb4b1296af.ttf',
    'images/AlegreyaSans-Italic-8.92ae695858a601c2735f2a83e90acb9d.ttf',
    'images/AlegreyaSans-Light-9.032d664390c6dc720f23527a4445b94c.ttf',
    'images/AlegreyaSans-LightItalic-10.a7bcf48fe42bfd5d67a4f6e6ba8d9b5c.ttf',
    'images/AlegreyaSans-Medium-11.873ac8a526acfc3255d5b10620f3e13e.ttf',
    'images/AlegreyaSans-MediumItalic-12.a5b7d9d35e21887bb6415a6219151fa5.ttf',
    'images/AlegreyaSans-Regular-13.738457fb0b9ac12b51ac191634117f12.ttf',
    'images/AlegreyaSans-Thin-14.b86bdd82f65cbaab6e977be88f408936.ttf',
    'images/AlegreyaSans-ThinItalic-15.f878d7cbaf2fee9c103cd8a563d7e8e1.ttf',
    'images/color-rain.5a7ce62c84d9c6b8e961ffa9cec721d1.svg',
    'images/color-humidity.94b220a7f7c1e7181c940297d942d8b4.svg',
    'images/color-wind.a89f5eb6fc5660dbe5646a1c41a56a74.svg',
    'images/noun-rain.c93e6d4f758dbd67275561831ab633fa.svg',
    'images/noun-humidity.a06c4d0f972b895c9244820ea163b11b.svg',
    'images/noun-wind.e40d081e6c1abeaedcdba0005004f343.svg',
    'images/home-icon.801720279dd81f0a3637c99f707e455b.svg',
    'images/back-arrow.f158b891b8aadabd69e1b7a6372d3119.svg',
    'images/w-icon.ca2cb955e18b7350aeacfe59e24ebac6.svg',
    'images/day-clouds.dde5cb3b536b1eb85e24dfc82d8e58c7.png',
    'images/day-fine.f31ba8db7e32684a6e59c4bb7532b068.png',
    'images/day-rain.8b93d2514a2ef745cab7bfe1d56a9935.png',
    'images/day-snow.881b54eb9071900eed34a451b3764a13.png',
    'images/day-storm.1571eb8ca8ae7785efb5305ad7024f06.png',
    'images/day-wind.a3977feafd904a33688211ece86dabd3.png',
    'images/home-icon.b8a29e0018aabbb6f347eff54fab3938.png',
    'images/night-clouds.c2e801fa2761095ea6d7ae2cc04a3eda.png',
    'images/night-rain.c9d6c2852cbd3401cb41c40fdf8eef15.png',
    'images/night-fine.6dbdd97b2f3dbc8883698f6d01538b40.png',
    'images/night-snow.de16e13185694c13b51723030bee784c.png',
    'images/night-storm.e9a3d8e21c31ae830c60c5b40b6f84ad.png',
    'images/night-wind.edc296e5ccd1eebd9d348546aade29b9.png',
    'main.bundle.723f214399006fa796c6.js',
    '344.bundle.723f214399006fa796c6.js',
    '344.bundle.723f214399006fa796c6.js.LICENSE.txt',
    'index.html',
  ],
  cacheName = 'gzj-applovin';
self.addEventListener('install', function (e) {
  console.log('[Service Worker] Install'),
    e.waitUntil(
      caches.open(cacheName).then(function (e) {
        return console.log('[Service Worker] Caching all: app shell and content'), e.addAll(files);
      }),
    );
}),
  self.addEventListener('fetch', function (e) {
    e.respondWith(
      caches.match(e.request).then(function (n) {
        return (
          console.log('[Service Worker] Fetching resource: ' + e.request.url),
          n ||
            fetch(e.request).then(function (n) {
              return caches.open(cacheName).then(function (c) {
                return (
                  console.log('[Service Worker] Caching new resource: ' + e.request.url), c.put(e.request, n.clone()), n
                );
              });
            })
        );
      }),
    );
  });

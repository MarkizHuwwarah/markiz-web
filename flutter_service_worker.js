'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2b9f0f83ea8e0515e7d22171a59cb12b",
".git/config": "1231ea60ab43a54ed1b16a4c750f3797",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9bc6c07bb331f095c32cd3f7b36d895e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dea35f682a27e538dd464e90ed1b221e",
".git/logs/refs/heads/main": "6fc21871a71841fb7aee6dfd7053c09e",
".git/logs/refs/remotes/origin/main": "75a0ee0390110a897d7c25be34b662ce",
".git/objects/0c/34325be8f0593e77c8658e07a0458bf42311ae": "c4753640d857da052f2f24783a122b0d",
".git/objects/0d/3a6c0042a2694bd4f4d8617fe76d4d2e649e89": "7f8ea958975b180d0492d88e4b9ae5c9",
".git/objects/15/9aa340168138dc9471a5f138756cf5d1c52839": "dc949579062e46c8bc454f201abd6a21",
".git/objects/18/86f5fe7bd065ce7312061224fc9cb498be61bc": "6d24da4ff39c4aa5c01f44ecd5d65da8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/43b098d41f44cd3303bcadeb387fbd1b1a9f06": "868c063f5d87635b9a63c6f6bdc31377",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/447a866ce5ff6adf7aaa6a64629ff5874d3158": "ac6af696bdc1630442df3f8733840d89",
".git/objects/2b/ee629377a5a206071ba7f39a37191ba272ab38": "6239d76df8748394171442dc8ef9617f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/62f69b5b71ad69d69e9d5994849fc54a98575e": "c1e9cd2f50132581bf60a9b756fb618a",
".git/objects/5b/b7fcb8bc85dcb7a0b1f7e270eea28ab2408c42": "16c529b6cc7e8861ae2920ee8fe0ad54",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/63/951d8fdc556bc94d44423c30976f27d376ab9e": "02f6a5c1833912d015b378a2eceaa810",
".git/objects/68/c68d353b9be62015d129f81bfb7e37411b8809": "101fe3feaeeee99bc6bf095dcd0ad0fd",
".git/objects/73/7c52b8c1b3d82b802bd5d4beeda7bca9ae1c5f": "67bcf3af2729faa714fa8864191bb8f4",
".git/objects/7e/7f26463c096767fea49cafcc3b2daab93d64ff": "26b9baa61da298f552f6f62e47a42e8f",
".git/objects/85/5822393000e8ce1ddaf237d69c68b577621b29": "6702a037f1065b941a69ee7b93e34683",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/93/c4b17b45a4bbf31d887bce0c20efaa1ad9c6ca": "ebaf686dc6aca468c7db9f8b1893db65",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/4abd8d77d36cf9a1d978aa9a8ddf8281fc79aa": "c6f0ffcd6ee4d88250345804ad3e0bb9",
".git/objects/9d/839ef0188595b437312b9a08f32e93aca0e9c8": "f0e348d7545101ad43c6a987a0bf3d58",
".git/objects/a1/2790479634538100873b41db609c680e9fdcf9": "7dd37729150352faec1e60205dababef",
".git/objects/a6/2c6130e2e17456af2c2ad2f5b2469b6416b0fc": "42fda8fa1e280c0e56bf5d8a384544ce",
".git/objects/a7/1b80d10800da2ff09d269092418c51c1246cee": "f813734dba733484dcf76135302cf857",
".git/objects/b9/d4d0e9cffd78e15f33bf6cc5ddb93b24dae60a": "7d926b9cd338e023615633630b45daa7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5ff92cd31b47b0f80db1fcce555071bb503902": "b7f81a75f73f4909c9e91f00dc66b41d",
".git/objects/bb/33a77c63de74ba25fa2ba311fbe19b6409a303": "cd5d2e246c442c9f328de6597a48bb6a",
".git/objects/c0/4fba82fc2fca64da876dfd887d5c5adcce754d": "3d4ec3b823c7003e46e42921cb9e098f",
".git/objects/c4/33bf845b58e3a0a699694ae3fe36b0004f76f5": "7ad8d7dd01063476636d0f302a158a58",
".git/objects/c4/f4d4662ce7b00c5b8a79cf46c108acf7b9f8ae": "99de414c9f42bb538d3198d00f72fa86",
".git/objects/cc/f145cc12850054463db2c218b9138b002ca49e": "be20c1c6093dfccacd51ad4000fef8bb",
".git/objects/cd/f54dd4570d4cc9f4ca66e50ebe16adc3b47f12": "d33fa52ecd722a84555dad47d8351a33",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/da/6ae625fae02cbce62c7823c66d5591ac607e1b": "a76fc9bb6b1cae8287497580b01bb3e0",
".git/objects/df/7de031c17ddfc5e2080b1ce9e50e0c0c3333f0": "90b8e66c121c45aeafd2162daf39f5ac",
".git/objects/e7/d47746dc97934a5e0257bdb75dacdc279b9252": "92c4f3f0c7b514a07e7181b685ff8a94",
".git/objects/e9/42ea68a5f8eea4f4609cfff1d50c9059f74d02": "8096366b890a3efc5ab6e882e05527b0",
".git/objects/ec/20d160615b9b1525a72801975ee6cf9133f9c2": "4ad82495ea8c4909921bf7fbec942184",
".git/objects/ef/0612e083156e1b26fb9c62348e70140f7aec2d": "d6899b7c42fe0a13ca1c58ed7e77408c",
".git/objects/ef/ab2030ee19684b1f169a0f9039b843b114db93": "7efd9cc6735715b9bd195817bf32fd0c",
".git/objects/f1/3b08ff024c89005bdd807d041d305ce46b94cc": "825abd92fec61f520d1f3969e150002f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d2866032b87c11f60b6c88a3ea548362b0f0e8": "ec1c8a8f2beda83d92d77c98f1d41035",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/refs/heads/main": "2df843b2c1f48dae7fc6101a687ba93e",
".git/refs/remotes/origin/main": "2df843b2c1f48dae7fc6101a687ba93e",
"assets/AssetManifest.bin": "b6b12e04eaf9ce0cc1efd17a057dec7b",
"assets/AssetManifest.bin.json": "75466a8f5e70c9d802a565b0aaf4f6dc",
"assets/AssetManifest.json": "f1f590340d1da3ddf33ed876062fe607",
"assets/assets/images/building%2520background.jpg": "007acca4e6ebcc09a8fee3f62d6c10c0",
"assets/assets/images/building%2520background.png": "2b8f0d12e3d9a1e0a764fb90d90e958c",
"assets/assets/images/building%2520background.webp": "403370448be065329197faeadaa5473f",
"assets/assets/images/building%2520background2.png": "a2cc9d3e5ff39bf11d4ab65604415416",
"assets/assets/images/icon.png": "bb1d8f89887c263f296c2f7b63a4a83c",
"assets/assets/images/Logo.png": "fd67dff57e25122172e6a4ae6134ff6d",
"assets/assets/images/Logo.webp": "2182ab0a00ca7d23da52a0727154b114",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "35b70e72900d3a7b4a89ae7affd365fd",
"assets/NOTICES": "5489a55bf83c575837cc8b2fc6059826",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "ee385d39fbe380a8209fa659edea298c",
"canvaskit/canvaskit.wasm": "6fd6f6585a15c04491bbdc70f90ef3b1",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "52028edbd1c3b9ed9878e4da6a51705b",
"canvaskit/chromium/canvaskit.wasm": "4d28e20860ad61e5a381e859fb92a6d7",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "0a758b1a9c6603351c30dde65edfd7f3",
"canvaskit/skwasm.wasm": "17681f711e444de5ae35eaa3a9c230ad",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9860fb85bce329a1ecd458ac19cfff0d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a133dd1437f366f3d5bea4fa450e8385",
"icons/Icon-192.png": "9f954ce49ec9851f699e79c8506a59a0",
"icons/Icon-512.png": "a89076e3bf1b804919dddbb33ba1c17d",
"icons/Icon-maskable-192.png": "9f954ce49ec9851f699e79c8506a59a0",
"icons/Icon-maskable-512.png": "a89076e3bf1b804919dddbb33ba1c17d",
"index.html": "bc0040b63693dae36d668d658ec34005",
"/": "bc0040b63693dae36d668d658ec34005",
"main.dart.js": "2f5ebc626b2197553b195eebeaceb5d5",
"manifest.json": "0078f174053008d619936e8d5c168b13",
"version.json": "6f980ec216e1d2aca734d4ea0e338d1e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

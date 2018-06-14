/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["asset-manifest.json","34d7cd1a7e69229a131bdd71fc766653"],["favicon.ico","fd73a6eb26a08ee46e7fd3cc34e7f6bf"],["guides/1/0.png","639252f17a2ca5c0ade1f13b7278b1be"],["guides/1/1.png","db9a02b7b1e5dfc66c22195151ace0e8"],["guides/1/2.png","310691de2ee835bd74445cc0475a91ad"],["guides/10/0.PNG","6ac0cb50df014e01d73c4bbacf0b17ad"],["guides/10/1.PNG","0c0eccca4b5c88d749d21bf042a7f794"],["guides/10/2.PNG","79814e1cfd43e74f7aa3dba6a14a3dfc"],["guides/11/0.png","639252f17a2ca5c0ade1f13b7278b1be"],["guides/11/1.PNG","1ab777f80ae75605ae4eced8a305e856"],["guides/11/2.PNG","3a8efa2fcb50c9770f0d56144ae1817f"],["guides/11/3.png","764076e609624c75d781ac5e2290364e"],["guides/11/4.PNG","877086393939b84eb0c6cafd34d1c222"],["guides/11/5.PNG","744ec3224b270829336609294f29543b"],["guides/12/0.PNG","ccd13009d35b6719a670c528d932bd03"],["guides/12/1.PNG","e68a9bf3e0eeccb5bd448163e354f6c3"],["guides/12/2.PNG","a85f7074380a8fe7aa75265a50624a54"],["guides/13/0.PNG","ccd13009d35b6719a670c528d932bd03"],["guides/13/1.PNG","157b5d5f49e513cfc32e8ae40b9a5dab"],["guides/13/2.PNG","a61f497655e57a10dfc1c8a906aaf1df"],["guides/13/3.PNG","8778ded03e7121231fcff44fe6c9107d"],["guides/14/0.PNG","ccd13009d35b6719a670c528d932bd03"],["guides/14/1.PNG","ecf26576edefe5f93e102500b67bad7a"],["guides/14/2.PNG","a0bd0fb530efe9741554081e827deab5"],["guides/2/0.png","639252f17a2ca5c0ade1f13b7278b1be"],["guides/2/1.png","89577602e15876d791b8de4e1b20e2ca"],["guides/2/2.png","eb846ea6617dfa75ccfbe7595a91f147"],["guides/2/3.png","14cc52be3596018a236a2cefb470986e"],["guides/3/0.png","8da18976430c48a2fd99a50aac5214fa"],["guides/4/0.png","a3147c4a089735802ce4f05aa1f1286e"],["guides/4/1.png","9a52430f22546c2770323fa60e0c944e"],["guides/4/2.png","42e1f0577ac7dee87b72d3ec17e38099"],["guides/4/3.png","8598f9899c0eb845c80f1b7c35145bc2"],["guides/4/4.png","8fb3ad5103902c6265d343d626c34bc9"],["guides/5/0.png","a3147c4a089735802ce4f05aa1f1286e"],["guides/5/1.png","9a52430f22546c2770323fa60e0c944e"],["guides/5/2.PNG","0f638c3f077ffa38041190230012e3e3"],["guides/5/3.PNG","9a456cc745d687d08f84d3360333232f"],["guides/5/4.png","9fe056df03697878636d2d66471d38c1"],["guides/5/5.PNG","fae0b9c9fead49cc09b57d9745024884"],["guides/6/0.png","59059efbff8ccd04f054a79661519948"],["guides/6/1.PNG","cfb99c78ccd3508c470422d35c44eb10"],["guides/6/2.PNG","136bd1cf3e224936d6e11d7d3a27b21f"],["guides/7/0.PNG","cd1c69fcee0c95a2e7334d033010e158"],["guides/7/1.PNG","900876d7ee45ad77cff2893c086c2758"],["guides/7/2.PNG","346b7081e959511fe13ce57fd7c6075b"],["guides/8/0.png","8c9848e747eacbe3883ab1a07838dc90"],["guides/8/1.PNG","9fce10a7076497402a98132d768280ea"],["guides/8/2.PNG","551969cbf36c4e56fe76994738dff182"],["guides/8/3.PNG","a44dadc10fc6e3c80c7bd192023ac61c"],["guides/8/4.PNG","2318802669185854c24110f46ff29e2f"],["guides/9/0.PNG","6ac0cb50df014e01d73c4bbacf0b17ad"],["guides/9/1.PNG","8040d13a3c7bd964b04e853f79a73572"],["guides/9/2.PNG","79814e1cfd43e74f7aa3dba6a14a3dfc"],["icon.png","edc31310ff47019bd3585cf0161a3d00"],["icons/back.png","0bc15b8fc4d8688e7d3dc17222e3670f"],["icons/books.png","bca3414c73ffd1a6115f7a2708264e2d"],["icons/camera.png","fb6b94ce1f5a0370cc1bae9568934c92"],["icons/clock.png","3f7c06d6e47b091eddf6f230ae8baf7e"],["icons/dji.png","23acd56c72e26ce225e89d326502a052"],["icons/duo.png","2d2c5fcb1697f64147ee8980d56ec71c"],["icons/facetime.png","0e8055adf95d3a13f0443780eaa42531"],["icons/icloud.png","f2e8c7d934a270c123f5f9efb6c08b9b"],["icons/messages.png","4ccc59cabb884457259b73d346e1452e"],["icons/nextcloud.png","88b03909244a765431dca2bd0d487b28"],["icons/sbb.png","96dab48f44482e42c19dfe5ad60d772f"],["icons/settings.png","44dc0d989b8219f897059266cdf27c26"],["icons/tripadvisor.png","d35f0a422d8f13fcbf7f15d86e734daa"],["index.html","8f4a8b83f06ea6d7ea370b2875085150"],["manifest.json","a4ca799b0b2685cae7209d87b2822991"],["static/css/main.9f31de05.css","3f2ad7737749e246a95d559190de3c9d"],["static/js/main.afc00cb3.js","0a81784971d19b2370daecd44593ba86"],["static/media/SF-Pro-Display-Bold.644563f4.otf","644563f48ab5fe8e9082b64b2729b068"],["static/media/SF-Pro-Display-Medium.51fd7406.otf","51fd7406327f2b1dbc8e708e6a9da9a5"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







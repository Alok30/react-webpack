// const cacheName = "webAppTest";
// const appFiles = ["/"];

// this.self.addEventListener("install", (e) => {
//   e.waitUntill(
//     (async () => {
//       const cache = await caches.open(cacheName);
//       console.log("service worker caching all");
//       await cache.addAll(contentToCache);
//     })()
//   );
// });
// this.self.addEventListener("fetch", (e) => {
//   console.log(e, "e");
//   e.respondWith(
//     (async () => {
//       const r = await caches.match(e.request);
//       if (r) {
//         return r;
//       }
//       const response = await fetch(e.request);
//       const cache = await caches.open(cacheName);
//       console.log("service working is caching new resource");
//       cache.put(e.request, response.clone());
//       return response;
//     })()
//   );
// });
// this.self.addEventListener("activate", (e) => {
//     e.waitUntil(
//       caches.keys().then((keyList) => {
//         return Promise.all(
//           keyList.map((key) => {
//             if (key === cacheName) {
//               return;
//             }
//             return caches.delete(key);
//           })
//         );
//       })
//     );
//   });

if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"546e7bd8e35bec80e903fe62d8cc6815","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"546e7bd8e35bec80e903fe62d8cc6815","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"dc5409ff49a47801e91bc0fd82c00b4c","url":"static/css/21.b82d8140.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"26b7291912834da1c9998f0300a89369","url":"static/js/1.975c8071.chunk.js"},{"revision":"1a3f6b502a23f732c3caa66abef1a807","url":"static/js/11.0f6d823c.chunk.js"},{"revision":"888a8dce512dc9ba8446bb885c4f8091","url":"static/js/12.9a48f19e.chunk.js"},{"revision":"a9565d7154b4c78c679449a8a9929b82","url":"static/js/13.8714237b.chunk.js"},{"revision":"c5b008a8f115f24c9c12edbdbafe020e","url":"static/js/14.bc269616.chunk.js"},{"revision":"001dbf76589195de13979b9df2d09126","url":"static/js/15.0f4fd666.chunk.js"},{"revision":"02a68b792e0fa750ce29df9055039a41","url":"static/js/16.625be3fd.chunk.js"},{"revision":"e896265a987b817bb018a0b6d402d0ad","url":"static/js/17.00858332.chunk.js"},{"revision":"6dbba7d72fe0c2153344432c3d4f54ad","url":"static/js/18.593cafdf.chunk.js"},{"revision":"b579d61798781d3f9deba32f65103a11","url":"static/js/19.6c107128.chunk.js"},{"revision":"9e1d7b65707ab45fc810945d17a1cee4","url":"static/js/2.366b601a.chunk.js"},{"revision":"690066f4cc7a920f25bafa3e8ce51be9","url":"static/js/20.2211fb60.chunk.js"},{"revision":"cda7e5e7dbc3768c599cf3bdaaf8253c","url":"static/js/21.28da2ae6.chunk.js"},{"revision":"919c228886b6d6185290dd291f9fc7a4","url":"static/js/22.b173c370.chunk.js"},{"revision":"d946d5299b29383b02c0441658cc4ced","url":"static/js/23.fdfbcf97.chunk.js"},{"revision":"b8d1d7def59073561a8288ee814ef2e6","url":"static/js/24.813174db.chunk.js"},{"revision":"1d1e44fdc769959e09d876c9fbcc9d0e","url":"static/js/25.2d8ebb06.chunk.js"},{"revision":"d3201a695ff82c3950e6923ff09987eb","url":"static/js/26.0e901926.chunk.js"},{"revision":"a24bc291f989324c25c346df607e4676","url":"static/js/27.e160a016.chunk.js"},{"revision":"ee2e0a133b9c86d7e62dd09020dec417","url":"static/js/28.4a7f34fd.chunk.js"},{"revision":"7e63d425429975e033493d7b28076817","url":"static/js/29.fd45a34b.chunk.js"},{"revision":"e561551976b8ff130df47afbd6be98cb","url":"static/js/3.0b42779b.chunk.js"},{"revision":"d81edb3b8e1918e8dee11d8f98bc71fc","url":"static/js/30.a00c3542.chunk.js"},{"revision":"c39df0775acdba4686c92d5ebb67743d","url":"static/js/31.87f31d86.chunk.js"},{"revision":"f6c5df46bfbdc603364e1ce266d9711b","url":"static/js/32.8bd98a05.chunk.js"},{"revision":"b19a2e818ad8ee21a939872f6b135466","url":"static/js/33.fd7ff09c.chunk.js"},{"revision":"9a912dadb4b740e0ef7597a7d1835fd6","url":"static/js/34.c0314b41.chunk.js"},{"revision":"9ad926c09200a18c670d5c3751a82a56","url":"static/js/35.8212a84e.chunk.js"},{"revision":"dfc82b1ea0cd2ffd304d32e1c05b8c1b","url":"static/js/36.c2482ec8.chunk.js"},{"revision":"18d8263d420ca56a468862cc1225bf42","url":"static/js/37.0baf06ff.chunk.js"},{"revision":"c80947be7a2494924e381d60585e9cdb","url":"static/js/38.f738a661.chunk.js"},{"revision":"4073d1d5d2671a218a5544149f1783c2","url":"static/js/39.5d39699d.chunk.js"},{"revision":"a01cebf2d8302261b57ec08261972ba1","url":"static/js/4.c6f23ee7.chunk.js"},{"revision":"17669c222c06962310dec035ffa4c29d","url":"static/js/40.1fb2ddcf.chunk.js"},{"revision":"28d70dad55ba21edc73a3f9b658705df","url":"static/js/41.8afe9af1.chunk.js"},{"revision":"b1022be2bf080c74c36aeac287b997d2","url":"static/js/42.c370b312.chunk.js"},{"revision":"14a9b9ac021c611b6c657e4409fd77ef","url":"static/js/43.5f9df5ca.chunk.js"},{"revision":"27d2c4c246228d68e15d3132b18ab7c1","url":"static/js/44.62a159f1.chunk.js"},{"revision":"113e4c07d4d570834a5bc5d2a6e1dbb1","url":"static/js/5.31dc7d5b.chunk.js"},{"revision":"fabfd06e7bddf8ee9e28e094b7337f1d","url":"static/js/6.2269dc02.chunk.js"},{"revision":"a792cea0e21af417da63f2a81cb196ac","url":"static/js/7.f0167666.chunk.js"},{"revision":"a883dcfee941b8f5cd6bbbd8f1efb228","url":"static/js/8.f7eeb7cc.chunk.js"},{"revision":"4850ce53a36a6855bf466f3154951d8c","url":"static/js/main.6eec73be.chunk.js"},{"revision":"29b4e71c4fd34dac0dc4746a4295b749","url":"static/js/runtime-main.6f9aea0c.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}

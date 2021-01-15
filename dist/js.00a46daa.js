// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/models/newsAPI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var News = function News(newsDataFromAPI) {
  _classCallCheck(this, News);

  this.source = newsDataFromAPI.source.name;
  this.author = newsDataFromAPI.author;
  this.title = newsDataFromAPI.title;
  this.description = newsDataFromAPI.description;
  this.newsURL = newsDataFromAPI.url;
  this.imgURL = newsDataFromAPI.urlToImage;
  this.date = new Date(newsDataFromAPI.publishedAt);
  this.content = newsDataFromAPI.content;
};

var _default = News;
exports.default = _default;
},{}],"js/utils/mainNewsContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMainNews = createMainNews;

function createMainNews(newsObject) {
  var singleNews = document.createElement("div"),
      imgContainer = document.createElement("div"),
      newsImg = document.createElement("img"),
      newsMeta = document.createElement("div"),
      newsDate = document.createElement("div"),
      newsCategory = document.createElement("div"),
      newsHeading = document.createElement("div"),
      newsContent = document.createElement("div"),
      readMoreDiv = document.createElement("div"),
      readMore = document.createElement("a"),
      newsDataContainer = document.createElement("div"),
      divider = document.createElement("div");
  singleNews.classList.add("single-news");
  imgContainer.classList.add("news-imgContainer");
  newsMeta.classList.add("news-meta");
  newsDate.classList.add("date");
  newsCategory.classList.add("category");
  newsHeading.classList.add("news-heading");
  newsContent.classList.add("news-content");
  readMoreDiv.classList.add("readMoreDiv");
  readMore.classList.add("read-more");
  newsDataContainer.classList.add("newsDataContainer");
  divider.classList.add("divider");
  var month = newsObject.date.toLocaleString('default', {
    month: 'short'
  });
  var pubDay = "".concat(month, " ").concat(newsObject.date.getDate(), ", ").concat(newsObject.date.getFullYear(), " ");
  newsImg.setAttribute("src", newsObject.imgURL);
  newsDate.innerHTML = pubDay;
  newsCategory.innerHTML = newsObject.source;
  newsHeading.innerHTML = newsObject.title;
  newsContent.innerHTML = newsObject.description;
  readMore.innerHTML = "Read More";
  readMore.setAttribute("href", newsObject.newsURL);
  singleNews.appendChild(imgContainer);
  imgContainer.appendChild(newsImg);
  singleNews.appendChild(newsDataContainer);
  newsDataContainer.appendChild(newsMeta);
  newsMeta.appendChild(newsDate);
  newsMeta.appendChild(divider);
  newsMeta.appendChild(newsCategory);
  newsDataContainer.appendChild(newsHeading);
  newsDataContainer.appendChild(newsContent);
  newsDataContainer.appendChild(readMore);
  return singleNews;
}
},{}],"js/utils/imageGenerator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImage = createImage;

function createImage() {
  var imgContainer = document.getElementById("all-img-container"),
      imgDiv = document.createElement("div"),
      singleImg = document.createElement("img");
  imgDiv.classList.add("allImgDiv");
  singleImg.classList.add("singleImg");
  singleImg.setAttribute("src", "https://picsum.photos/300/300?grayscale");
  imgDiv.appendChild(singleImg);
  return imgDiv;
}
},{}],"js/utils/headlineGenerator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeadlinesPage = createHeadlinesPage;

function createHeadlinesPage(newsData) {
  var headLineContainer = document.createElement("div"),
      singleHeadlineContainer = document.createElement("div"),
      headlineImageContainer = document.createElement("div"),
      headLineImage = document.createElement("img"),
      headLineDataContainer = document.createElement("div"),
      mainHeadLine = document.createElement("div"),
      headLineDescription = document.createElement("div"),
      readMoreDiv = document.createElement("div"),
      readMoreA = document.createElement("a");
  console.log("called");
  singleHeadlineContainer.classList.add("singleHeadlineContainer");
  headlineImageContainer.classList.add("singleImageContainer");
  headLineImage.classList.add("headLineImage");
  headLineDataContainer.classList.add("headLineDataContainer");
  mainHeadLine.classList.add("mainHeadLine");
  headLineDescription.classList.add("headLineDescription");
  readMoreDiv.classList.add("readMoreDiv");
  readMoreA.classList.add("readmoreA");
  headLineImage.setAttribute("src", newsData.imgURL);
  mainHeadLine.innerHTML = newsData.title;
  headLineDescription.innerHTML = newsData.description;
  readMoreA.innerHTML = "Read More";
  readMoreA.setAttribute("href", newsData.newsURL);
  singleHeadlineContainer.appendChild(headlineImageContainer);
  headlineImageContainer.appendChild(headLineImage);
  singleHeadlineContainer.appendChild(headLineDataContainer);
  headLineDataContainer.appendChild(mainHeadLine);
  headLineDataContainer.appendChild(headLineDescription);
  headLineDataContainer.appendChild(readMoreDiv);
  readMoreDiv.appendChild(readMoreA);
  return singleHeadlineContainer;
}
},{}],"js/utils/allNewsGenerator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAllNews = createAllNews;

function createAllNews(newsObject) {
  var singleAllNewsContainer = document.createElement("div"),
      allNewsImgDiv = document.createElement("div"),
      allNewsImg = document.createElement("img"),
      allNewsMeta = document.createElement("div"),
      allNewsDate = document.createElement("div"),
      allNewsAuthor = document.createElement("div"),
      metaDivider = document.createElement("div"),
      allNewsHeadline = document.createElement("div");
  singleAllNewsContainer.classList.add("singleAllNewsContainer");
  allNewsImgDiv.classList.add("allNewsImgDiv");
  allNewsMeta.classList.add("allNewsMeta");
  allNewsDate.classList.add("allNewsDate");
  allNewsAuthor.classList.add("allNewsAuthor");
  metaDivider.classList.add("metaDivider");
  allNewsHeadline.classList.add("allNewsHeadline");
  var month = newsObject.date.toLocaleString('default', {
    month: 'short'
  });
  var pubDay = "".concat(month, " ").concat(newsObject.date.getDate(), ", ").concat(newsObject.date.getFullYear(), " ");
  allNewsImg.setAttribute("src", newsObject.imgURL);
  allNewsDate.innerHTML = pubDay;
  allNewsAuthor.innerHTML = newsObject.author;
  allNewsHeadline.innerHTML = newsObject.title; //readMore.setAttribute("href", newsObject.newsURL)

  singleAllNewsContainer.appendChild(allNewsImgDiv);
  allNewsImgDiv.appendChild(allNewsImg);
  singleAllNewsContainer.appendChild(allNewsMeta);
  allNewsMeta.appendChild(allNewsDate);
  allNewsMeta.appendChild(metaDivider);
  allNewsMeta.appendChild(allNewsAuthor);
  singleAllNewsContainer.appendChild(allNewsHeadline);
  return singleAllNewsContainer;
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _newsAPI = _interopRequireDefault(require("./models/newsAPI"));

var _mainNewsContent = require("./utils/mainNewsContent");

var _imageGenerator = require("./utils/imageGenerator");

var _headlineGenerator = require("./utils/headlineGenerator");

var _allNewsGenerator = require("./utils/allNewsGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigation = document.getElementById("navigation"),
    close = document.getElementById("close"),
    menuBtn = document.getElementById("menu-btn"),
    fullOverlay = document.getElementById("overlay"),
    newsContainer = document.getElementById("news-container"),
    imgBtn = document.getElementById("imgButton"),
    loader = document.getElementById("loader");
var headLineContainer = document.getElementById("headlines-container");
var allImgContainer = document.getElementById("all-img-container");
var newsContentContainer = document.getElementById("news-content-container");
var fullNav = window.matchMedia("(min-width:1025px");
window.addEventListener("resize", function () {
  if (fullNav.matches) {
    fullOverlay.classList.add("fadeout");
    navigation.style.width = "100%";
    setTimeout(function () {
      fullOverlay.style.display = "none";
    }, 1000);
  } else {
    navigation.style.width = "0";
  }
});
menuBtn.addEventListener("click", function () {
  navigation.style.width = "15em";
  fullOverlay.style.display = "block";
  fullOverlay.classList.remove("fadeout");
  fullOverlay.classList.add("fadein");
});
close.addEventListener("click", function () {
  navigation.style.width = "0";
  fullOverlay.classList.add("fadeout");
  setTimeout(function () {
    fullOverlay.style.display = "none";
  }, 1000);
});

if (newsContainer !== null) {
  loader.classList.remove("hidden");
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
    method: "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (jsonResponse) {
    if (jsonResponse.articles) {
      for (var i = 0; i < 6; i++) {
        var newsData = new _newsAPI.default(jsonResponse.articles[i]);
        newsContainer.appendChild((0, _mainNewsContent.createMainNews)(newsData));
      }
    }
  }).then(function () {
    loader.classList.add("hidden");
  }).catch(function (error) {
    console.log(error);
  });
}

if (headLineContainer !== null) {
  loader.classList.remove("hidden");
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
    method: "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (jsonResponse) {
    if (jsonResponse.articles) {
      for (var i = 0; i < 2; i++) {
        var newsData = new _newsAPI.default(jsonResponse.articles[i]);
        headLineContainer.appendChild((0, _headlineGenerator.createHeadlinesPage)(newsData));
      }
    }
  }).then(function () {
    loader.classList.add("hidden");
  }).catch(function (error) {
    console.log(error);
  });
}

if (newsContentContainer !== null) {
  loader.classList.remove("hidden");
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
    method: "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (jsonResponse) {
    if (jsonResponse.articles) {
      for (var i = 0; i < 6; i++) {
        var newsData = new _newsAPI.default(jsonResponse.articles[i]);
        newsContentContainer.appendChild((0, _allNewsGenerator.createAllNews)(newsData));
      }
    }
  }).then(function () {
    loader.classList.add("hidden");
  }).catch(function (error) {
    console.log(error);
  });
}

if (allImgContainer !== null) {
  loader.classList.remove("hidden");
  setTimeout(function () {
    for (var i = 0; i < 6; i++) {
      allImgContainer.appendChild((0, _imageGenerator.createImage)(i));
      loader.classList.add("hidden");
    }
  }, 4000);
  imgBtn.addEventListener("click", function () {
    for (var i = 0; i < 6; i++) {
      allImgContainer.appendChild((0, _imageGenerator.createImage)());
    }
  });
}
},{"./models/newsAPI":"js/models/newsAPI.js","./utils/mainNewsContent":"js/utils/mainNewsContent.js","./utils/imageGenerator":"js/utils/imageGenerator.js","./utils/headlineGenerator":"js/utils/headlineGenerator.js","./utils/allNewsGenerator":"js/utils/allNewsGenerator.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43229" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map
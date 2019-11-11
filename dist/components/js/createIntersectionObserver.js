"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## createIntersectionObserver
 *
 * 1. Use IntersectionObserver to call `enhanceFunc` for elem with the class
 * `classNameToObserve` on the page.
 * 3. The viewport is the root by default.
 * 4. Start loading the video when it is 600px above or below the viewport
 * 5. Intersection observer is not available, so call `enhanceFunc` immediately
 *
 * @param {*} classNameToObserve
 * @param {*} enhanceFunc
 * @param {*} root
 * @param {*} rootMargin
 * @param {*} threshold
 */
var createIntersectionObserver = function createIntersectionObserver(classNameToObserve, enhanceFunc) {
  var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var rootMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "600px 0px 600px 0px";
  var threshold = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;

  /**
   * ## intersectionCallback
   *
   * When the observed elements enter the screen, call `enhanceVideos` on each of them.
   *
   * 1. Only call `enchanceVideos` if the entry is on screen AND the class `js-loaded` is not present.
   *
   * @param {array} entries Array of dom elements
   */
  var intersectionCallback = function intersectionCallback(entries) {
    entries.forEach(function (entry) {
      // 1.
      if (entry.isIntersecting && !entry.target.classList.contains("js-loaded")) {
        enhanceFunc(entry.target);
      }
    });
  };

  var elems = document.getElementsByClassName(classNameToObserve);
  var elemsArray = Array.from(elems);

  if ("IntersectionObserver" in window) {
    // 2.
    var observers = [];
    var observerOptions = {
      root: root,
      // 3.
      rootMargin: rootMargin,
      // 4.
      threshold: threshold
    };
    elemsArray.forEach(function (image, index) {
      observers[index] = new IntersectionObserver(intersectionCallback, observerOptions);
      observers[index].observe(image);
    });
  } else {
    // 5.
    elemsArray.forEach(function (elem) {
      return enhanceFunc(elem);
    });
  }
};

var _default = createIntersectionObserver;
exports.default = _default;
//# sourceMappingURL=createIntersectionObserver.js.map
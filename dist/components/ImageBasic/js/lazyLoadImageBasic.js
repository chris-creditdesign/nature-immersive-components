"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enhanceImages = _interopRequireDefault(require("./enhanceImages"));

var _intersectionCallback = _interopRequireDefault(require("./intersectionCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## lazyloadImages
 *
 * Call `enhanceImages` for each `img[loading="lazy"]` on the page.
 *
 * 1. The images can natively lazyload, so no need for the IntersectionObserver.
 * Call `enhanceImages` straight away.
 * 2. Use IntersectionObserver to load the images when they move into the viewport.
 * 3. The viewport is the root by default.
 * 4. Start loading the image when it is 600px above or below the viewport
 * 5. No lazy loading options are available so pop all the high res images onto the page.
 * @param {*} root
 * @param {*} rootMargin
 */
var lazyloadImageBasic = function lazyloadImageBasic() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var rootMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "600px 0px 600px 0px";
  var images = document.getElementsByClassName("js-lazyload-img-basic");
  var imagesArray = Array.from(images);

  if ("loading" in HTMLImageElement.prototype) {
    // 1.
    imagesArray.forEach(function (image) {
      return (0, _enhanceImages.default)(image);
    });
  } else if ("IntersectionObserver" in window) {
    // 2.
    var observers = [];
    var observerOptions = {
      root: root,
      // 3.
      rootMargin: rootMargin // 4.

    };
    imagesArray.forEach(function (image, index) {
      observers[index] = new IntersectionObserver(_intersectionCallback.default, observerOptions);
      observers[index].observe(image);
    });
  } else {
    // 5.
    imagesArray.forEach(function (image) {
      return (0, _enhanceImages.default)(image);
    });
  }
};

var _default = lazyloadImageBasic;
exports.default = _default;
//# sourceMappingURL=lazyLoadImageBasic.js.map
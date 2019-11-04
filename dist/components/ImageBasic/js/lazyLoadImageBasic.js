"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## enhanceImages
 *
 * Add high res-image URL, srcset and an adjacent `source` element
 * to display high-res image.
 *
 * 1. Stop is image has already been 'enhanced'.
 * 2. Stop if the src URL does not contain '-small'.
 * 3. Create the normal URL and add it to the image
 * 4. Add the `js-loaded` class so that img cannot be 'enhanced' again.
 *
 * @param {*} img The `img` element to be enhanced
 */
var enhanceImages = function enhanceImages(fig) {
  var img = fig.querySelector("img"); // 1.

  if (fig.classList.contains("js-loaded")) return; // 2.

  if (!img.src.includes("-small")) return; // 3.

  var URL = img.src.replace(/-small/, "");
  img.setAttribute("src", URL); // 4.

  img.classList.add("js-loaded");
};
/**
 * ## intersectionCallback
 *
 * When the images enter the screen, call `enhanceImages` on each of them.
 *
 * 1. Only call `enchanceImages` if the entry is on screen AND the class
 *    `js-loaded` is not present.
 * @param {array} entries Array of dom elements
 */


var intersectionCallback = function intersectionCallback(entries) {
  entries.forEach(function (entry) {
    // 1.
    if (entry.isIntersecting && !entry.target.classList.contains("js-loaded")) {
      enhanceImages(entry.target);
    }
  });
};
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
      return enhanceImages(image);
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
      observers[index] = new IntersectionObserver(intersectionCallback, observerOptions);
      observers[index].observe(image);
    });
  } else {
    // 5.
    imagesArray.forEach(function (image) {
      return enhanceImages(image);
    });
  }
};

var _default = lazyloadImageBasic;
exports.default = _default;
//# sourceMappingURL=lazyLoadImageBasic.js.map
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

var _default = enhanceImages;
exports.default = _default;
//# sourceMappingURL=enhanceImages.js.map
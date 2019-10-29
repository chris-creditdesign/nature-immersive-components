"use strict";

/**
 * ## observeGrid
 *
 * 1. Feature detect ResizeObserver.
 * 2. Get the min value from data-min='[min]'.
 * 3. Create a proxy element to measure and convert
 * the `min` value (which might be em, rem, etc) to `px`.
 * 4. Get the element's current dimensions.
 * 5. `true` if the container is wider than the minimum
 * 6. Toggle the `aboveMin` class conditionally
 *
 * @param {*} gridNode Dom element with class grid
 */
var observeGrid = function observeGrid(gridNode) {
  // 1.
  if ("ResizeObserver" in window) {
    // 2.
    var min = gridNode.dataset.min; // 3.

    var test = document.createElement("div");
    test.style.width = min;
    gridNode.appendChild(test);
    var minToPixels = test.offsetWidth;
    gridNode.removeChild(test);
    var ro = new ResizeObserver(function (entries) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var entry = _step.value;
          // 4.
          var cr = entry.contentRect; // 5.

          var isWide = cr.width > minToPixels; // 6.

          gridNode.classList.toggle("aboveMin", isWide);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    ro.observe(gridNode);
  }
};

var loadGrid = function loadGrid() {
  var grids = document.querySelectorAll("[data-min].js-grid");
  var gridsArray = Array.from(grids);
  grids.forEach(function (grid) {
    return observeGrid(grid);
  });
};
//# sourceMappingURL=index.js.map
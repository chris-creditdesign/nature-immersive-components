"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable react/no-danger */
var React = require("react");

var PropTypes = require("prop-types");

var Head = function Head(_ref) {
  var articleURL = _ref.articleURL,
      dataLayer = _ref.dataLayer,
      description = _ref.description,
      doi = _ref.doi,
      googleTagManager = _ref.googleTagManager,
      immersiveURL = _ref.immersiveURL,
      title = _ref.title,
      twitterHandle = _ref.twitterHandle;
  var dataLayerScript = "dataLayer =".concat(JSON.stringify(dataLayer), ";");
  var imageURL = "".concat(immersiveURL).concat(doi, "/public/img/").concat(doi, ".jpg");
  return React.createElement("head", null, React.createElement("meta", {
    charSet: "UTF-8"
  }), React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no"
  }), React.createElement("title", null, title), React.createElement("meta", {
    name: "description",
    content: description
  }), React.createElement("meta", {
    property: "og:url",
    content: "".concat(articleURL).concat(doi)
  }), React.createElement("meta", {
    property: "og:type",
    content: "article"
  }), React.createElement("meta", {
    property: "og:title",
    content: title
  }), React.createElement("meta", {
    property: "og:description",
    content: description
  }), React.createElement("meta", {
    property: "og:image",
    content: imageURL
  }), React.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), React.createElement("meta", {
    name: "twitter:site",
    content: twitterHandle
  }), React.createElement("meta", {
    name: "twitter:title",
    content: title
  }), React.createElement("meta", {
    name: "twitter:description",
    content: description
  }), React.createElement("meta", {
    name: "twitter:image",
    content: imageURL
  }), React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: dataLayerScript
    }
  }), React.createElement("script", {
    src: "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
  }), React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: googleTagManager
    }
  }), React.createElement("link", {
    href: "public/css/fonts.css",
    rel: "stylesheet"
  }));
};

Head.propTypes = {
  articleURL: PropTypes.string.isRequired,
  dataLayer: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  doi: PropTypes.string.isRequired,
  googleTagManager: PropTypes.string.isRequired,
  immersiveURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string.isRequired
};
var _default = Head;
exports.default = _default;
//# sourceMappingURL=index.js.map
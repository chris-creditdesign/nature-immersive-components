"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var generateSocialURLs = function generateSocialURLs(doi, articleURL, headline, stand) {
  var facebookBaseURL = "https://www.facebook.com/sharer/sharer.php?u=";
  var twitterBaseURL = "https://twitter.com/intent/tweet?text=";
  var emailBaseURL = "mailto:?";
  var pdfURL = "public/pdf/".concat(doi, ".pdf");
  var altPdfURL = "public/pdf/".concat(doi, "-alt.pdf");
  var facebookCustom = "".concat(articleURL).concat(doi);
  var facebookWebEncoded = encodeURIComponent(facebookCustom);
  var facebookURL = "".concat(facebookBaseURL).concat(facebookWebEncoded);
  var twitterCustom = "".concat(headline, ". ").concat(stand, " ").concat(articleURL).concat(doi);
  var twitterWebEncoded = encodeURIComponent(twitterCustom);
  var twitterURL = "".concat(twitterBaseURL).concat(twitterWebEncoded);
  var emailCustom = "subject=".concat(headline, "&body=").concat(stand, " ").concat(articleURL).concat(doi);
  var emailWebEncoded = encodeURIComponent(emailCustom);
  var emailURL = "".concat(emailBaseURL).concat(emailWebEncoded);
  return {
    pdfURL: pdfURL,
    altPdfURL: altPdfURL,
    facebookURL: facebookURL,
    twitterURL: twitterURL,
    emailURL: emailURL
  };
};

var _default = generateSocialURLs;
exports.default = _default;
//# sourceMappingURL=generate-social-urls.js.map
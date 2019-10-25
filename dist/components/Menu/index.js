"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../LogosSVG/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var menuLinks = _ref.menuLinks;
  var renderedLinks = menuLinks.map(function (elem) {
    return _react.default.createElement("li", null, _react.default.createElement("a", {
      href: elem.href
    }, elem.text));
  });
  return _react.default.createElement("header", {
    className: "box menu"
  }, _react.default.createElement("div", {
    className: "cluster"
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "split-after"
  }, _react.default.createElement("a", {
    href: "https://www.nature.com"
  }, _react.default.createElement(_index.NatureLogoSVG, {
    height: 2
  }))), _react.default.createElement("button", {
    type: "button",
    "aria-expanded": true,
    "aria-controls": "menu-list"
  }, "Menu"), _react.default.createElement("div", {
    className: "cluster menu-container",
    id: "menu-list",
    hidden: false,
    style: {
      "--justify-content": "flex-start",
      "--space": "var(--s1)"
    }
  }, _react.default.createElement("ul", null, renderedLinks)))));
};

Menu.propTypes = {
  menuLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    href: _propTypes.default.string
  }))
};
var _default = Menu; // {pdfAvailable ? (
// 	<li>
// 		<GALink
// 			eventCategory="main external links"
// 			eventLabel="pdf download"
// 			href={
// 				pdfURL
// 			}
// 		>
// 			PDF
// 			version
// 		</GALink>
// 	</li>
// ) : null}
// {altPdfAvailable ? (
// 	<li>
// 		<GALink
// 			eventCategory="main external links"
// 			eventLabel="alt pdf download"
// 			href={
// 				altPdfURL
// 			}
// 		>
// 			{
// 				altPdfBlurb
// 			}
// 		</GALink>
// 	</li>
// ) : null}
// <Cluster
// 	elem="li"
// 	elemWrapper="ul"
// 	ariaLabel="Social sharing"
// >
// 	<li>
// 		<GALink
// 			eventCategory="main social links"
// 			eventLabel="facebook"
// 			target="_blank"
// 			rel="noreferrer noopener"
// 			href={
// 				facebookURL
// 			}
// 		>
// 			<FacebookLogoSVG
// 				height={
// 					2
// 				}
// 			/>
// 		</GALink>
// 	</li>
// 	<li>
// 		<GALink
// 			eventCategory="main social links"
// 			eventLabel="twitter"
// 			target="_blank"
// 			rel="noreferrer noopener"
// 			href={
// 				twitterURL
// 			}
// 		>
// 			<TwitterLogoSVG
// 				height={
// 					2
// 				}
// 			/>
// 		</GALink>
// 	</li>
// 	<li>
// 		<GALink
// 			eventCategory="main social links"
// 			eventLabel="email"
// 			target="_blank"
// 			rel="noreferrer noopener"
// 			href={
// 				emailURL
// 			}
// 		>
// 			<EmailLogoSVG
// 				height={
// 					2
// 				}
// 			/>
// 		</GALink>
// 	</li>
// </Cluster>

exports.default = _default;
//# sourceMappingURL=index.js.map
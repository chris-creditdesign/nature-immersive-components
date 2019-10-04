"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

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
  return (0, _core.jsx)("head", null, (0, _core.jsx)("meta", {
    charSet: "UTF-8"
  }), (0, _core.jsx)("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no"
  }), (0, _core.jsx)("title", null, title), (0, _core.jsx)("meta", {
    name: "description",
    content: description
  }), (0, _core.jsx)("meta", {
    property: "og:url",
    content: "".concat(articleURL).concat(doi)
  }), (0, _core.jsx)("meta", {
    property: "og:type",
    content: "article"
  }), (0, _core.jsx)("meta", {
    property: "og:title",
    content: title
  }), (0, _core.jsx)("meta", {
    property: "og:description",
    content: description
  }), (0, _core.jsx)("meta", {
    property: "og:image",
    content: imageURL
  }), (0, _core.jsx)("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), (0, _core.jsx)("meta", {
    name: "twitter:site",
    content: twitterHandle
  }), (0, _core.jsx)("meta", {
    name: "twitter:title",
    content: title
  }), (0, _core.jsx)("meta", {
    name: "twitter:description",
    content: description
  }), (0, _core.jsx)("meta", {
    name: "twitter:image",
    content: imageURL
  }), (0, _core.jsx)("script", {
    dangerouslySetInnerHTML: {
      __html: dataLayerScript
    }
  }), (0, _core.jsx)("script", {
    src: "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
  }), (0, _core.jsx)("script", {
    dangerouslySetInnerHTML: {
      __html: googleTagManager
    }
  }), (0, _core.jsx)("link", {
    href: "public/css/fonts.css",
    rel: "stylesheet"
  }));
};

Head.propTypes = {
  articleURL: PropTypes.string.isRequired,
  dataLayer: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  doi: PropTypes.string.isRequired,
  googleTagManager: PropTypes.string.isRequired,
  immersiveURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string.isRequired
};
var _default = Head;
exports.default = _default;
Head.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Head",
  "props": {
    "articleURL": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "dataLayer": {
      "type": {
        "name": "object"
      },
      "required": true,
      "description": ""
    },
    "description": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "doi": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "googleTagManager": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "immersiveURL": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "twitterHandle": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWQvaW5kZXguanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlByb3BUeXBlcyIsIkhlYWQiLCJhcnRpY2xlVVJMIiwiZGF0YUxheWVyIiwiZGVzY3JpcHRpb24iLCJkb2kiLCJnb29nbGVUYWdNYW5hZ2VyIiwiaW1tZXJzaXZlVVJMIiwidGl0bGUiLCJ0d2l0dGVySGFuZGxlIiwiZGF0YUxheWVyU2NyaXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImltYWdlVVJMIiwiX19odG1sIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFDQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BU1A7QUFBQSxNQVJMQyxVQVFLLFFBUkxBLFVBUUs7QUFBQSxNQVBMQyxTQU9LLFFBUExBLFNBT0s7QUFBQSxNQU5MQyxXQU1LLFFBTkxBLFdBTUs7QUFBQSxNQUxMQyxHQUtLLFFBTExBLEdBS0s7QUFBQSxNQUpMQyxnQkFJSyxRQUpMQSxnQkFJSztBQUFBLE1BSExDLFlBR0ssUUFITEEsWUFHSztBQUFBLE1BRkxDLEtBRUssUUFGTEEsS0FFSztBQUFBLE1BRExDLGFBQ0ssUUFETEEsYUFDSztBQUNMLE1BQU1DLGVBQWUsd0JBQWlCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsU0FBZixDQUFqQixNQUFyQjtBQUNBLE1BQU1VLFFBQVEsYUFBTU4sWUFBTixTQUFxQkYsR0FBckIseUJBQXVDQSxHQUF2QyxTQUFkO0FBQ0EsU0FDQyw2QkFDQztBQUFNLElBQUEsT0FBTyxFQUFDO0FBQWQsSUFERCxFQUVDO0FBQ0MsSUFBQSxJQUFJLEVBQUMsVUFETjtBQUVDLElBQUEsT0FBTyxFQUFDO0FBRlQsSUFGRCxFQU9DLDhCQUFRRyxLQUFSLENBUEQsRUFTQztBQUFNLElBQUEsSUFBSSxFQUFDLGFBQVg7QUFBeUIsSUFBQSxPQUFPLEVBQUVKO0FBQWxDLElBVEQsRUFVQztBQUNDLElBQUEsUUFBUSxFQUFDLFFBRFY7QUFFQyxJQUFBLE9BQU8sWUFBS0YsVUFBTCxTQUFrQkcsR0FBbEI7QUFGUixJQVZELEVBY0M7QUFBTSxJQUFBLFFBQVEsRUFBQyxTQUFmO0FBQXlCLElBQUEsT0FBTyxFQUFDO0FBQWpDLElBZEQsRUFlQztBQUFNLElBQUEsUUFBUSxFQUFDLFVBQWY7QUFBMEIsSUFBQSxPQUFPLEVBQUVHO0FBQW5DLElBZkQsRUFnQkM7QUFBTSxJQUFBLFFBQVEsRUFBQyxnQkFBZjtBQUFnQyxJQUFBLE9BQU8sRUFBRUo7QUFBekMsSUFoQkQsRUFpQkM7QUFBTSxJQUFBLFFBQVEsRUFBQyxVQUFmO0FBQTBCLElBQUEsT0FBTyxFQUFFUztBQUFuQyxJQWpCRCxFQW1CQztBQUNDLElBQUEsSUFBSSxFQUFDLGNBRE47QUFFQyxJQUFBLE9BQU8sRUFBQztBQUZULElBbkJELEVBdUJDO0FBQU0sSUFBQSxJQUFJLEVBQUMsY0FBWDtBQUEwQixJQUFBLE9BQU8sRUFBRUo7QUFBbkMsSUF2QkQsRUF3QkM7QUFBTSxJQUFBLElBQUksRUFBQyxlQUFYO0FBQTJCLElBQUEsT0FBTyxFQUFFRDtBQUFwQyxJQXhCRCxFQXlCQztBQUNDLElBQUEsSUFBSSxFQUFDLHFCQUROO0FBRUMsSUFBQSxPQUFPLEVBQUVKO0FBRlYsSUF6QkQsRUE2QkM7QUFBTSxJQUFBLElBQUksRUFBQyxlQUFYO0FBQTJCLElBQUEsT0FBTyxFQUFFUztBQUFwQyxJQTdCRCxFQStCQztBQUNDLElBQUEsdUJBQXVCLEVBQUU7QUFDeEJDLE1BQUFBLE1BQU0sRUFBRUo7QUFEZ0I7QUFEMUIsSUEvQkQsRUFvQ0M7QUFBUSxJQUFBLEdBQUcsRUFBQztBQUFaLElBcENELEVBcUNDO0FBQ0MsSUFBQSx1QkFBdUIsRUFBRTtBQUN4QkksTUFBQUEsTUFBTSxFQUFFUjtBQURnQjtBQUQxQixJQXJDRCxFQTBDQztBQUFNLElBQUEsSUFBSSxFQUFDLHNCQUFYO0FBQWtDLElBQUEsR0FBRyxFQUFDO0FBQXRDLElBMUNELENBREQ7QUE4Q0EsQ0ExREQ7O0FBNERBTCxJQUFJLENBQUNjLFNBQUwsR0FBaUI7QUFDaEJiLEVBQUFBLFVBQVUsRUFBRUYsU0FBUyxDQUFDZ0IsTUFBVixDQUFpQkMsVUFEYjtBQUVoQmQsRUFBQUEsU0FBUyxFQUFFSCxTQUFTLENBQUNrQixNQUFWLENBQWlCRCxVQUZaO0FBR2hCYixFQUFBQSxXQUFXLEVBQUVKLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJDLFVBSGQ7QUFJaEJaLEVBQUFBLEdBQUcsRUFBRUwsU0FBUyxDQUFDZ0IsTUFBVixDQUFpQkMsVUFKTjtBQUtoQlgsRUFBQUEsZ0JBQWdCLEVBQUVOLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJDLFVBTG5CO0FBTWhCVixFQUFBQSxZQUFZLEVBQUVQLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJDLFVBTmY7QUFPaEJULEVBQUFBLEtBQUssRUFBRVIsU0FBUyxDQUFDZ0IsTUFBVixDQUFpQkMsVUFQUjtBQVFoQlIsRUFBQUEsYUFBYSxFQUFFVCxTQUFTLENBQUNnQixNQUFWLENBQWlCQztBQVJoQixDQUFqQjtlQVdlaEIsSSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpXG5jb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKVxuXG5jb25zdCBIZWFkID0gKHtcblx0YXJ0aWNsZVVSTCxcblx0ZGF0YUxheWVyLFxuXHRkZXNjcmlwdGlvbixcblx0ZG9pLFxuXHRnb29nbGVUYWdNYW5hZ2VyLFxuXHRpbW1lcnNpdmVVUkwsXG5cdHRpdGxlLFxuXHR0d2l0dGVySGFuZGxlLFxufSkgPT4ge1xuXHRjb25zdCBkYXRhTGF5ZXJTY3JpcHQgPSBgZGF0YUxheWVyID0ke0pTT04uc3RyaW5naWZ5KGRhdGFMYXllcil9O2Bcblx0Y29uc3QgaW1hZ2VVUkwgPSBgJHtpbW1lcnNpdmVVUkx9JHtkb2l9L3B1YmxpYy9pbWcvJHtkb2l9LmpwZ2Bcblx0cmV0dXJuIChcblx0XHQ8aGVhZD5cblx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG5cdFx0XHQ8bWV0YVxuXHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgc2hyaW5rLXRvLWZpdD1ub1wiXG5cdFx0XHQvPlxuXG5cdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cblx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0PG1ldGFcblx0XHRcdFx0cHJvcGVydHk9XCJvZzp1cmxcIlxuXHRcdFx0XHRjb250ZW50PXtgJHthcnRpY2xlVVJMfSR7ZG9pfWB9XG5cdFx0XHQvPlxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVVJMfSAvPlxuXG5cdFx0XHQ8bWV0YVxuXHRcdFx0XHRuYW1lPVwidHdpdHRlcjpjYXJkXCJcblx0XHRcdFx0Y29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIlxuXHRcdFx0Lz5cblx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXt0d2l0dGVySGFuZGxlfSAvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cblx0XHRcdDxtZXRhXG5cdFx0XHRcdG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcblx0XHRcdFx0Y29udGVudD17ZGVzY3JpcHRpb259XG5cdFx0XHQvPlxuXHRcdFx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtpbWFnZVVSTH0gLz5cblxuXHRcdFx0PHNjcmlwdFxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdF9faHRtbDogZGF0YUxheWVyU2NyaXB0LFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxzY3JpcHQgc3JjPVwiLy9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMi4yLjQvanF1ZXJ5Lm1pbi5qc1wiIC8+XG5cdFx0XHQ8c2NyaXB0XG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOiBnb29nbGVUYWdNYW5hZ2VyLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxsaW5rIGhyZWY9XCJwdWJsaWMvY3NzL2ZvbnRzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdDwvaGVhZD5cblx0KVxufVxuXG5IZWFkLnByb3BUeXBlcyA9IHtcblx0YXJ0aWNsZVVSTDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkYXRhTGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblx0ZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZG9pOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGdvb2dsZVRhZ01hbmFnZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aW1tZXJzaXZlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHR3aXR0ZXJIYW5kbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIl19
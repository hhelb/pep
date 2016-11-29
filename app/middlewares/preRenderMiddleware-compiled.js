"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultFetchData = function defaultFetchData() {
  return Promise.resolve();
};

function preRenderMiddleware(_ref) {
  var routes = _ref.routes,
      location = _ref.location,
      params = _ref.params;

  var matchedRoute = routes[routes.length - 1];
  var fetchDataHandler = matchedRoute.fetchData || defaultFetchData;
  return fetchDataHandler(params);
}

exports.default = preRenderMiddleware;

//# sourceMappingURL=preRenderMiddleware-compiled.js.map
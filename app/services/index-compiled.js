'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _topics = require('./topics');

Object.defineProperty(exports, 'voteService', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_topics).default;
  }
});

var _fiches = require('./fiches');

Object.defineProperty(exports, 'ficheService', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fiches).default;
  }
});

var _fiche = require('./fiche');

Object.defineProperty(exports, 'OneFicheService', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fiche).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//# sourceMappingURL=index-compiled.js.map
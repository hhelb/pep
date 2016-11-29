'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playlists = exports.fiches = exports.users = exports.topics = undefined;

var _topics = require('./topics');

var _topics2 = _interopRequireDefault(_topics);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _fiches = require('./fiches');

var _fiches2 = _interopRequireDefault(_fiches);

var _playlists = require('./playlists');

var _playlists2 = _interopRequireDefault(_playlists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.topics = _topics2.default;
exports.users = _users2.default;
exports.fiches = _fiches2.default;
exports.playlists = _playlists2.default;
exports.default = {
  topics: _topics2.default,
  users: _users2.default,
  fiches: _fiches2.default,
  playlists: _playlists2.default
};

//# sourceMappingURL=index-compiled.js.map
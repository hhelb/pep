'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.all = all;
exports.add = add;
exports.remove = remove;
exports.update = update;

var _fiches = require('../models/fiches');

var _fiches2 = _interopRequireDefault(_fiches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List
 */
function all(req, res) {
    _fiches2.default.find({}).exec(function (err, fiches) {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }

        return res.json(fiches);
    });
} /**
   * Created by hasj on 21/11/2016.
   */
function add(req, res) {
    var fiche = new _fiches2.default({
        id: req.body.id,
        name: req.body.name,
        text: req.body.text
    });
    return fiche.save(function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send("nope");
        }
        return res.status(200).send('fiche created');
    });
}

function remove(req, res) {
    var query = { id: req.params.id };
    _fiches2.default.findOneAndRemove(query, function (err) {
        if (err) {
            console.log("error " + err);
            return res.status(500).send('We failed to delete for some reason');
        }
        return res.status(200).send("fiche removed successfully");
    });
}
function update(req, res) {
    var query = { id: req.params.id };
    _fiches2.default.findOneAndUpdate(query, req.body, function (err) {
        if (err) {
            return res.status(500).send('Failed to update the data of ' + query.id);
        }
        return res.status(200).send('Fiche update');
    });
}

exports.default = {
    all: all,
    add: add,
    remove: remove,
    update: update
};

//# sourceMappingURL=fiches-compiled.js.map
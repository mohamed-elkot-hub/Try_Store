"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
class AbstractRepository {
    _model;
    constructor(_model) {
        this._model = _model;
    }
    get model() {
        return this._model;
    }
    async count(filter) {
        return this._model.countDocuments(filter);
    }
    async create(item) {
        const doc = new this._model(item);
        return doc.save();
    }
    async getOne(filter, projection, options) {
        return this._model.findOne(filter, projection, options);
    }
    async getAll(filter = {}, projection, options) {
        return this._model.find(filter, projection, options);
    }
    async updateOne(filter, update) {
        return this._model.updateOne(filter, update);
    }
    async updateAll(filter, update) {
        return this._model.updateMany(filter, update);
    }
    async deleteOne(filter) {
        return this._model.deleteOne(filter);
    }
    async aggregate(pipeline) {
        return this._model.aggregate(pipeline);
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract.repository.js.map
import {
  Model,
  PipelineStage,
  ProjectionType,
  QueryFilter,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';

export abstract class AbstractRepository<T> {
  constructor(private _model: Model<T>) {}

  get model() {
    return this._model;
  }

  async count(filter: QueryFilter<T>) {
    return this._model.countDocuments(filter);
  }

  async create(item: Partial<T>) {
    const doc = new this._model(item);
    return doc.save();
  }

  async getOne(
    filter: QueryFilter<T>,
    projection?: ProjectionType<T>,
    options?: QueryOptions,
  ) {
    return this._model.findOne(filter, projection, options);
  }

  async getAll(
    filter: QueryFilter<T> = {},
    projection?: ProjectionType<T>,
    options?: QueryOptions,
  ) {
    return this._model.find(filter, projection, options);
  }

  async updateOne(filter: QueryFilter<T>, update: UpdateQuery<T>) {
    return this._model.updateOne(filter, update);
  }

  async updateAll(filter: QueryFilter<T>, update: UpdateQuery<T>) {
    return this._model.updateMany(filter, update);
  }

  async deleteOne(filter: QueryFilter<T>) {
    return this._model.deleteOne(filter);
  }

  async aggregate(pipeline: PipelineStage[]) {
    return this._model.aggregate(pipeline);
  }
}

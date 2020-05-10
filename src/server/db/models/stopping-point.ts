import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// @ts-ignore: ObjectId exists on Schema, but TS send error
const ObjectId = Schema.ObjectId;

const stoppingPointModelName = 'StoppingPoint';

export const StoppingPointSchema = new Schema({
    id: ObjectId,
    parentId: ObjectId,
    name: String,
    startPoint: String,
    destinationPoint: String,
    dateFrom: Date,
    dateTo: Date,
});

export const StoppingPointModel = mongoose.model(
    stoppingPointModelName,
    StoppingPointSchema
);

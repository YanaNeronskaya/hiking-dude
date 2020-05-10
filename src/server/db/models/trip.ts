// @ts-nocheck
import mongoose from 'mongoose';
import { StoppingPointSchema } from './stopping-point';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tripModelName = 'Trip';

export const TripSchema = new Schema({
    id: ObjectId,
    name: String,
    country: String,
    city: String,
    totalPeriodDays: Number,
    stoppingPoints: [StoppingPointSchema],
});

export const TripModel = mongoose.model(tripModelName, TripSchema);

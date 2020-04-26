// @ts-nocheck
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tripModelName = 'Trips';

const StoppingPointSchema = new Schema({
    id: ObjectId,
    name: String,
    from: String,
    to: String,
    dateFrom: Date,
    dateTo: Date,
});

export const TripSchema = new Schema({
    id: ObjectId,
    name: String,
    userId: ObjectId,
    residence: String,
    totalPeriodDays: Number,
    stoppingPoints: [StoppingPointSchema],
});

export const TravelModel = mongoose.model(tripModelName, TripSchema);

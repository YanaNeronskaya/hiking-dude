// @ts-nocheck
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

import { TripSchema } from './trip';

const userModelName = 'Users';

const UserSchema = new Schema({
    id: ObjectId,
    name: String,
    surname: String,
    age: Number,
    address: String,
    trips: [TripSchema],
});

export const UsersModel = mongoose.model(userModelName, UserSchema);

// @ts-nocheck

import Koa from 'koa';
import mongoose from 'mongoose';
import { UsersModel } from './../models/user';

const url = 'mongodb://localhost:27017/hikingDude';

mongoose.connect(url, { useNewUrlParser: true });

export const getUserDb = async id => await UsersModel.findOne({ _id: id });

export const addNewUser = (ctx: Koa.Context) => {
    console.log(ctx);

    const newUser = new UsersModel({
        name: 'Vasiliy',
        surname: 'Jhons',
        trips: [{ name: 'Trip 1' }],
    });

    newUser.save(function(err, user) {
        if (err) return console.error(err);
        console.log(user);
    });
};

import mongoose from 'mongoose';

//const url = 'mongodb://Admin:<hikingAdmin345951>@hikingdude-shard-00-00-vzz28.mongodb.net:27017,hikingdude-shard-00-01-vzz28.mongodb.net:27017,hikingdude-shard-00-02-vzz28.mongodb.net:27017/test?ssl=true&replicaSet=HikingDude-shard-0&authSource=admin&retryWrites=true&w=majority\n';
const url =
    'mongodb+srv://@hikingdude-vzz28.mongodb.net/test?retryWrites=true&w=majority';

export const connectDb = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            user: 'Owner',
            pass: 'Owner1345951',
            dbName: 'HikingDude',
            serverSelectionTimeoutMS: 3000,
        })
        .catch((err: { reason: string }) => {
            console.log('Error with connection: ', err.reason);
        });
};

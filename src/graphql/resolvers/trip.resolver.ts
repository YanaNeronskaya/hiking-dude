import { TripModel } from '../../server/db/models/trip';

export const tripResolver = {
    trips: (parentValue: any, args: any, req: any) => {
        return new Promise((resolve, reject) => {
            TripModel.find({}, function(err: any, docs: any) {
                if (!err) {
                    resolve(docs);
                } else {
                    reject(err);
                }
            });
        });
    },
};

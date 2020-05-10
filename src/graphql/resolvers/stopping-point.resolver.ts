import { StoppingPointModel } from '../../server/db/models/stopping-point';
import { customScalarResolver } from './common.resolver';

export const stoppingPointResolver = {
    ...customScalarResolver,
    stoppingPoints: (parentValue: any, { parentId }: any, req: any) => {
        return new Promise((resolve, reject) => {
            StoppingPointModel.find({ parentId }, function(
                err: any,
                docs: any
            ) {
                if (!err) {
                    resolve(docs);
                } else {
                    reject(err);
                }
            });
        });
    },
};

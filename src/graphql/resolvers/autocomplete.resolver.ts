import fetch from 'node-fetch';
import { tripAdvisorHeaders } from '../constants';

export const autocompleteResolver = {
    autocompleteResults: async (parentValue: any, { str }: any, req: any) => {
        const results = await fetch(
            `https://tripadvisor1.p.rapidapi.com/locations/auto-complete?query=${str}`,
            {
                headers: tripAdvisorHeaders,
            }
        ).then(res => res.json());

        return results.data.reduce((resArr: any, currentResultValue: any) => {
            const resObject = currentResultValue['result_object'];
            if (currentResultValue['result_type'] === 'geos' && resObject) {
                resArr.push({
                    locationId: resObject['location_id'] || null,
                    name: resObject.name || null,
                    locationString: resObject['location_string'] || null,
                });
            }
            return resArr;
        }, []);
    },
};

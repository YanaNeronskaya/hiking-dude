import fetch from 'node-fetch';
import { tripAdvisorHeaders } from '../constants';

export const locationResolver = {
    location: async (parentValue: any, { id, str }: any, req: any) => {
        const results = await fetch(
            `https://tripadvisor1.p.rapidapi.com/locations/search?query=${str}&location_id=${id}`,
            {
                headers: tripAdvisorHeaders,
            }
        ).then(res => res.json());

        const res = results.data.reduce(
            (resArr: any, currentResultValue: any) => {
                const resObject = currentResultValue['result_object'];
                if (currentResultValue['result_type'] === 'geos' && resObject) {
                    resArr.push({
                        locationId: resObject['location_id'] || null,
                        name: resObject.name || null,
                        locationString: resObject['location_string'] || null,
                        description: resObject['geo_description'] || null,
                        //geolocation: {
                        //latitude: resObject.latitude,
                        //longitude: resObject.longitude,
                        //},
                        //photo: resObject.photo,
                        //awards: resObject.awards,
                        //categoryCounts: resObject['category_counts'],
                    });
                }
                return resArr;
            },
            []
        );

        return res[0];
    },
};

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { Header } from '../../organisms/header/header.component';
import { getAllTrips } from '../../../graphql/queries/trips';
import { Loader } from '../../organisms/loader/loader.component';

// @ts-ignore
import css from './trips-collections.module.scss';
import { SearchModalMobile } from '../../organisms/search-modal-mobile/search-modal-mobile.component';
import { useLocation, useParams } from 'react-router-dom';
import { getAutocompleteResult } from '../../../graphql/queries/autocomplete';
import { getLocation } from '../../../graphql/queries/location';

interface tripsData {
    location: any;
}

type TripsCollectionsComponentProps = {};

export const TripsCollectionsComponent: React.FC<TripsCollectionsComponentProps> = () => {
    //const { loading, data } = useQuery<tripsData>(getAllTrips);
    const { id } = useParams();
    const { state } = useLocation();
    const [searchValue, setSearchValue] = useState(
        (state && state.str) || undefined
    );
    const [placeDescription, updatePlaceDescription] = useState();
    const [isSearchModalOpened, toggleSearchModal] = useState(false);

    const [loadLocation, { loading }] = useLazyQuery<tripsData>(getLocation, {
        onCompleted: result => {
            setSearchValue(result.location.locationString);
            updatePlaceDescription(result.location.description);
        },
    });

    useEffect(() => {
        toggleSearchModal(false);

        if (id) {
            loadLocation({
                variables: {
                    id: id,
                    str: state.str,
                },
            });
        }
    }, [id, state]);

    if (loading) return <Loader />;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hiking-dude | Collections</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <div className={css.mainContainer}>
                <Header />
                <input
                    type="text"
                    name="search"
                    placeholder="location"
                    className={css.inputField}
                    value={searchValue}
                    onClick={() => toggleSearchModal(true)}
                    required
                />
                <SearchModalMobile
                    isOpen={isSearchModalOpened}
                    onClose={() => toggleSearchModal(false)}
                />
                <div className={css.pageContent}>
                    {placeDescription && (
                        <div className={css.placeDescription}>
                            {placeDescription}
                        </div>
                    )}
                    {/*{data &&*/}
                    {/*    data.trips.map(trip => (*/}
                    {/*        <div key={trip._id}>*/}
                    {/*            <div>{trip.name}</div>*/}
                    {/*            <div>{trip.country}</div>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                </div>
            </div>
        </>
    );
};

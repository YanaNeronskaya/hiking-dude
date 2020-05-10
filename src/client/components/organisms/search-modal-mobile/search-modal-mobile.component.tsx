import React, { useEffect, useState } from 'react';
import { useHistory, generatePath } from 'react-router';
import { useLazyQuery } from '@apollo/react-hooks';
import { Modal } from '../../base/modal/modal.component';
import { getAutocompleteResult } from '../../../graphql/queries/autocomplete';

// @ts-ignore
import Arrow from '../../../toCDN/arrow.svg';
// @ts-ignore
import SearchIcon from '../../../toCDN/search.svg';
// @ts-ignore
import css from './search-modal-mobile.module.scss';
import { BASE_ROUTES } from '../../../../constants/routes';

interface autocompleteData {
    data: any;
    autocompleteResults?: any;
}

type SearchModalMobileComponentProps = {
    isOpen: boolean;
    onClose: Function;
};

export const SearchModalMobile: React.FC<SearchModalMobileComponentProps> = ({
    isOpen,
    onClose,
}) => {
    let history = useHistory();
    const [isModalOpen, toggleModalState] = useState(isOpen);
    const [searchValue, toggleSearchValue] = useState();
    const [suggestions, changeSuggestions] = useState([]);
    const [loadAutocomplete, {}] = useLazyQuery<autocompleteData>(
        getAutocompleteResult,
        {
            variables: { str: searchValue },
            onCompleted: result =>
                changeSuggestions(result.autocompleteResults),
        }
    );

    useEffect(()=>{
        toggleModalState(isOpen);
    }, [isOpen])

    useEffect(() => {
        if (searchValue && searchValue.length >= 3) {
            loadAutocomplete();
        }
    }, [searchValue]);

    const handleInputSearchChange = (value: string) => toggleSearchValue(value);
    const handleSearchSubmit = (locationId?: string, search?: string) => () => {
        const resultLocationId = locationId || suggestions[0].locationId;
        const resultSearchStr = search || suggestions[0].locationString;


        if (resultLocationId && resultSearchStr) {
            const generatedPath = generatePath(BASE_ROUTES.TRIPS_COLLECTIONS_LOCATION, {
                id: resultLocationId,
            })

            toggleModalState(false);

            history.push({
                pathname: generatedPath,
                state: {
                    str: resultSearchStr
                }
            });
        }
    };

    return (
        <Modal isOpen={isModalOpen}>
            <div className={css.searchContentMobileContainer}>
                <div className={css.searchBlock}>
                    <button className={css.btnBack} onClick={onClose}>
                        <Arrow
                            className={css.searchIcon}
                            height={25}
                            width={30}
                        />
                    </button>
                    <input
                        className={css.searchField}
                        placeholder="location"
                        value={searchValue}
                        onChange={e => handleInputSearchChange(e.target.value)}
                    />
                    <button
                        className={css.btnSearch}
                        onClick={handleSearchSubmit()}
                    >
                        <SearchIcon
                            className={css.searchIcon}
                            height={25}
                            width={25}
                        />
                    </button>
                </div>
                {suggestions.length ? (
                    <div className={css.autocompleteWrapper}>
                        {suggestions.map(suggestion => (
                            <div
                                key={suggestion.locationId}
                                className={css.autocompletePosition}
                                onClick={handleSearchSubmit(
                                    suggestion.locationId,
                                    suggestion.locationString
                                )}
                            >
                                {suggestion.locationString}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </Modal>
    );
};

import {useState} from 'react';
import Services from '../services';

export function useSearchState() {
    const [searchData, setSearchData] = useState([]);
    const [query, setQuery] = useState('');
    
    if (query.length > 0) {
        Services.searchFavorite(query)
        .then(data => {
            setSearchData(data);
        })
        .catch(error => {
            setSearchData([]);
        })
    }
    
    return [searchData, setQuery]
}


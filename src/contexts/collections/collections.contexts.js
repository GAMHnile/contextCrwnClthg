import {createContext} from 'react';
import SHOP_DATA from './shop.data';
import {collectionsForPreview} from './collections.utils'

const CollectionsContext = createContext({
    SHOP_DATA,
    collectionsForPreview: collectionsForPreview(SHOP_DATA)
});


export default CollectionsContext;
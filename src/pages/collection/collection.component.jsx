import React,{useContext} from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.contexts';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const {SHOP_DATA} = useContext(CollectionsContext);
  const collectionsMap = SHOP_DATA;
  const collection = collectionsMap[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


export default CollectionPage;

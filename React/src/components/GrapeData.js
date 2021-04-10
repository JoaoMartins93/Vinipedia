import React from 'react';
import GrapeDetail from './GrapeDetail';
import InfiniteScroll from 'react-infinite-scroll-component';

const GrapeData = ({
  grapes = [],
  grape = [],
  detailFetch,
  loadMore,
  hasMore,
}) => {
  return (
    <div id='grape-container-div' className='grape-container'>
      <GrapeDetail grape={grape} detailFetch={detailFetch} />

      <InfiniteScroll
        className='infinite-scroller'
        dataLength={grapes.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 className='loader-text'>A carregar mais dados...</h4>}
        scrollableTarget='grape-container-div'
      >
        {grapes.map((grape) => {
          return (
            <div
              className='grape-item'
              onClick={detailFetch}
              data-pk={grape.pk}
              key={grape.pk}
            >
              <div className='grape-item-image' data-pk={grape.pk}>
                <span className='helper' data-pk={grape.pk}></span>
                <img src={grape.photo} alt='uvas' data-pk={grape.pk} />
              </div>
              <div className='grape-item-name' data-pk={grape.pk}>
                <span className='helper' data-pk={grape.pk}></span>
                <p data-pk={grape.pk}>{grape.name}</p>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default GrapeData;

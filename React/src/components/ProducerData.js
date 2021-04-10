import React from 'react';
import ProducerDetail from '../components/ProducerDetail';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProducerData = ({
  producers = [],
  producer = [],
  getDetail,
  loadMore,
  hasMore,
}) => {
  return (
    <div id='producer-container-div' className='producer-container'>
      <ProducerDetail producer={producer} />

      <InfiniteScroll
        className='infinite-scroller'
        dataLength={producers.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 className='loader-text'>A carregar mais dados...</h4>}
        scrollableTarget='producer-container-div'
      >
        {producers.map((p) => {
          return (
            <div
              className='producer-item'
              onClick={getDetail}
              data-pk={p.pk}
              key={p.pk}
            >
              <div className='producer-item-image' data-pk={p.pk}>
                <span className='helper' data-pk={p.pk}></span>
                <img
                  src={p.producerpictures[0].pathname}
                  alt='logo'
                  data-pk={p.pk}
                />
              </div>
              <div className='producer-item-name' data-pk={p.pk}>
                <span className='helper' data-pk={p.pk}></span>
                <p data-pk={p.pk}>{p.name}</p>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ProducerData;

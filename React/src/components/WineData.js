import React from 'react';
import WineDetail from './WineDetail';
import InfiniteScroll from 'react-infinite-scroll-component';

const WineData = ({ wines = [], wine = [], loadDetail, loadMore, hasMore }) => {
  // ajustar o tipo de vinho para maiúsculas e dispor na vertical
  function TextEdit(text) {
    let textCaps = text.toUpperCase();
    let verticalText = '';
    var i;
    for (i = 0; i < textCaps.length; i++) {
      verticalText += textCaps[i] + '\n';
    }
    return verticalText;
  }

  return (
    <div id='wine-container-div' className='wine-container'>
      <WineDetail wine={wine} />

      <InfiniteScroll
        className='infinite-scroller'
        dataLength={wines.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 className='loader-text'>A carregar mais dados...</h4>}
        scrollableTarget='wine-container-div'
      >
        {wines.map((wine) => {
          return (
            <div
              className='wine-item'
              data-pk={wine.pk}
              key={wine.pk}
              onClick={loadDetail}
            >
              <div className='item-image' data-pk={wine.pk}>
                <span className='helper' data-pk={wine.pk}></span>
                <img
                  className='wine-img'
                  src={wine.photo}
                  alt='garrafa'
                  data-pk={wine.pk}
                />
              </div>
              <div className={'item-type ' + wine.type} data-pk={wine.pk}>
                <p data-pk={wine.pk}>{TextEdit(wine.type)}</p>
              </div>
              <div className='item-name' data-pk={wine.pk}>
                <span className='helper' data-pk={wine.pk}></span>
                <p data-pk={wine.pk}>{wine.name}</p>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default WineData;

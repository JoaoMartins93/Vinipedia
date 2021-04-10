const WineDetail = ({ wine = [] }) => {
  // fechar a vista em detalhe
  const WineDetailCloser = () => {
    document.getElementsByClassName('wine-detail')[0].style.display = 'none';
  };

  if (!wine || wine.length === 0) {
    return <div className='wine-detail'></div>;
  } else {
    return (
      <div className='wine-detail'>
        <div className='wd-image'>
          <span className='helper'></span>
          <img src={wine.photo} alt='garrafa' />
        </div>
        <div className='wd-name'>
          <span className='helper'></span>
          <p>{wine.name}</p>
        </div>
        <div className='wd-description'>
          <p className='wd-producer'>
            <b>Produtor:</b> {wine.producer.name}
          </p>
          <p className='wd-type'>
            <b>Tipo:</b> {wine.type}
          </p>
          <p className='wd-region'>
            <b>Região:</b> {wine.region}
          </p>
          <p className='wd-year'>
            <b>Ano:</b> {wine.year}
          </p>
          <p className='wd-grapes'>
            <b>Casta(s):</b>{' '}
            {wine.grapes
              .map((grape) => {
                return grape.name;
              })
              .join(', ')}
          </p>
          <p className='wd-alcohol-level'>
            <b>Teor Alcoólico: </b> {wine.alcool_lvl}
          </p>
          <p className='wd-price'>
            <b>Preço:</b> {wine.price}
          </p>
          <p className='description-text'>
            <b>Descrição:</b> {wine.description}
          </p>
        </div>
        <div className='close-btn1'>
          <button onClick={WineDetailCloser}>X</button>
        </div>
      </div>
    );
  }
};
export default WineDetail;

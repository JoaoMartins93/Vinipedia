const GrapeDetail = ({ grape = [] }) => {
  const GrapeDetailCloser = () => {
    document.getElementsByClassName('grape-detail')[0].style.display = 'none';
  };

  if (!grape || grape.length === 0) {
    return <div className='grape-detail'></div>;
  } else {
    return (
      <div className='grape-detail'>
        <div className='gd-image'>
          <span className='helper'></span>
          <img src={grape.photo} alt='garrafa' />
        </div>
        <div className='gd-name'>
          <span className='helper'></span>
          <p>{grape.name}</p>
        </div>
        <div className='gd-description'>
          <div className='gd-description-text'>
            <p>
              <b>Descrição: </b>
              {grape.description}
            </p>
          </div>
        </div>
        <div className='aroma-container'>
          <p>
            <b>Aromas</b>
          </p>
          {grape.aromapictures.map((aroma) => {
            return (
              <div className='aroma-frame'>
                <span className='helper'></span>
                <img src={aroma.pathname} alt='aroma' className='aroma-img' />
              </div>
            );
          })}
        </div>

        <div className='close-btn1'>
          <button onClick={GrapeDetailCloser}>X</button>
        </div>
      </div>
    );
  }
};

export default GrapeDetail;

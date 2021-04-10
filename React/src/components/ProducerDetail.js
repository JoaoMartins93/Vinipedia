const ProducerDetail = ({ producer = [] }) => {
  const DetailCloser = () => {
    document.getElementsByClassName('producer-detail')[0].style.display =
      'none';
  };

  if (!producer || producer.length === 0) {
    return (
      <div className='producer-detail'>
        <div className='close-btn1'>
          <button onClick={DetailCloser}>X</button>
        </div>
      </div>
    );
  }

  return (
    <div className='producer-detail'>
      <div className='pd-image'>
        <span className='helper'></span>
        <img src={producer.producerpictures[0].pathname} alt='logo' />
      </div>
      <div className='pd-name'>
        <span className='helper'></span>
        <p>{producer.name}</p>
      </div>
      <div className='pd-description'>
        <div className='pd-address'>
          <p>
            <b>Morada: </b>
            {producer.address}
          </p>
        </div>
        <div className='pd-website'>
          <p>
            <b>Website: </b>
            {producer.website}
          </p>
        </div>
        <div className='pd-description-text'>
          <p>
            <b>Descrição: </b>
            {producer.description}
          </p>
        </div>
      </div>
      <div className='close-btn1'>
        <button onClick={DetailCloser}>X</button>
      </div>
    </div>
  );
};

export default ProducerDetail;

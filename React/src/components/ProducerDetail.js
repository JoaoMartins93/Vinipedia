const ProducerDetail = ({ producer = [] }) => {
  // função para fechar o pop-up
  const DetailCloser = () => {
    document.getElementsByClassName('producer-detail')[0].style.display =
      'none';
  };

  // função para abrir novas fotografias
  const changePhoto = (event) => {
    let source = event.target.getAttribute('src');
    document
      .getElementById('producer-detail-main-picture')
      .setAttribute('src', source);
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
        <img
          id='producer-detail-main-picture'
          src={producer.producerpictures[0].pathname}
          alt='logo'
        />
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
      <div className='producerpictures-container'>
        <p>
          <b>Fotografias</b>
        </p>
        {producer.producerpictures.map((picture) => {
          return (
            <div className='producerpictures-frame'>
              <span className='helper'></span>
              <img
                src={picture.pathname}
                alt='fotografia de produtor'
                className='producerpictures-img'
                onClick={changePhoto}
              />
            </div>
          );
        })}
      </div>
      <div className='close-btn1'>
        <button onClick={DetailCloser}>X</button>
      </div>
    </div>
  );
};

export default ProducerDetail;

import { GoSearch } from 'react-icons/go';

const ProducerSearchTabs = ({ searchQuery }) => {
  return (
    <div className='producer-search-tabs'>
      <div className='producer-search-bar'>
        <input
          id='producer-search'
          className='producer-search-field'
          type='text'
          placeholder='Pesquisa por nome'
        />
        <button className='producer-search-button' onClick={searchQuery}>
          <GoSearch />
        </button>
      </div>
    </div>
  );
};

export default ProducerSearchTabs;

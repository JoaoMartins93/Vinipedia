import { GoSearch } from 'react-icons/go';

const GrapeSearchTabs = ({ searchQuery }) => {
  return (
    <div className='grape-search-tabs'>
      <div className='grape-search-bar'>
        <input
          id='grape-search'
          className='grape-search-field'
          type='text'
          placeholder='Pesquisa por nome'
        />
        <button className='grape-search-button' onClick={searchQuery}>
          <GoSearch />
        </button>
      </div>
    </div>
  );
};

export default GrapeSearchTabs;

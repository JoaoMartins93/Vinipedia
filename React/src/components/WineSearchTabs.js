import { GoSearch } from 'react-icons/go';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { useState } from 'react';

const WineSearchTabs = ({ searchQuery }) => {
  // use states
  const [typeIsOpen, setTypeIsOpen] = useState(false);
  const [regionIsOpen, setRegionIsOpen] = useState(false);

  // funções para abrir e fechar os menus dropdown
  const TypeFilterTabOpener = () => {
    if (!typeIsOpen) {
      document.getElementsByClassName(
        'wine-type-filter-dropdown'
      )[0].style.display = 'block';
      document.getElementById('icon-change1').style.display = 'none';
      document.getElementById('icon-change2').style.display = 'block';
      setTypeIsOpen(true);
      if (regionIsOpen) {
        document.getElementsByClassName(
          'wine-region-filter-dropdown'
        )[0].style.display = 'none';
        document.getElementById('icon-change3').style.display = 'block';
        document.getElementById('icon-change4').style.display = 'none';
        setRegionIsOpen(false);
      }
    } else {
      document.getElementsByClassName(
        'wine-type-filter-dropdown'
      )[0].style.display = 'none';
      document.getElementById('icon-change1').style.display = 'block';
      document.getElementById('icon-change2').style.display = 'none';
      setTypeIsOpen(false);
    }
  };

  const RegionFilterTabOpener = () => {
    if (!regionIsOpen) {
      document.getElementsByClassName(
        'wine-region-filter-dropdown'
      )[0].style.display = 'block';
      document.getElementById('icon-change3').style.display = 'none';
      document.getElementById('icon-change4').style.display = 'block';
      setRegionIsOpen(true);
      if (typeIsOpen) {
        document.getElementsByClassName(
          'wine-type-filter-dropdown'
        )[0].style.display = 'none';
        document.getElementById('icon-change1').style.display = 'block';
        document.getElementById('icon-change2').style.display = 'none';
        setTypeIsOpen(false);
      }
    } else {
      document.getElementsByClassName(
        'wine-region-filter-dropdown'
      )[0].style.display = 'none';
      document.getElementById('icon-change3').style.display = 'block';
      document.getElementById('icon-change4').style.display = 'none';
      setRegionIsOpen(false);
    }
  };

  return (
    <div className='wine-search-tabs'>
      <div className='wine-search-bar'>
        <input
          id='wine-search'
          className='wine-search-field'
          type='text'
          placeholder='Pesquisa por nome, casta, produtor...'
        />
        <button className='wine-search-button' onClick={searchQuery}>
          <GoSearch />
        </button>
      </div>
      <div className='wine-filters'>
        <div className='wine-type-filter' onClick={TypeFilterTabOpener}>
          <p id='icon-change1'>
            Tipologias <BsChevronCompactDown />
          </p>
          <p id='icon-change2'>
            Tipologias <BsChevronCompactUp />
          </p>
        </div>
        <div className='wine-region-filter' onClick={RegionFilterTabOpener}>
          <p id='icon-change3'>
            Regiões <BsChevronCompactDown />
          </p>
          <p id='icon-change4'>
            Regiões <BsChevronCompactUp />
          </p>
        </div>
      </div>
      <div className='wine-order-by'>
        <div className='wine-order-by-bar'>
          <p>
            Ordenar por <BsChevronCompactDown />
            {/* não houve tempo para implementar :( */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WineSearchTabs;

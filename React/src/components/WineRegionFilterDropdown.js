// filtros por região

const WineRegionFilterDropdown = ({ filterPressed }) => {
  return (
    <div className='wine-region-filter-dropdown'>
      <div className='cover2' />

      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='vinhos-verdes'
          name='region'
          value='Vinhos+Verdes'
          onInput={filterPressed}
        />
        <label for='vinhos-verdes'>Vinhos Verdes</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='tras-os-montes'
          name='region'
          value='Trás-Os-Montes'
          onInput={filterPressed}
        />
        <label for='tras-os-montes'>Trás-os-Montes</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='douro'
          name='region'
          value='Douro'
          onInput={filterPressed}
        />
        <label for='douro'>Douro</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='bairrada'
          name='region'
          value='Bairrada'
          onInput={filterPressed}
        />
        <label for='bairrada'>Bairrada</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='dao'
          name='region'
          value='Dão'
          onInput={filterPressed}
        />
        <label id='dao-label' for='dao'>
          Dão
        </label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='beiras'
          name='region'
          value='Beiras'
          onInput={filterPressed}
        />
        <label for='beiras'>Beiras</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='lisboa'
          name='region'
          value='Lisboa'
          onInput={filterPressed}
        />
        <label for='lisboa'>Lisboa</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='tejo'
          name='region'
          value='Tejo'
          onInput={filterPressed}
        />
        <label for='tejo'>Tejo</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='sado'
          name='region'
          value='Terras+do+Sado'
          onInput={filterPressed}
        />
        <label for='sado'>Terras do Sado</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='alentejo'
          name='region'
          value='Alentejo'
          onInput={filterPressed}
        />
        <label for='alentejo'>Alentejo</label>
      </div>

      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='madeira'
          name='region'
          value='Madeira'
          onInput={filterPressed}
        />
        <label for='madeira'>Madeira</label>
      </div>
      <div className='wine-region-inputs'>
        <input
          type='radio'
          id='todas'
          name='region'
          value='todos'
          onInput={filterPressed}
        />
        <label for='todas'>Todas</label>
      </div>
    </div>
  );
};

export default WineRegionFilterDropdown;

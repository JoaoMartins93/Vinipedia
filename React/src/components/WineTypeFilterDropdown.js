// filtros por tipo de vinho

const WineTypeFilterDropdown = ({ filterPressed }) => {
  return (
    <div className='wine-type-filter-dropdown'>
      <div className='cover1' />
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='tinto'
          name='type'
          value='Tinto'
          onInput={filterPressed}
        />
        <label for='tinto'>Tinto</label>
      </div>
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='verde'
          name='type'
          value='Verde'
          onInput={filterPressed}
        />
        <label for='verde'>Verde</label>
      </div>
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='branco'
          name='type'
          value='Branco'
          onInput={filterPressed}
        />
        <label for='branco'>Branco</label>
      </div>
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='rose'
          name='type'
          value='Rosé'
          onInput={filterPressed}
        />
        <label for='rose'>Rosé</label>
      </div>
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='espumante'
          name='type'
          value='Espumante'
          onInput={filterPressed}
        />
        <label for='espumante'>Espumante</label>
      </div>
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='licoroso'
          name='type'
          value='Licoroso'
          onInput={filterPressed}
        />
        <label for='licoroso'>Licoroso</label>
      </div>
      <div className='wine-type-inputs'>
        <input
          type='radio'
          id='todos'
          name='type'
          value='todos'
          onInput={filterPressed}
        />
        <label for='todos'>Todos</label>
      </div>
    </div>
  );
};

export default WineTypeFilterDropdown;

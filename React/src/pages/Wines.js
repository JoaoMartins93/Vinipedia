import '../styles/Wines.scss';
import WineSearchTabs from '../components/WineSearchTabs';
import WineTypeFilterDropdown from '../components/WineTypeFilterDropdown';
import WineRegionFilterDropdown from '../components/WineRegionFilterDropdown';
import React, { useEffect, useState, useRef } from 'react';
import WineData from '../components/WineData';
import axios from '../api';

const Wines = () => {
  // variáveis e use states
  const list = 'wines/';
  const limit = '?limit=';
  const [querySet, setQuerySet] = useState('');
  const [total, setTotal] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [n, setN] = useState(8);
  const [wines, setWines] = useState([]);
  const [wine, setWine] = useState([]);
  const [url, setUrl] = useState(list);
  const [urlDetail, setUrlDetail] = useState(list);
  const initialRender = useRef(true);

  // use effects
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setWines(response.data.results);
      setTotal(response.data.count);
      console.log('Wines', response.data.results);
      return response;
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    // condição que impede que o use effect
    // 'dispare' ao renderizar a página
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      async function fetchDetail() {
        const response = await axios.get(urlDetail);
        setWine(response.data);
        console.log('Wine', response.data);
        return response;
      }

      fetchDetail();
    }
  }, [urlDetail]);

  // funções
  const filterPressed = (event) => {
    let filter = event.target.getAttribute('name');
    let query = event.target.getAttribute('value');
    setQuerySet(`&${filter}=${query}`);
    if (query === 'todos') {
      setUrl(list + limit + '100');
      setHasMore(false);
    } else {
      setUrl(list + limit + `100&${filter}=${query}`);
      setHasMore(false);
    }
  };

  const searchQuery = () => {
    let search = '?search=';
    let query = document.getElementById('wine-search').value;
    setQuerySet(search + query);
    setN(8);
    setHasMore(true);
    setUrl(list + search + query);
  };

  const loadMore = () => {
    if (n > total + 4 && hasMore === true) {
      setHasMore(false);
    } else {
      setUrl(list + querySet + limit + n);
      setN(n + 4);
    }
  };

  const loadDetail = (event) => {
    const id = event.target.dataset.pk;
    setUrlDetail(list + id);
    document.getElementsByClassName('wine-detail')[0].style.display = 'block';
  };

  return (
    <section className='wines'>
      <WineSearchTabs searchQuery={searchQuery} />

      <WineTypeFilterDropdown filterPressed={filterPressed} />
      <WineRegionFilterDropdown filterPressed={filterPressed} />

      <WineData
        wines={wines}
        wine={wine}
        loadDetail={loadDetail}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </section>
  );
};

export default Wines;

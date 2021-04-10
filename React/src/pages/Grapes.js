import GrapeSearchTabs from '../components/GrapeSearchTabs';
import '../styles/Grapes.scss';
import React, { useEffect, useState, useRef } from 'react';
import GrapeData from '../components/GrapeData';
import axios from '../api';

const Grapes = () => {
  // variáveis e use states
  const list = 'grapes/';
  const limit = '?limit=';
  const [querySet, setQuerySet] = useState('');
  const [total, setTotal] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [n, setN] = useState(8);
  const firstRenderr = useRef(true);
  const [grapes, setGrapes] = useState([]);
  const [grape, setGrape] = useState([]);
  const [url, setUrl] = useState(list);
  const [urlDetail, setUrlDetail] = useState(list);

  // use effects
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setGrapes(request.data.results);
      setTotal(request.data.count);
      console.log('Grapes', request.data.results);
      return request;
    }

    fetchData();
  }, [url]);

  useEffect(() => {
    if (firstRenderr.current) {
      firstRenderr.current = false;
    } else {
      async function fetchDetail() {
        const request = await axios.get(urlDetail);
        setGrape(request.data);
        console.log('Grape', request.data);
        return request;
      }

      fetchDetail();
    }
  }, [urlDetail]);

  // funções
  const loadMore = () => {
    if (n > total + 4) {
      setHasMore(false);
    } else {
      setUrl(list + querySet + limit + n);
      setN(n + 4);
    }
  };

  const searchQuery = () => {
    let search = '?search=';
    let query = document.getElementById('grape-search').value;
    setQuerySet(search + query);
    setN(8);
    setHasMore(true);
    setUrl(list + search + query);
  };

  const detailFetch = (event) => {
    const id = event.target.dataset.pk;
    setUrlDetail(list + id);
    document.getElementsByClassName('grape-detail')[0].style.display = 'block';
  };

  return (
    <section className='grapes'>
      <GrapeSearchTabs searchQuery={searchQuery} />

      <GrapeData
        grapes={grapes}
        grape={grape}
        detailFetch={detailFetch}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </section>
  );
};

export default Grapes;

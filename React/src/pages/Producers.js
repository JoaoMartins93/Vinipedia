import ProducerSearchTabs from '../components/ProducerSearchTabs';
import '../styles/Producers.scss';
import React, { useEffect, useState, useRef } from 'react';
import ProducerData from '../components/ProducerData';
import axios from '../api';

const Producers = () => {
  // variáveis e use states
  const list = 'producers/';
  const limit = '?limit=';
  const [querySet, setQuerySet] = useState('');
  const [total, setTotal] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [n, setN] = useState(8);
  const firstRender = useRef(true);
  const [producers, setProducers] = useState([]);
  const [producer, setProducer] = useState([]);
  const [url, setUrl] = useState(list);
  const [urlDetail, setUrlDetail] = useState(list);

  // use effects
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setProducers(request.data.results);
      setTotal(request.data.count);
      console.log('Producers', request.data.results);
      return request;
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      async function fetchDetail() {
        const request = await axios.get(urlDetail);
        setProducer(request.data);
        console.log('Producer', request.data);
        return request;
      }
      fetchDetail();
    }
  }, [urlDetail]);

  //funções
  const loadMore = () => {
    if (n > total + 4) {
      setHasMore(false);
    } else {
      setUrl(list + querySet + limit + n);
      setN(n + 4);
    }
  };

  const getDetail = (event) => {
    const id = event.target.dataset.pk;
    setUrlDetail(list + id);
    document.getElementsByClassName('producer-detail')[0].style.display =
      'block';
  };

  const searchQuery = () => {
    let search = '?search=';
    let query = document.getElementById('producer-search').value;
    setQuerySet(search + query);
    setN(8);
    setHasMore(true);
    setUrl(list + search + query);
  };

  return (
    <section className='producers'>
      <ProducerSearchTabs searchQuery={searchQuery} />

      <ProducerData
        producers={producers}
        producer={producer}
        getDetail={getDetail}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </section>
  );
};

export default Producers;

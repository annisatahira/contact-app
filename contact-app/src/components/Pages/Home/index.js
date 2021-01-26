import React, { useState } from 'react';
import Contact from '../../Card/Contact';

const url = "https://randomuser.me/api?results=5&exc=login,registered,id,nat&nat=us&noinfo"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async() => {
    const response = await fetch(url);

    if (!response || !response.ok) {
      setLoading(false)
    }

    const resData = await response.json();

    setData(resData);
    setLoading(false)
  };

  fetchData();
  return (
    <>
     { !loading &&
       (
        data.results.map((el, idx) => (
          <Contact 
            key={idx}
            image={el.picture.thumbnail}
            firstName={el.name.first}
            lastName={el.name.last}
          />     
       ))
       )
     }
    </>
  )
};

export default Home;
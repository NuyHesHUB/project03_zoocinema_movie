import React, {/* useCallback,  */useEffect, useState} from 'react';
import axios from 'axios'

import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get('https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=50').then((res)=>{console.log(res);})
  };

const Home = () => {
    const heroes = useQuery('super-heroes', fetchSuperHeroes);
    console.log(heroes);
    return (
        <div>
    	{heroes.data?.data.map(hero => 
        (<div key={hero.id}>{hero.name}</div>))}
        </div>
    )
  };
        
export default Home;

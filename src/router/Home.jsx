import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { StyledFrame, /* TitleWrap, */ Movies, Loading} from './StyledHome';

import HomeMovie from '../components/HomeMovie';



function Home(){
    /* console.log(loading); */
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getMovies=()=>{       /* const result = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        setMovies(result.data) */
        /* axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating").then((res)=>{
            setMovies(res.data.data.movies)
            setIsLoading(!isLoading)
        }).catch((err)=>{
            console.error(err,'axios 에러')
        }) */
        axios.get("https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=50").then((res)=>{
            setMovies(res.data.data.movies)
            setIsLoading(!isLoading)
            /* console.log('res.data',res.data); */
        }).catch((err)=>{
            console.error(err,'axios 에러')
        })
    }
    useEffect(()=>{
        getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    /* {isLoading ? "안녕": "하이"} */
    console.log('movies',movies);
    console.log(isLoading);
        return (
            <StyledFrame>
                {isLoading ? 
                (<Loading>
                    <div className='loader'>
                        <div className='loader_item'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </div>
                </Loading>) : (
                    <Movies>
                        {movies.map(movie => 
                            (<HomeMovie
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title} 
                                summary={movie.summary} 
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />))}
                    </Movies>
                )}
            </StyledFrame>
        );
};



const mapStateToProps = (state) => {
    return{
        loading: state.loading,
        /* movies: state.movies */
    }
}

export default connect(mapStateToProps)(Home);
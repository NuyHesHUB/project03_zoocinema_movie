import React, { useContext, useEffect, useState} from 'react';

/* Redux */
import { connect } from 'react-redux';

/* component */
import Loading from '../components/Loading';
import HomeMovie from '../components/HomeMovie';
import { MovieContext } from '../components/Home/MovieContext';

/* Libalary */
import axios from 'axios';

/* styled */
import { StyledFrame, HomeWrap, HomeTitleWrap, HomeTitle, Movies} from './StyledHome';

function Home(){

    const { movies, setMovies } = useContext(MovieContext);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if (movies.length > 0) { 
            setIsLoading(false);
          } else { // 이전에 가져온 데이터가 없으면
            axios.get("https://yts.mx/api/v2/list_movies.json?sort=seeds&limit=50").then((res)=>{
            setMovies(res.data.data.movies)
            setIsLoading(!isLoading)
        }).catch((err)=>{
            console.error(err,'axios 에러')
        })
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log('movies',movies);
    /* console.log(isLoading); */
        return (
            <StyledFrame>
                {isLoading ? 
                (<Loading/>) : (
                    <>
                        <HomeWrap>
                            <HomeTitleWrap>
                                    <HomeTitle>
                                        <span className='mv_title'>
                                            ZooCINEMA
                                        </span> 
                                        <span className='mv_best'> 최고 </span><br/>인기작 콘텐츠<span className='mv_ea'> {movies.length}</span> 개
                                    </HomeTitle>
                                    <p className='home_content'>블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능 등 모든 작품을 무료 이용으로 감상하세요.<br/>취향에 맞는 작품을 선별하여 추천해드릴게요 😋</p>
                            </HomeTitleWrap>
                        </HomeWrap>
          
                    <Movies>
                        {movies.map(movie => 
                            (<HomeMovie
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title}
                                rating={movie.rating}
                                summary={movie.summary} 
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                bg={movie.background_image}
                            />))}
                    </Movies>
                    </>
                )}
            </StyledFrame>
        );
};



const mapStateToProps = (state) => {
    return{
        loading: state.loading,
    }
}

export default connect(mapStateToProps)(Home);
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import axios from 'axios'
import { StyledFrame, /* TitleWrap, */ Movies} from './StyledHome';

import Loading from '../components/Loading';
import HomeMovie from '../components/HomeMovie';

const HomeWrap = styled.div`
    width: 80%;
    float: right;
    margin-bottom: 20px;
    background: rgb(18, 18, 18);
`
const HomeTitleWrap = styled.div`
    width: 80%;
    padding: 20px;
    background: #000;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    animation: boxani 5s ease-in-out 0.4s infinite;
    /* box-shadow: 3px 3px 30px 1px #05D6D9, -3px -3px 20px 1px #F907FC; */
    /* box-shadow: 0 20px 20px -12px #05D6D9, 0 18px 26px -18px #F907FC; */
    /* margin-bottom: 100px; */
    .home_content{
        margin-top: 50px;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        color: #ededed;
        padding-bottom: 50px;
        margin-bottom: 20px;
    }
    @keyframes boxani {
                0%,
                100% {
                    /* box-shadow: 0 20px 20px -12px #05D6D9, 0 18px 26px -18px #F907FC; */
                    box-shadow: rgb(5 214 217) 0px 0px 42px -12px, rgb(249 7 252) 0px 18px 26px -18px;
                }
                50% {
                    /* box-shadow: 0 10px 10px -5px #05D6D9, 0 18px 36px -18px #F907FC; */
                    box-shadow: rgb(249 7 252) 0px 0px 42px -12px, rgb(5 214 217) 0px 18px 26px -18px;
                }
            }
    /* border-bottom: 1px solid #fff; */
`
const HomeTitle = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 64px;
    font-weight: bold;
    color: #ededed;
    .mv_title{
        font-size: 80px;
        font-weight: bold;
        color: #ededed;
    }
    .mv_best{
        font-size: 100px;
        color: #05d5d9b7;
        font-weight: bold;
            }
    .mv_ea{
        color: #f807fcb0;
        font-size: 100px;
        font-weight: bold;
    }
    
`

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
                    {/* <h2 className='movie_title'><span className='mv_ea_1'>{movies.length}</span> 개의 인기작 콘텐츠 목록</h2> */}
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
        /* movies: state.movies */
    }
}

export default connect(mapStateToProps)(Home);
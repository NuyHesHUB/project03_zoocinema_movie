import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams/* , useParma  */} from 'react-router-dom';

import Loading from '../Loading';

const StyledHomeDetail=styled.div`
    margin: 0;
    padding: 0;
`
const StyledDetailMovie=styled.div`
    margin: 0;
    padding: 0;
    width: 80%;
    float: right;
    position: relative;
`
/* const DetailTitle=styled.h2`
    text-align: center; 
    margin-bottom: 20px; 
    text-transform: uppercase;
    color: #666;
` */
const ImageBg=styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(30%);
    /* width: 80%; */
    /* margin: 0 40px; */
`
const ContentWrap=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100vh; */
    /* background: #ff000029; */
    padding: 50px 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
`
const CoverImage=styled.img`
    /* max-width: 400px;  */
    /* width: 100%; */
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3);
    /* position: absolute;
    top: 50px;
    left: 50px; */
    width: 25%;
    border-radius: 10px;
    margin-right: 50px;
    animation: boxani 5s ease-in-out 0.4s infinite;
    @keyframes boxani {
                0%,
                100% {
                    /* 0px 18px 26px -18px; */
                    box-shadow: rgb(5 214 217) 0px 0px 50px -10px, rgb(249 7 252) 0px 18px 26px -18px;;
                }
                50% {
                    box-shadow: rgb(249 7 252) 0px 0px 50px -10px, rgb(5 214 217) 0px 18px 26px -18px;;
                }
            }
`
const CoverContent=styled.div`
    display: flex;
    flex-direction: column;
`
const ContentTitle=styled.h1`
    color: #ededed;
    font-size: 60px;
`
const Content=styled.span`
    color: #ededed;
    i{
        font-style: normal;
        color: tomato;
    }
`
const GenresWrap=styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`
const GenresList=styled.li`
    color: #ededed;
    margin-right: 15px;
    &:last-child{margin-right: 0;}
    &:last-child::after{display:none;}
    position: relative;
    &::after{
        position: absolute;
        content: '';
        top: 5px;
        right: -9px;
        width: 2px;
        height: 70%;
        background: linear-gradient( to bottom ,#05D6D9 10%,#ffffff 40%, #F907FC 90%);
    }
    
`
const HomeDetail=()=>{
    const {id} = useParams();
    /* const [movieDetail, setMovieDetail] = useState(); */
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const getMovieDetail = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setIsLoading(false);
    }
    
    useEffect(()=>{
        getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    /* console.log(movie); */
    /* console.log(movie.genres); */
    /* console.log(setMovieDetail); */
    return(
        <StyledHomeDetail>
            {isLoading ? <Loading/> : (
                <StyledDetailMovie>
                    <ImageBg style={{backgroundImage: `url(${movie.background_image})`}}>
                   {/*  <DetailTitle>{movieDetail.slug}</DetailTitle> */}
                    </ImageBg>
                    <ContentWrap>
                        <CoverImage src={movie.large_cover_image} alt={movie.title}/>
                        <CoverContent>
                            <ContentTitle>{movie.title}</ContentTitle>
                            <Content> {movie.year} </Content>
                            <br/>
                            <Content><i>&#9733;</i> {movie.rating} 점</Content>
                            {/* <Content>{movieDetail.date_uploaded}</Content> */}
                            <GenresWrap>
                                {
                                    movie.genres.map((genre, idx) => 
                                        (<GenresList key={idx}>{genre}</GenresList>)
                                    )
                                }
                            </GenresWrap>
                            <Content> {movie.description_full}</Content>
                        </CoverContent>
                    </ContentWrap>
                </StyledDetailMovie>
            )}
        </StyledHomeDetail>
    )
}

export default HomeDetail
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams, useParma } from 'react-router-dom';

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
const DetailTitle=styled.h2`
    text-align: center; 
    margin-bottom: 20px; 
    text-transform: uppercase;
    color: #666;
`
const ImageBox=styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(30%);
    /* width: 80%; */
    /* margin: 0 40px; */
`
const CoverImage=styled.img`
    /* max-width: 400px;  */
    /* width: 100%; */
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3);
    position: absolute;
    top: 50px;
    left: 50px;
    width: 25%;
    border-radius: 10px;
`
const HomeDetail=()=>{
    const {id} = useParams();
    const [movieDetail, setMovieDetail] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const getMovieDetail = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(json.data.movie);
        setIsLoading(false);
    }
    
    useEffect(()=>{
        getMovieDetail();
    },[]);
    console.log(movieDetail);
    /* console.log(isLoading); */
    return(
        <StyledHomeDetail>
            {isLoading ? <Loading/> : (
                <StyledDetailMovie>
                    
                    <ImageBox style={{backgroundImage: `url(${movieDetail.background_image})`}}>
                   {/*  <DetailTitle>{movieDetail.slug}</DetailTitle> */}
                    </ImageBox>
                    <CoverImage src={movieDetail.large_cover_image} alt={movieDetail.title}/>
                </StyledDetailMovie>
            )}
        </StyledHomeDetail>
    )
}

export default HomeDetail
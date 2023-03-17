import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeMovieFrame=styled.div`
    /* background-color: #fff; */
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3);
    transition: .2s ease-in-out;
    &:hover{
        background-color: rgba(100, 100, 100, .5);
    }
`
const HomeMovieImg=styled.img`
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, .25), 0 18px 36px -18px rgba(0, 0, 0, .3);
`
const HomeMovieData=styled.div`
    h3{
        font-weight: 300;
        margin: 0;
        margin-bottom: 5px;
        font-size: 24px;
        color: #2c2c2c;
    }
    h5{
        font-weight: 300;
        margin: 0;
        font-size: 14px;
        margin-left: 10px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        margin: 5px 0;
        li{
            margin-right: 20px;
            position: relative;
            &:not(:last-child)::after{
                position: absolute;
                content: "";
                width: 1px;
                height: 10px;
                background: #adaeb9;
                top: 8px;
                right: -10px;
            }
        }
    }
`

function HomeMovie({id, year, title, summary, poster, genres}){
    /* console.log('year',year); */
    return (
        <HomeMovieFrame>
            <Link>
                <HomeMovieImg src={poster} title={title} alt={title} />
                <HomeMovieData>
                    <h3>{title}</h3>
                    <h5>{year}</h5>
                    <ul>
                        {
                            genres.map((genres, idx)=>{
                                    return <li key={idx}>{genres}</li>
                            })
                        }
                    </ul>
                </HomeMovieData>
            </Link>
        </HomeMovieFrame>
        
    );
    
};

export default HomeMovie;
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeMovieFrame=styled.div`
    /* background-color: #fff; */
    position: relative;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    /* box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .1); */
    transition: .2s ease-in-out;
    background: #1e1e1e;
    /* box-shadow: 10px 10px 10px 10px #242424; */
    &:hover{
        &::after{
            position: absolute;
            content: 'DETAILS';
            line-height: 30px;
            font-size: 14px;
            text-align: center;
            /* top: 90%;
            right: -30px; */
            top: 91%;
            right: 1%;
            width: 100px;
            height: 30px;
            border-radius: 10%;
            /* color: #fff; */
            font-weight: bold;
            /* background: linear-gradient( to bottom ,#05D6D9 5%,#F907FC ); */
            /* color: linear-gradient( to bottom ,#05D6D9 5%,#F907FC ); */
            /* background: #05D6D9; */
            background: linear-gradient(to right, #05D6D9, #F907FC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: detail 1s ease-in-out 1
        }
        @keyframes detail {
                0%,
                100% {
                    /* transform: translateY(0); */
                    letter-spacing: 0;
                }
                50% {
                    letter-spacing: 1.1px;
                }
            }
        background-color: rgba(30, 30, 30, .9);
        /* background-color: #232323; */
        box-shadow: 1px 1px 20px 1px #05D6D9, -1px -1px 20px 1px #F907FC;
        color: #fff;
    }
    a{
        text-decoration: none;
        /* color: #242424; */
        color: #fff;
        display: block;
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
        margin-bottom: 10px;
        font-size: 24px;
        /* color: #2c2c2c; */
        color: #fff;
    }
    h5{
        font-weight: 300;
        margin: 0;
        font-size: 15px;
        /* margin-left: 10px; */
        margin-bottom: 10px;
        display: inline-block;
    }
    i{
        color: tomato;
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
                top: 6px;
                right: -10px;
                
            }
        }
    }
`

function HomeMovie({id, year, rating, title, summary, poster, genres, bg}){
    /* console.log('year',year); */
    /* console.log('bg',bg); */
    return (
        <HomeMovieFrame /* style={{backgroundImage: `url(${bg})`}} */>
            <Link to={`/detail/${id}`}>
                <HomeMovieImg src={poster} title={title} alt={title} />
                <HomeMovieData>
                    <h3>{title}</h3>
                    <h5>{year} <i>&#9733;</i>{rating}</h5>
                    {/* <h6><img src={bg} alt="logo" /></h6> */}
                    <ul>
                        {
                            genres.map((genres, idx)=>{
                                    return <li key={idx}>{genres}</li>
                            })
                        }
                    </ul>
                    <hr/>
                    <p>{summary.slice(0,100)}</p>
                </HomeMovieData>
            </Link>
        </HomeMovieFrame>
        
    );
    
};

export default HomeMovie;
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Movies from '../components/List/MyMovieList';
import Footer from './Footer';

const NavStyledFrame = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    /* background: rgba(0, 0, 0, .8); */
    background: #1e1e1e;
    padding: 10px 20px;
    box-sizing: border-box;
    @media screen and (max-width:1200px){
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 0 50px;
    }

    a{
        text-decoration: none;
    }
    .logo-wrap{
        color: #fff;
        align-items: center;
        justify-content: center;
        display: flex;
        .logo{
            background: linear-gradient(to right, #05D6D9, #F907FC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 58px;
            transition: .3s;
        }
        .logo-title{
            font-weight: bold;
            margin-left: 10px;
            font-size: 25px;
            transition: .3s;
        }
        @media screen and (max-width:1400px){
        .logo{font-size: 40px;}
        .logo-title{font-size: 20px;}
        }
        
    }
    ul{
        margin: 0;
        margin-top: 20px;
        padding: 0;
        list-style: none;
        li{
            /* border-bottom: 1px solid #fff; */
            padding: 12px 0;
            margin-left: 20px;
            a{
                color: #fff;
                text-decoration: none;
                font-size: 16px;
                transition: .3s;
                &:hover{
                    color: #666;
                }
                i{
                    margin-right: 8px;
                }
                
            }
        }
        @media screen and (max-width:1400px){
            li{
                a{
                    font-size: 12px;
                }
            }
        }
        @media screen and (max-width:1200px){
        display: flex;
        height: 100%;
        margin: 0;
        align-items: center;
        }
        @media screen and (max-width:840px){
            li{
                a{
                    font-size: 20px;
                }
            }
            .nav-text{
                display: none;
            }
        }
    }
    
`

const Navigation= () => {

    return (
        <NavStyledFrame>
            <Link to="/" className='logo-wrap'><span className='logo'>&#x2601;</span><span className='logo-title'>ZooCINEMA</span></Link>
                <ul>
                    <li><Link to="/"><i className="fas fa-home"></i><span className='nav-text'>인기작 콘텐츠 추천</span></Link></li>
                    {/* <li><Link to="/about"><i className="fas fa-user-alt"></i><span className='nav-text'> 어바웃</span></Link></li> */}
                    <li><Link to="/list" element={<Movies/>}><i className="fas fa-film"></i><span className='nav-text'> 나만의 영화리스트 만들기</span></Link></li>
                    {/* <li><Link to="/about"><i className="fab fa-gratipay"></i><span className='nav-text'> 좋아요 표시한 영화</span></Link></li> */}
                </ul>
            <Footer/>
        </NavStyledFrame>
    );
};

export default Navigation;
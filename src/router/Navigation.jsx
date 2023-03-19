import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../asset/img/logo.png'

const NavStyledFrame = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    /* background: rgba(0, 0, 0, .8); */
    background: #1e1e1e;
    padding: 10px 20px;
    box-sizing: border-box;
    a{
        text-decoration: none;
    }
    .logo-wrap{
        color: #fff;
        align-items: center;
        justify-content: left;
        display: flex;
        .logo{
            background: linear-gradient(to right, #05D6D9, #F907FC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 58px;
        }
        .logo-title{
            font-weight: bold;
            margin-left: 10px;
            font-size: 25px;
        }
    }
    ul{
        margin: 0;
        height: 100vh;
        margin-top: 20px;
        padding: 0;
        list-style: none;
        position: relative;
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
        .footer{
             width: 100% ;
             height: 20px;
             background: red;
             position: absolute;
             bottom: 200px;
            }
    }
`

function Navigation(){
    return (
        <NavStyledFrame>
            <Link to="/" className='logo-wrap'><span className='logo'>&#x2601;</span><span className='logo-title'>ZooCINEMA</span></Link>
            <ul>
                <li><Link to="/"><i class="fas fa-home"></i> 홈</Link></li>
                <li><Link to="/about"><i class="fas fa-user-alt"></i> 어바웃</Link></li>
                <li><Link to="/about"><i class="fas fa-film"></i> 나만의 영화리스트 만들기</Link></li>
                <li><Link to="/about"><i class="fab fa-gratipay"></i> 좋아요 표시한 영화</Link></li>
                <li className='footer'></li>
            </ul>

        </NavStyledFrame>
    );
};

export default Navigation;
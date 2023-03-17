import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyledFrame = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    padding: 50px 20px;
    box-sizing: border-box;
    ul{
        list-style: none;
        li{
            border-bottom: 1px solid #fff;
            padding: 10px 0;
            a{
                color: #fff;
                text-decoration: none;
                font-size: 20px;
                transition: .3s;
                &:hover{
                    color: rgb(27, 149, 176);
                }
            }
        }
    }
`

function Navigation(){
    return (
        <NavStyledFrame>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </NavStyledFrame>
    );
};

export default Navigation;
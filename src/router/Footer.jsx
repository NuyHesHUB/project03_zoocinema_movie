import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooterFrame = styled.div`
    width: 100%;
    height: 100px;
    background: rgba(248, 7, 252, 0.1);;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: center;
    span{
        margin-bottom: 10px;
        color: #ededed;
        }
    @media screen and (max-width:1200px){
        display: none;
    }
`
const FooterSns = styled.div`
    display: flex;
    margin: 0 auto;
    a{  
        text-decoration: none;
        color: #ededed;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 40px;
        transition: .3s ease-in-out;
        &:hover{
            color: rgba(5, 213, 217, 1);
        }
        &:last-child{
            margin-right: 0;
        }
        i{
            font-size: 23px;
        }
    }
`

const Footer = () => {
    return (
        <StyledFooterFrame>
            <span>© ZooCINEMA</span>
            {/* <span>Joo Sehyeon</span> */}
            <FooterSns>
                <Link to='https://github.com/NuyHesHUB/project03_zoocinema_movie'><i className="fab fa-github"></i></Link>
                {/* <Link to='https://github.com/NuyHesHUB'><i className="fas fa-blog"></i></Link> */}
                {/* <Link to='https://github.com/NuyHesHUB'><i className="fas fa-envelope"></i></Link> */}
            </FooterSns>
            
        </StyledFooterFrame>
    );
};

export default Footer;
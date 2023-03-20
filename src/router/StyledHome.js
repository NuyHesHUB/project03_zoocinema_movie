import styled from "styled-components";

export const StyledFrame = styled.div`
    /* max-width: 1400px;
    margin: 0 auto; */
`
export const HomeWrap = styled.div`
    width: 80%;
    float: right;
    margin-bottom: 20px;
    background: rgb(18, 18, 18);
    transition: .3s;
    @media screen and (max-width:1200px){
        width: 100%;
    }
`
export const HomeTitleWrap = styled.div`
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
        transition: .3s;
    }
    @media screen and (max-width:1600px){
        width: 50%;
        .home_content{
            font-size: 15px;
        }
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
export const HomeTitle = styled.h1`
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
    @media screen and (max-width:1600px){
        font-size: 40px;
        .mv_title{font-size: 50px;}
        .mv_best{font-size: 60px;}
        .mv_ea{font-size: 60px;}
    }
    
`

export const Movies = styled.div`
    /* margin: 50px 200px; */
    float: right;
    display: grid;
    /* grid-template-columns: repeat(2,minmax(400px,1fr)); */
    grid-template-columns: repeat(3,minmax(386px,1fr));
    /* grid-gap: 100px; */
    grid-gap: 37px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
    box-sizing: border-box;
    /* background: #121212; */
    background: #121212;
    @media screen and (max-width:1650px){
        grid-template-columns: repeat(2,minmax(386px,1fr));
    }
    @media screen and (max-width:1200px){
        grid-template-columns: repeat(2,minmax(386px,1fr));
        width: 100%;
    }
    @media screen and (max-width:1000px){
        grid-template-columns: repeat(1,minmax(386px,1fr));
        padding: 40px 50px 50px;
        width: 100%;
    }
`
/* export const Loading = styled.div`
    width: 80%;
    height: 100vh;
    float: right;
    background: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    .loader {
    margin: 2%;
    position: relative;
    .loader_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
            margin: 0 20px;
            &:nth-child(1) {
            animation: loader-1 0.5s ease-in-out infinite;
            }
            &:nth-child(2) {
            animation: loader-1 0.5s ease-in-out 0.1s infinite;
            }
            &:nth-child(3) {
            animation: loader-1 0.5s ease-in-out 0.2s infinite;
            }
            &:nth-child(4) {
            animation: loader-1 0.5s ease-in-out 0.3s infinite;
            }
            &:nth-child(5) {
            animation: loader-1 0.5s ease-in-out 0.4s infinite;
            }
            }
            .dot{
                width: 15px;
                height: 15px;
                background: linear-gradient( to bottom ,#05D6D9,#F907FC);
                border-radius: 50px;
            }
    }
    @keyframes loader-1 {
                0%,
                75%,
                100% {
                    transform: translateY(0);
                }
                25% {
                    transform: translateY(-50px);
                    height: 50px;
                }
            }
  } */
    /* span{
            font-size: 40px;
            color: #fff;
            text-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
            text-transform: uppercase;
            font-weight: bold;
        } */
    
/* ` */
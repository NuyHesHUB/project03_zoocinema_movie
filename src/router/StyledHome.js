import styled from "styled-components";

export const StyledFrame = styled.div`
    /* max-width: 1400px;
    margin: 0 auto; */
`
export const TitleWrap = styled.div`
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, .25), 0 18px 36px -18px rgba(0, 0, 0, .3);
    padding-bottom: 50px;
    margin-bottom: 50px;
    h1{
        text-align: center;
        font-size: 64px;
        font-weight: bold;
        color: #fff;
        span{
            font-size: 80px;
            font-weight: bold;
            color: #222;
        }
    }
`
export const Movies = styled.div`
    /* margin: 50px 200px; */
    float: right;
    display: grid;
    grid-template-columns: repeat(2,minmax(400px,1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
    box-sizing: border-box;
    background: #121212;
`
export const Loading = styled.div`
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
                /* background: #0000FF; */
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
  }
    /* span{
            font-size: 40px;
            color: #fff;
            text-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
            text-transform: uppercase;
            font-weight: bold;
        } */
    
`
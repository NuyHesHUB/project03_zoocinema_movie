import React from 'react';
import styled from 'styled-components';

export const StyledLoading = styled.div`
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
  }
`
const Loading = () => {
    return (
        <StyledLoading>
            <div className='loader'>
                <div className='loader_item'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </div>
        </StyledLoading>
    );
};

export default Loading;
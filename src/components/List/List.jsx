import React from 'react';
import styled from 'styled-components';

const ListFrame = styled.div`
    border: 3px solid #ddd; 
    border-radius: 10px; 
    padding: 15px 10px; 
    display: flex; 
    align-items: center; 
    margin-bottom: 5px;
    background: #fff;

    .movie-year{
        font-size: 12px; 
        color: rgb(145, 0, 229);
        font-weight: bold; 
        margin-left: 10px; 
    }
    .movie-title{flex-grow: 1;}
    .d-btn{
        padding: 5px 20px; 
        background: rgb(145, 0, 229); 
        border: none; 
        border-radius: 10px; 
        color: #fff; 
        font-weight: bold;
        }
`
/* (props) */
const List =  ({movie, removeMovie})=> {
    return (
        <ListFrame>
            <div className='movie-title'>{movie.title}
                <span className='movie-year'>{movie.year}</span>
            </div>
            <div><button className='d-btn' onClick={()=> removeMovie(movie.id)}>삭제</button></div>
        </ListFrame>
    );
};

export default List;
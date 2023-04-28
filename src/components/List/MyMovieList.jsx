import React, {useState} from 'react';

/* styled */
import styled from 'styled-components';

/* component */
import List from "./List";
import ListInputForm from "./ListInputForm";

const MyMovieListFrame = styled.div`
    margin: 0;
    padding: 0 100px;
    padding-top: 2rem;
    box-sizing: border-box;
    width: 80%;
    float: right;
    background: rgb(18, 18, 18);
    height: 100vh;
    position: relative;
    h1{
        text-align: center; 
        margin-bottom: 20px; 
        color: #555; 
        margin: 0;
        margin-bottom: 2rem;
        color: #fff;
    }
    .movie_add{
        text-align: center;
        color: #fff;
        border: 1px dashed #ddd;
        border-radius: 10px;
        height: 100px;
        line-height: 100px;
    }
`

const MyMovieList = () => {
    const [movies,setMovies]=useState([]); 
   const addMovie = (movie) => {
      setMovies([
         ...movies,
         movie
      ])
   }

   const removeMovie = (id) => {
      setMovies(movies.filter(movie => {
         return movie.id !==id;
      }))
   }
   const renderMovies = movies.length ? movies.map((movie) => {
      return(
         <List movie={movie} key={movie.id} removeMovie={removeMovie} />
      )
   }) : <div className="movie_add">영화를 추가해주세요</div>;
    return (
        <MyMovieListFrame>
           <h1>나의 영화 리스트</h1>
           <ListInputForm  addMovie={addMovie}/>
           {renderMovies}
        </MyMovieListFrame>
    );
};

export default MyMovieList;
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ListInputFormStyledFrame = styled.div`
    text-align: center;
    /* background: #000; */
    color: #fff;
    h2{
        margin: 0;
    }
    input{
        width: 100%; 
        padding: 10px 20px; 
        box-sizing: border-box; 
        margin-bottom: 1rem; 
        border: 3px solid #ddd; 
        border-radius: 10px;
    }
    .btn{
        width: 50%; 
        padding: 15px 0; 
        /* background: rgb(57, 90, 161);  */
        background: rgb(153, 0, 156);
        border: none; 
        outline: none; 
        margin-bottom: 20px; 
        border-radius: 10px; 
        color: #fff; 
        font-weight: bold; 
        font-size: 16px;
        display: block; 
        margin: 1rem auto;
        margin-bottom: 2rem;
    }
`
const Error = styled.div`
    font-size: 10px; 
    color: tomato; 
    margin-bottom: 5px; 
    margin-left: 5px;
`


const ListInputForm = ({addMovie}) => {
    useEffect(()=>{
        inputRef.current.focus()
      },[]);
  const [movieTitle, setMovieTitle]=useState('');
  const [movieYear, setMovieYear]=useState('');
  const [titleError, setTitleError]=useState('');
  const [yearError, setYearError]=useState('');
  const validateForm= () => {
    resetErrors();
    let validate=true;
    if(!movieTitle){
        setTitleError('보고싶은 영화제목을 입력하세요')
        validate=false;
    }
    if(!movieYear){
        setYearError('개봉년도를 메모하세요')
        validate=false;
    }
    return validate;
  }
  const resetErrors=() => {
    setTitleError('');
    setYearError('');
  }
  const inputRef=useRef();
  const onSubmit=(e)=>{
    e.preventDefault();
    if(validateForm()){
        addMovie({
            id:Date.now(),
            title:movieTitle,
            year:movieYear
        })
    }
    /* resetErrors(); */
    setMovieTitle('');
    setMovieYear('');
    inputRef.current.focus()
  }
    return (
        <ListInputFormStyledFrame className='mf_container'>
            {/* <h2>나의 영화 리스트</h2> */}
            <form style={{maxWidth:'1400px',margin:'0 auto'}} action="#" onSubmit={onSubmit}>
                <input type="text" placeholder='보고싶은 영화제목을 쓰세요' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}} ref={inputRef}/>
                <Error>{titleError}</Error>
                <input type="text" placeholder='개봉년도를 메모하세요' value={movieYear} onChange={(e)=>{setMovieYear(e.target.value)}}/>
                <Error>{yearError}</Error>
                <button type='submit' className='btn'>ADD</button>
            </form>
        </ListInputFormStyledFrame>
    );
};

export default ListInputForm;
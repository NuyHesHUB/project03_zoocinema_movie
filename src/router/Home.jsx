import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

function Home({movieLoading, movies}){
    useEffect(()=>{
        async function getMovies(){
            const {
                data: {
                  data:{movies},
              },
            }=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
              console.log(movies);
              /* this.setState({movies, isLoading:false}) */
        }})
        
        
        return (
            <div>
                home
            </div>
        );
};



const mapStateToProps = (state) => {
    return{
        movieloading: state.movieLoading,
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Home);
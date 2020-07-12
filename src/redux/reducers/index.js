import { combineReducers } from 'redux';
import movie_one from './movie_one';
import movie_two from './movie_two';
import movie_three from './movie_three';

const AllReducers = combineReducers({
    movie_one: movie_one,
    movie_two: movie_two,
    movie_three: movie_three

})

export default AllReducers;
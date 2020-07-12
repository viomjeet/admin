import { movie1 } from "../../assets/api/CONTENTLISTINGPAGE_PAGE1";
const initialState = {
    loading: false,
    list: movie1,
    error: ''
}

const movie_one = (state = { initialState }) => {
    return {
        ...state
    }
}
export default movie_one;
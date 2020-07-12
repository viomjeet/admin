import { movie2 } from "../../assets/api/CONTENTLISTINGPAGE_PAGE2";
const initialState = {
    loading: false,
    list: movie2,
    error: ''
}

const movie_two = (state = { initialState }) => {
    return {
        ...state
    }
}
export default movie_two;
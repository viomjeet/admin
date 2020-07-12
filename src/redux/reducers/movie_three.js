import { movie3 } from "../../assets/api/CONTENTLISTINGPAGE_PAGE3";
const initialState = {
    loading: false,
    list: movie3,
    error: ''
}

const movie_three = (state = { initialState }) => {
    return {
        ...state
    }
}
export default movie_three;
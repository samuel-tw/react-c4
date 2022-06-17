
import userReducer from './features/user.feature';
import newsReducer from './features/news.feature';

const rootReducer = {
    user : userReducer,
    news : newsReducer
}
export default rootReducer;
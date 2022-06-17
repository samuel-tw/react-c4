import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    news: [
    {id:1, name:'1st NEWS', describe: 'Here is the 1st NEWS'},
    {id:2, name:'2st NEWS', describe: 'Here is the 2st NEWS'},
    {id:3, name:'2st NEWS', describe: 'Here is the 3st NEWS'},
    ],
};

const newsSlice = createSlice({
    name : 'news',
    initialState: initialState,
    reducers: {
        ADD_NEWS : (state, action) => {
            console.log("STATE", state, action)
            return(
                {...state,
                    
                news:[
                    ...state.news,
                    action.payload.news,
                ],}
            )
        },
        DELETE_NEWS : (state, action) => {
            console.log("action payload id",action.payload);
            return { 
                ...state,
                news: state.news.filter(
                    theNews => theNews.id !== action.payload)
                };
                
            

        }
    }


    
})
    /*{
        ADD_NEWS : (state, action) => (
            {...state,
            news:[
                ...state.news,
                action.paylpad.news,
            ],}
        )
    }
    */
 


export const {ADD_NEWS} = newsSlice.actions;
export const {DELETE_NEWS} = newsSlice.actions;

export default newsSlice.reducer;
const initalState = {
    news: [
    {id:1, name:'1st NEWS', describe: 'Here is the 1st NEWS'},
    {id:2, name:'2st NEWS', describe: 'Here is the 2st NEWS'},
    {id:3, name:'2st NEWS', describe: 'Here is the 3st NEWS'},
    ],
};

const news =(state=initalState, action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return {
                ...state,
                news:[
                    ...state.news,
                    action.paylpad.news,
                ],
            };
        default:
            return state;
    }
}

export default news;
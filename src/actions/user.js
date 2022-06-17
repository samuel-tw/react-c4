const setUser = user =>({
    type : 'SET_USER',
    payload : {user},
    });

export const fetchUser = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await response.json();
    console.log("USER", user)
    dispatch(setUser(user));
}
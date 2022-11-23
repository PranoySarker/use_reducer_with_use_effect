import React, { useReducer, useEffect } from 'react';

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'success':
            return {
                loading: false,
                error: "",
                post: action.result,
            }
        case 'ERROR':
            return {
                loading: false,
                error: "There was a problem",
                post: {},
            }
        default:
            return state;
    }

}
const GetPost2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'success', result: data });
                console.log(data)
            })
            .catch(err => {
                dispatch({ type: 'ERROR' })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'loading...' : state.post.title}
            {/* {state.error ? error : null} */}
        </div>
    );
};

export default GetPost2;
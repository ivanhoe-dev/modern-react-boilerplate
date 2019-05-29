/* eslint-disable quote-props */
import axios from 'axios';

export const GET_DEPENDENCY_LIST = 'GET_DEPENDENCY_LIST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const getDependencyList = str => ({
    type: GET_DEPENDENCY_LIST,
    keywords: str,
});

export const receivePosts = data => ({
    type: RECEIVE_POSTS,
    posts: data,
});

export const fetchPosts = () => dispatch => axios.get('https://www.reddit.com/r/abc.json')
    .then((response) => {
        dispatch(receivePosts(response.data.data.children));
    });

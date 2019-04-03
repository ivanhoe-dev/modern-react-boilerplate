/* eslint-disable quote-props */
// import fetch from 'isomorphic-fetch';

export const GET_DEPENDENCY_LIST = 'GET_DEPENDENCY_LIST';

export const getDependencyList = str => ({
    type: GET_DEPENDENCY_LIST,
    keywords: str,
});

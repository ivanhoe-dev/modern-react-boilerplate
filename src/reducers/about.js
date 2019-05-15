import { combineReducers } from 'redux';
import { GET_DEPENDENCY_LIST, RECEIVE_POSTS } from '../actions/about';

const defaultDependencyList = [
    'React',
    'Redux',
    'React Router',
    'Webpack',
    'Webpack Dev Server',
    'Bootstraps',
    'Sass',
    'Browser Sync',
    'Babel',
    'Eslint',
];

const dependencyList = (state = defaultDependencyList, action) => {
    switch (action.type) {
    case GET_DEPENDENCY_LIST: {
        let res = defaultDependencyList.filter(item => item.includes(action.keywords));
        if (res.length < 1) {
            res = ['No Result Found'];
        }
        return res;
    }
    default:
        return state;
    }
};

const posts = (state = [], action) => {
    switch (action.type) {
    case RECEIVE_POSTS: {
        return action.posts;
    }
    default:
        return state;
    }
};

export default combineReducers({ dependencyList, posts });

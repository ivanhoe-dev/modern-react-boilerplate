import { combineReducers } from 'redux';
import { GET_DEPENDENCY_LIST } from '../actions/about';

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

export default combineReducers({ dependencyList });

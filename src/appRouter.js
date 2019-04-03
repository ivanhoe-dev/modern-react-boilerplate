import Index from './components/pages/index/index';
import About from './components/pages/about/about';

const routes = [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    {
        path: '/about/',
        component: About,
    },
];

export default routes;

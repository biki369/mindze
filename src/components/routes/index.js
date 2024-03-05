import Login from '../../pages/auth/login-out/Login';
import Layout from '../layout/Layout';

export const routes = [
    {
        path: '/',
        component:Layout,
        // component: () => import('../layout/Layout'),
        name: 'Home'
    },
    {
        path: '/login',
        component:Login,
        name: 'Login'
    },
];

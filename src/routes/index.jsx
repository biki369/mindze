import Login from '../pages/auth/login-out/Login';
import Home from '../pages/home/Home';

export const routes = [
    {
        path: '/login',
        component:<Login/>,
        name: 'Login'
    },
    {
        path: '/',
        component:<Home/>,
        name: 'Login'
    },
];


// const Tasks = React.lazy(() => import("./Components/Tasks"));
// ...
// const routes = [
//   {
//     path: "/tasks/edit/:id",
//     name: "View Task",
//     component: Tasks
//   }
// ...
// ];

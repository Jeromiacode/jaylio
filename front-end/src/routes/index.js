import UserLogin2 from '../pages/user/login/user-login';

// to : App.js
export const appRoutes = [
            {
            path: '', element: <h1>Pierre home</h1>
        },
            {
            path: 'skills', element: <h1>Pierre CV</h1>
        },
            {
            path: 'contact', element: <h1>Pierre contact</h1>
        },
            {
            path: 'projects', element: <h1>Pierre Projects</h1>
        },
            {
            path: 'user', 
            children:
            [
                {
                    index: true, element: <h2>Pierre User</h2>
                },
                {
                    path: 'login', element: <UserLogin2 />
                },
            ]
        },
        {
            path:'*',
            element: <h1>Error</h1>
        },
];

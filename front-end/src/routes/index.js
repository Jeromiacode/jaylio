import LoginPage from '../pages/user/user-login';
import LogoutPage from '../pages/user/user-logout';

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
                    path: 'login', element: <LoginPage />
                },
                {
                    path: 'logout', element: <LogoutPage />
                },
            ]
        },
        {
            path:'*',
            element: <h1>Error</h1>
        },
];

// to : App.js
export const appRoutes = [
            {
            path: '', element: <h1>Pierre home</h1>
        },
            {
            path: '/skills', element: <h1>Pierre CV</h1>
        },
            {
            path: '/contact', element: <h1>Pierre contact</h1>
        },
            {
            path: '/projects', element: <h1>Pierre Projects</h1>
        },
            {
            path: '/user', element: <h1>Pierre user</h1>, 
            children:
            [
                // {
                //     index: true, element: <h2>Pierre Admin</h2>
                // },
                {
                    path: '/login', element: <h2>Pierre Login</h2>
                },
            ]
        },
        {
            path:'*',
            element: <h1>Error</h1>
        },
];

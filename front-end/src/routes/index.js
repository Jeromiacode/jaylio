import LoginPage from '../pages/admin/admin-login';
import LogoutPage from '../pages/admin/admin-logout';
import ContactPage from '../pages/contact/contact-form';

// to : App.js
export const appRoutes = [
            {
            path: '', element: <h1>Pierre home</h1>
        },
            {
            path: 'skills', element: <h1>Pierre CV</h1>
        },
        {
            path: 'projects', element: <h1>Pierre Projects</h1>
        },
        {
            path: 'contact', element: <ContactPage/>
        },
        {
            path: 'admin', 
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

import AdminRoute from './admin-route';
import ProjectRoute from './projects-route';
import HomeRoute from './home-route';
import SkillsPage from '../pages/skills-page';
import ProjectPage from '../pages/projects-page';

// to : App.js
export const appRoutes = [
        {
            path: '', element: <HomeRoute />
        },
        {
            path: 'projects', element: <ProjectRoute/>
        },
        {
            path: 'admin', 
            children:
            [
                {
                    path: '', element: <AdminRoute/>
                },
                {
                    path: 'cv', element: <SkillsPage />
                },
                {
                    path: 'projects', element: <ProjectPage/>
                },
            ]
        },
        {
            path:'*',
            element: <h1>Error - unexisting route !</h1>
        },
];

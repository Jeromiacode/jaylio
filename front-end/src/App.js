import MainFooter from './containers/main-footer/main-footer';
import MainHeader from './containers/main-header/main-header';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from './routes';

function App() {

  const routes = useRoutes(appRoutes)
  
  return (
    <>
    <MainHeader/>
    {routes}
    {/* <MainFooter/> */}
    </>
  );
}

export default App;

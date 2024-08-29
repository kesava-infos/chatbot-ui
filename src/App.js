import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from "./config/routes";
import { AuthRoute } from './config/AuthRoute';
function App() {
  return (
    <Routes>
      {
        routes.map(({ path, Page, auth }) => {
          if (auth) {
            return <Route key={path} path={path} element={
              <AuthRoute>
                <Page />
              </AuthRoute>
            } />
          }
          return <Route path={path} element={<Page />} />
        })
      }
    </Routes>
  );
}

export default App;


import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { AuthRoute } from "./config/AuthRoute";
import Layout from "./layout";
import { ToastContainer } from "react-toast";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Page, auth }) => {
            if (auth) {
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <AuthRoute>
                      <Page />
                    </AuthRoute>
                  }
                />
              );
            }
            return <Route key={path} path={path} element={<Page />} />;
          })}
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" delay="6000" />
    </>
  );
}

export default App;

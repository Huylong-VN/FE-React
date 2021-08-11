import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { Route,Redirect, BrowserRouter as Router } from "react-router-dom";
import Client from "./Layouts/client";
import admin from "./Layouts/admin";
import Manage_users from "./Pages/Manage_users";
import Manage_product from "./Pages/Manage_product";
import { DashBoard } from "./Components/Admin/DashBoard";
// import UserContextProvider from "./context/userContext";
import AuthContextProvider from "./context/AuthContext";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <AppRoute
          path="/admin"
          exact
          layout={admin}
          component={() => {
            if (
              localStorage.getItem("token") == null &&
              localStorage.getItem("role") == null
            ) {
              return <Redirect to="/" />;
            }
            return <DashBoard />;
          }}
        />
        <AppRoute path="/" exact layout={Client} component={Home} />
        <AppRoute path="/home" exact layout={Client} component={Home} />

        <AppRoute path="/about" exact layout={Client} component={About} />

        <Route path="/login" exact component={Login} />
        <AppRoute
          path="/admin/product"
          exact
          layout={admin}
          component={Manage_product}
        />
          <AppRoute
            path="/admin/user"
            exact
            layout={admin}
            component={Manage_users}
          />
      </AuthContextProvider>
    </Router>
  );
};

export default App;

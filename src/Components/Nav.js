import React,{useState} from "react";
import {Row,Col,Menu,Layout} from "antd"
import Logo from "../img/Logo.png";

export const Nav = () => {
    const { Header, Content, Footer } = Layout;
  var authenticate = localStorage.getItem("token") ? true : false;
  console.log(authenticate);
  const [isAuthenticated, setisAuthenticated] = useState(authenticate);
  const toggleAuth = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("Id");
    setisAuthenticated(false);
  };

  const role = localStorage.getItem("role") !== null ? true : false;
  return (
    <div>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>




      {/* <Menu theme="light" defaultSelectedKeys={1} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/about">About Us</Link>
        </Menu.Item>
        {role === true ? (
          <Menu.Item key="4" icon={<ExportOutlined />}>
            <Link to="/admin">Admin DashBoard</Link>
          </Menu.Item>
        ) : (
          ""
        )}
        {isAuthenticated !== true ? (
          <Menu.Item key="3" icon={<LoginOutlined />}>
            <Link to="/login" onClick={toggleAuth}>
              Login
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="3" icon={<ExportOutlined />}>
            <Link to="/home" onClick={toggleAuth}>
              LogOut
            </Link>
          </Menu.Item>
        )}
      </Menu> */}
    </div>
  );
};

import "./client.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  PageHeader,
  Affix,
  Button,
  Drawer,
} from "antd";
import {
  UserOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  ExportOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { Header, Content, Footer } = Layout;

const Client = (props) => {
  const contextAu = useContext(AuthContext);
  const { isAth, toggleAuth } = contextAu;

  const role=localStorage.getItem("role")!==null?true:false
  const [visible, setvisible] = useState();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="site-drawer-render-in-current-wrapper">
        <Affix offsetTop="0">
          <Button type="light" onClick={() => setvisible(true)}>
            <MenuFoldOutlined />
          </Button>
        </Affix>
        <Drawer
          title="Hiu Hiu, Welcome"
          placement="right"
          closable={false}
          onClose={() => setvisible(false)}
          visible={visible}
        >
          <h2>Menu</h2>
          <Menu theme="light" defaultSelectedKeys={1} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/about">About Us</Link>
            </Menu.Item>
            {role===true?(<Menu.Item key="4" icon={<ExportOutlined />}>
                <Link to="/admin">
                  Admin DashBoard
                </Link>
              </Menu.Item>):""}
            {isAth ? (
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
          </Menu>
        </Drawer>
      </div>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          HuyK3 Design ©2021 Created by HuyK3
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Client;

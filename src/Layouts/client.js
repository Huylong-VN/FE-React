import "./client.css";
import {
  Layout,
  Breadcrumb,
  PageHeader,
  Affix,
  Button,
  Drawer,
} from "antd";


import { useState } from "react";
import { Nav } from "../Components/Nav";


const { Header, Content, Footer } = Layout;

const Client = (props) => {
  const [visible, setvisible] = useState();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Nav />
      {/* <div className="site-drawer-render-in-current-wrapper">
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
        <Nav/>
        </Drawer>
      </div> */}
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

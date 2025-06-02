import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import myLogo from "../../assets/myLogo1.png";
import { Link, Outlet } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";

const { Header, Content, Footer } = Layout;

const navbarItems = homePaths.map((item) => ({
  key: item.name,
  label: <Link to={item.path}>{item.name}</Link>,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          backgroundColor: "darkblue", // ✅ Blur
          // backgroundColor: "rgba(255, 255, 300, 1)", // ✅ Semi-transparent
          // WebkitBackdropFilter: "blur(10px)", // ✅ Safari support
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Optional border
        }}
      >
        {/* 🔵 Left: Logo or Icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={myLogo} alt="Logo" />
        </div>

        {/* 🔴 Right: Nav Items */}
        <Menu
          theme="dark"
          mode="horizontal"
          items={navbarItems}
          style={{
            background: "transparent", // ✅ No background
            flex: 1,
            justifyContent: "end",
          }}
        />
      </Header>

      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "22px 0" }}
          // items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        />
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;

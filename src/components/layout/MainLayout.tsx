import React, { useState } from "react";
import { Layout, Menu, theme, Drawer, Button, MenuProps } from "antd";
import { MenuOutlined, CloseOutlined, GithubOutlined } from "@ant-design/icons";
import myLogo from "../../assets/myLogo1.png";
import { Link, Outlet } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const navbarItems: MenuProps["items"] = homePaths
    .filter((item) => item.name)
    .map((item) => ({
      key: item.path,
      label: (
        <Link
          to={item.path}
          onClick={() => {
            if (window.innerWidth < 768) {
              setDrawerVisible(false); // ✅ Only close if small screen
            }
          }}
        >
          {item.name}
        </Link>
      ),
    }));

  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          backgroundColor: "darkblue",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={myLogo} alt="Logo" style={{ height: 40 }} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end">
          <Menu
            theme="dark"
            mode="horizontal"
            items={navbarItems}
            style={{
              background: "transparent",
              flex: 1,
              justifyContent: "end",
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={
              drawerVisible ? (
                <CloseOutlined style={{ fontSize: 22, color: "white" }} />
              ) : (
                <MenuOutlined style={{ fontSize: 22, color: "white" }} />
              )
            }
            onClick={toggleDrawer}
          />
        </div>
      </Header>
      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        closable
        onClose={toggleDrawer}
        open={drawerVisible}
        className="md:hidden"
      >
        <Menu mode="vertical" items={navbarItems} />
      </Drawer>
      {/* Main Content */}
      <Content
        style={{
          flex: 1,
          padding: 24,
          minHeight: "100%",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet />
      </Content>

      <Footer
        style={{
          backgroundColor: "#f0f2f5",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <div>
          Designed & Built by <strong>Md Rahatul Islam</strong>
        </div>
        <div style={{ marginTop: 4 }}>
          © {new Date().getFullYear()} Md Rahatul Islam. All rights reserved.
        </div>
        <a
          href="https://github.com/Th3At0nic/fullstack-portfolio-2.0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "24px",
            color: "#000",
            marginTop: 8,
            display: "inline-block",
          }}
        >
          <GithubOutlined />
        </a>
      </Footer>
    </Layout>
  );
};

export default App;

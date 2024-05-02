import React from "react";
import { Layout, Menu } from "antd";
import dashboard from "./assets/dashbord.png";
import { Routes, Route, Link } from "react-router-dom";
import Assets from "./components/Assets";
import work from "./assets/work.png";
import Topbar from "./components/Topbar";
import stock from "./assets/stock.png";
import item from "./assets/item.png";
import Store_Inventory from "./assets/Store_Inventory.png";
import store from "./assets/store.png";
import reports from "./assets/Reports.png";
import right from "./assets/right.png";
import Setting from "./assets/Setting.png";
import assets from "./assets/Assets.png";
import ground from "./assets/Gound.png";
const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#fff" }}>
        <Topbar />
      </Header>
      <Layout>
        <Sider
          width={200}
          className="sidebar"
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              key="dashboard"
              icon={<img src={dashboard} alt="Dashboard" />}
            >
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item
              key="workOrder"
              icon={<img src={work} alt="Work Order" />}
            >
              <Link>Work Order</Link>
            </Menu.Item>
            <Menu.Item
              key="stackKeepingUnit"
              icon={<img src={stock} alt="Dashboard" />}
            >
              <Link> Stack Keeping Unit</Link>
            </Menu.Item>
            <Menu.Item key="items" icon={<img src={item} alt="Dashboard" />}>
              <Link> Items</Link>
            </Menu.Item>
            <Menu.Item
              key="storeInventory"
              icon={<img src={Store_Inventory} alt="Dashboard" />}
            >
              <Link>Store Inventry</Link>
            </Menu.Item>
            <Menu.Item
              key="storeInventory"
              icon={<img src={store} alt="Dashboard" />}
            >
              <Link>Store </Link>
            </Menu.Item>
            <Menu.Item
              key="reports"
              icon={<img src={reports} alt="Dashboard" />}
            >
              <Link>Reports</Link>
            </Menu.Item>
            <Menu.Item
              key="safetyDataSheets"
              icon={<img src={dashboard} alt="Dashboard" />}
            >
              <Link> Safety Data Sheets</Link>
            </Menu.Item>

            <Menu.SubMenu
              key="assets"
              icon={<img src={assets} alt="Dashboard" />}
              title="Assets"
            >
              <Menu.Item
                key="asset1"
                icon={<img src={right} alt="Dashboard" />}
              >
                <Link to="/assets">Asset </Link>
              </Menu.Item>
              <Menu.Item
                key="asset2"
                icon={<img src={right} alt="Dashboard" />}
              >
                <Link to="/assets-type">Assets Type</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              key="setting"
              icon={<img src={Setting} alt="Dashboard" />}
            >
              <Link> Setting</Link>
            </Menu.Item>
          </Menu>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              width: "100%",
              marginTop: 30,
            }}
          >
            <img src={ground} alt="gound" style={{ width: 200, height: 50 }} />
          </div>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              // padding: 30,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/assets" element={<Assets />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

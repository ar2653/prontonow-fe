import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Login from "./components/Login";
import Devices from "./components/Devices";
import Register from "./components/Register";
import DeviceDetails from "./components/DeviceDetails";
import ServiceHistory from "./components/ServiceHistory";
import RequestService from "./components/RequestService";
import Navbar from "./components/Navbar";
import AuthGuard from "./components/AuthGuard";

const { Content } = Layout;

const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/login";

  return (
    <Layout style={{ minHeight: "100vh" }} id="main-layout">
      {!hideNavbar && <Navbar />}
      <Layout className="site-layout" id="1234">
        <Content
          style={{ margin: "24px 16px 0", overflow: "initial" }}
          id="1235"
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
            id="1236"
          >
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/devices"
                element={
                  <AuthGuard>
                    <Devices />
                  </AuthGuard>
                }
              />
              <Route path="/devices/model/:model_name/serialnumber/:serial_number" 
              element={
                <AuthGuard>
                  <DeviceDetails />
                </AuthGuard>
              }
              />
              <Route path="/devices/model/:model_name/serialnumber/:serial_number/history"
              element={
                <AuthGuard>
                  <ServiceHistory />
                </AuthGuard>
              } />
              <Route
                path="/devices/model/:model_name/serialnumber/:serial_number/requestservice"
                element={
                  <AuthGuard>
                    <RequestService />
                  </AuthGuard>
                }
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

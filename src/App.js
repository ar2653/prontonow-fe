import './App.css';
import { Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import Login from './components/Login';
import Devices from './components/Devices';
import Register from './components/Register';
import DeviceDetails from './components/DeviceDetails';
import ServiceHistory from './components/ServiceHistory';
import RequestService from './components/RequestService';
import Navbar from './components/Navbar';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh'}} id="main-layout">
      <Navbar />
      <Layout className="site-layout" id="1234">
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} id="1235">
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }} id="1236">
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/devices/:id" element={<DeviceDetails />} />
              <Route path="/devices/:id/history" element={<ServiceHistory />} />
              <Route path="/devices/:id/requestservice" element={<RequestService />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;

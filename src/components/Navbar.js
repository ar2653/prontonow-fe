import React from "react";
import { HomeOutlined, ProductOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography, Image } from "antd";
import logo from "../assets/pnow.png";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
    link: "/devices",
  },
  {
    key: "2",
    icon: <ProductOutlined />,
    label: "Devices",
    link: "/devices",
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: "Profile",
    link: "/profile",
  },
];

const Navbar = () => {
  //   const [collapsed, setCollapsed] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setCollapsed(window.innerWidth <= 768); // Adjust breakpoint as needed
  //     };

  //     handleResize(); // Initial check
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <Sider theme="light" collapsed={true} style={{ minHeight: "100vh", border: '1px solid #f0f0f0' }}>
      <div className="logo">
        <Title level={2} style={{ margin: 0, lineHeight: "64px" }}>
          <Image preview={false} src={logo} />
        </Title>
      </div>

      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Navbar;

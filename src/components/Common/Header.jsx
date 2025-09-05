import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Drawer, Dropdown, Space, Row, Col } from "antd";
import {
  MenuOutlined,
  DownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const CustomHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();
  const [commercialDrawerVisible, setCommercialDrawerVisible] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleDrawerClose = () => {
    setCommercialDrawerVisible(false);
    setDrawerVisible(true);
  };

  const handleMainDrawerClose = () => {
    setDrawerVisible(false);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  const getNavLinkStyle = (path) => {
    return location.pathname === path
      ? { borderBottom: "3px solid #2f2205" }
      : {};
  };

  const handleDropdownVisibleChange = (visible) => {
    setIsMegaMenuOpen(visible);
  };

  const vehicleSubMenu = (
    <Menu
      style={{
        padding: "40px",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "none",
      }}
      onMouseEnter={() => setIsMegaMenuOpen(true)}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <Row gutter={[20, 20]} style={{ justifyContent: "center" }}>
        <Col xs={16} sm={4}>
          <Menu.Item
            key="column1-item1"
            style={{
              display: "flex",
              backgroundColor: "none",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ford150" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/ford-150.jpg"
                alt="Column 1 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center" style={{fontSize: '15px', fontWeight: '600', textTransform: 'uppercase'}}>Ford 150</h6>
            </Link>
          </Menu.Item>
        </Col>
        <Col xs={16} sm={4}>
          <Menu.Item
            key="column2-item1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ford-super-duty" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/2.jpg"
                alt="Column 2 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center" style={{fontSize: '15px', fontWeight: '600', textTransform: 'uppercase'}}>Ford Super Duty</h6>
            </Link>
          </Menu.Item>
        </Col>
        <Col xs={16} sm={4}>
          <Menu.Item
            key="column3-item1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ram-1500-rho" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/ram-1500-rho.jpg"
                alt="Column 3 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center" style={{fontSize: '15px', fontWeight: '600', textTransform: 'uppercase'}}>RAM 1500</h6>
            </Link>
          </Menu.Item>
        </Col>
        <Col xs={16} sm={4}>
          <Menu.Item
            key="column4-item1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ram-heavy-duty" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/RAM-2500-platinum.jpg"
                alt="Column 4 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center" style={{fontSize: '15px', fontWeight: '600', textTransform: 'uppercase'}}>RAM Heavy Duty</h6>
            </Link>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );

  const vehicleMobileSubMenu = (
    <Menu
      style={
        {
          // width: "100vw",
          // position: "absolute",
          // minWidth: "1208px",
          // right: "-51.1rem",
          // backgroundColor: "white",
          // marginTop: "14px",
          // boxShadow: "none",
        }
      }
      onMouseEnter={() => setIsMegaMenuOpen(true)}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <Row style={{ justifyContent: "center" }}>
        <Col>
          <Menu.Item
            key="column1-item1"
            style={{
              display: "flex",
              height: "100%",
              backgroundColor: "none",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ford150" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/ford-150.jpg"
                alt="Column 1 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center">Ford 150</h6>
            </Link>
          </Menu.Item>
        </Col>
        <Col>
          <Menu.Item
            key="column2-item1"
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ford-super-duty" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/2.jpg"
                alt="Column 2 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center">Ford Super Duty</h6>
            </Link>
          </Menu.Item>
        </Col>
        <Col>
          <Menu.Item
            key="column3-item1"
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ram-1500-rho" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/ram-1500-rho.jpg"
                alt="Column 3 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center">RAM 1500</h6>
            </Link>
          </Menu.Item>
        </Col>
        <Col>
          <Menu.Item
            key="column4-item1"
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Link to="/ram-heavy-duty" style={{ textDecoration: "none" }}>
              <img
                src="/megamenu/RAM-2500-platinum.jpg"
                alt="Column 4 - Image 1"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              />
              <h6 className="text-center">RAM Heavy Duty</h6>
            </Link>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
  );

  return (
    <Header className="Homepage-header-parent">
      <div className="Homepage-header-subParent">
        <div className="row">
          <div className="col-md-12">
            <nav
              className="navbar navbar-expand-lg"
              ref={navbarRef}
              style={{
                backgroundColor: isMegaMenuOpen
                  ? "rgba(255, 255, 255)"
                  : "transparent",
                transition: "background-color 0.3s ease",
                color: "#000000",
              }}
            >
              <div className="container overflow-hidden">
                <div className="main-logo-image col-">
                  <Link to="/">
                    <img src="/mainlogo.png" alt="" />
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item fade-in">
                      <Link
                        className={getNavLinkClass("/")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item fade-in">
                      <Link
                        className={getNavLinkClass("")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="/about-us"
                      >
                        About Us
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link
                        className={getNavLinkClass("")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="#"
                      >
                        In Stock
                      </Link>
                    </li> */}

                    <li className="nav-item fade-in">
                      <Dropdown
                        overlay={vehicleSubMenu}
                        open={isMegaMenuOpen} // Control visibility with state
                        onOpenChange={handleDropdownVisibleChange}
                      >
                        <Link
                          to="#"
                          style={{
                            color: isMegaMenuOpen ? "#000000" : "#ffffff",
                          }}
                        >
                          <span>
                            {" "}
                            {/* This span is crucial */}
                            <Space>
                              Vehicles
                              <DownOutlined style={{ display: "none" }} />
                            </Space>
                          </span>
                        </Link>
                      </Dropdown>
                    </li>

                    <li className="nav-item fade-in">
                      <Link
                        className={getNavLinkClass("")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="/coming-soon"
                      >
                        Coming Soon
                      </Link>
                    </li>
                    <li className="nav-item fade-in">
                      <Link
                        className={getNavLinkClass("")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="/dealer-pricing"
                      >
                        Dealer Pricing
                      </Link>
                    </li>
                    <li className="nav-item fade-in">
                      <Link
                        className={getNavLinkClass("")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="/adr-compliance"
                      >
                        ADR Compliance
                      </Link>
                    </li>
                    <li className="nav-item fade-in">
                      <Link
                        className={getNavLinkClass("")}
                        style={{
                          color: isMegaMenuOpen ? "#000000" : "#ffffff",
                        }}
                        to="/export"
                      >
                        Export
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="header-log-in-button fade-in">
                    <Link to="/contact-us">Get In Touch</Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Drawer for mobile */}
      <div className="mobile-menu">
        <MenuOutlined
          onClick={() => setDrawerVisible(true)}
          style={{ fontSize: "24px", color: "#fff" }}
        />
        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={handleMainDrawerClose}
          visible={drawerVisible}
          className="drawer-menu"
        >
          <Menu theme="dark" mode="vertical">
            <Menu.Item key="1">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="3">
              <Link to="#" className="nav-link">
                In Stock
              </Link>
            </Menu.Item> */}
            <Menu.Item key="4">
              <Link
                to="#"
                className="nav-link"
                onClick={() => {
                  setCommercialDrawerVisible(true);
                  setDrawerVisible(false);
                }}
              >
                Vehicles
              </Link>{" "}
              {/* Keep the main link here */}
            </Menu.Item>
            <Menu.Item key="5">
              {" "}
              {/*  Sub-menu item in the drawer */}
              <Link to="/coming-soon" className="nav-link">
                Coming Soon
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/dealer-pricing" className="nav-link">
                Dealer Pricing
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/adr-compliance" className="nav-link">
                ADR Compliance
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/export" className="nav-link">
                Export
              </Link>
            </Menu.Item>
             <Menu.Item key="9">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              {/* <div className="header-log-in-button"> */}
              <Link style={{padding: '10px 30px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', borderRadius: '20px'}} to="/contact-us">Get In Touch</Link>
              {/* </div> */}
            </Menu.Item>
          </Menu>
        </Drawer>
        <Drawer
          title="Vehicles"
          placement="right"
          closable={true}
          closeIcon={<ArrowLeftOutlined />}
          onClose={handleDrawerClose}
          visible={commercialDrawerVisible}
          className="drawer-menu"
        >
          {vehicleMobileSubMenu}
        </Drawer>
      </div>
    </Header>
  );
};

export default CustomHeader;

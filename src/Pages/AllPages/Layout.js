import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Container from "react-bootstrap/esm/Container";

const Layout = () => {
  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Container className="py-4">
          <Outlet/>
        </Container>
      </div>
    </>
  );
};

export default Layout;

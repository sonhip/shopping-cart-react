import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import Carousel from "./banner/carousel";
import PropTypes from "prop-types";

const { Content } = Layout;

const LayoutComponent = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <Carousel />
      <Content>
        <div className="bg-white min-h-screen container mx-auto">
          {children}
        </div>
      </Content>
      <FooterComponent />
    </>
  );
};

LayoutComponent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default React.memo(LayoutComponent);

import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./header/header";
import FooterComponent from "./footer/footer";
import PropTypes from "prop-types";

const { Content } = Layout;

const LayoutComponent = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <Content>
        <div className="bg-white min-h-screen container mx-auto px-4 sm:px-8">
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

import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./signup.scss";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import BgImage from "./images/bg-01.jpg";
import * as reselect from "../../reselect/login-reselect";
import { registerRequest } from "../../actions/index";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import Loading from "components/loading/loading";
import { isEmptyObject } from "helper/common";

const LoginForm = () => {
  const { loading, error, data } = useSelector(
    createStructuredSelector({
      loading: reselect.getLoadingLoginSelector,
      error: reselect.getMessageErrorSelector,
      data: reselect.getDataLoginSelector,
    })
  );

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    if (values.password !== values.passwordCheck) {
      alert("confirm password is not match, please try again!");
    } else if (values.remember !== true) {
      alert("please accept the terms if you want to register!");
    } else {
      dispatch(
        registerRequest(
          values.username,
          values.email,
          values.password,
          values.phone
        )
      );
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="limiter w-full overflow-hidden">
          <div
            className="container-login100"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <div className="wrap-login100 px-8 pt-8 sm:px-28 sm:pt-16 sm:pb-5">
              <span class="login100-form-title sm:pb-12 mb-4">Register</span>
              <div className="flex justify-center items-center">
                <h3 className="text-center text-red-500">
                  {!isEmptyObject(error) && data === null
                    ? "Your email was exist, please try another one!"
                    : ""}
                </h3>
              </div>
              <Form
                name="normal_login"
                className="login100-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  initialValues={{
                    remember: true,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    className="input100"
                    prefix={
                      <UserOutlined className="site-form-item-icon mr-2" />
                    }
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  type="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    className="input100"
                    prefix={
                      <AiOutlineMail className="site-form-item-icon mr-2" />
                    }
                    type="email"
                    placeholder="Email"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone number!",
                    },
                  ]}
                >
                  <Input
                    className="input100"
                    prefix={
                      <AiOutlinePhone className="site-form-item-icon mr-2" />
                    }
                    type="phone"
                    placeholder="Phone number"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    className="input100"
                    prefix={
                      <LockOutlined className="site-form-item-icon mr-2" />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="passwordCheck"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Confirm Password!",
                    },
                  ]}
                >
                  <Input
                    className="input100"
                    prefix={
                      <AiOutlineSecurityScan className="site-form-item-icon mr-2" />
                    }
                    type="password"
                    placeholder="Confirm password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>
                      <div className="sm:text-lg text-md">
                        I agree with all terms and conditions
                      </div>
                    </Checkbox>
                  </Form.Item>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button login100-form-btn"
                  >
                    Register
                  </Button>
                  <div className="flex justify-end items-center mt-4">
                    <a className="text-lg " href="/login">
                      Back to login form
                    </a>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(LoginForm);

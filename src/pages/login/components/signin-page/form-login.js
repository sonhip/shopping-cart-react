import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import BgImage from "./images/bg-01.jpg";
import * as reselect from "../../reselect/login-reselect";
import { loginRequest } from "../../actions/index";
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
    dispatch(loginRequest(values.username, values.password));
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
              <span class="login100-form-title sm:pb-12">Sign In With</span>
              <div className="flex justify-between items-center my-4 sm:mb-12">
                <a href="!#" class="btn-face">
                  <AiFillFacebook className="text-3xl mr-2" />
                  Facebook
                </a>

                <a href="!#" className="btn-google">
                  <FcGoogle className="text-3xl mr-2" />
                  Google
                </a>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="text-center text-red-500">
                  {!isEmptyObject(error) && data === null
                    ? "Username or password is incorrect, please try again!"
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
                    placeholder="Email"
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
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>
                      <div className="text-lg">Remember me</div>
                    </Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot text-lg" href="!#">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button login100-form-btn"
                  >
                    Sign In
                  </Button>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-lg mt-2">Or </span>
                      <a className="text-lg mt-4" href="/register">
                        register now!
                      </a>
                    </div>
                    <a className="text-lg " href="/">
                      Back
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

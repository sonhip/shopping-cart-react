import React from "react";
import { Form, Input, Select } from "antd";
const { TextArea } = Input;

function Confirm() {
  return (
    <>
      <div style={{ marginTop: "100px" }} className="px-8">
        <h2 className="uppercase block text-xl text-center mb-4 font-bold">
          Confirm Your Information
        </h2>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          layout="horizontal"
          initialValues={{
            size: "large",
          }}
          size="large"
        >
          <Form.Item label="Your name">
            <Input />
          </Form.Item>
          <Form.Item label="Your phone number">
            <Input />
          </Form.Item>
          <Form.Item label="Your address">
            <Input />
          </Form.Item>
          <Form.Item label="Delivery">
            <Select>
              <Select.Option value="GHN">Giao Hàng Nhanh (GHN)</Select.Option>
              <Select.Option value="GHTK">
                Giao Hàng Tiết Kiệm (GHTK)
              </Select.Option>
              <Select.Option value="GHKC">
                Giao Hàng Không Chậm (GHKC)
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Note">
            <TextArea rows={4} />
          </Form.Item>

          <div className="flex justify-end items-end  mr-64">
            <div className="flex text-xl items-center justify-center mr-4">
              <h2>Total Money: </h2>
              <h2>12433</h2>
            </div>
            <button className="text-md font-md px-4 py-2 bg-indigo-500 hover:bg-indigo-700 focus:outline-none text-white rounded">
              Confirm
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Confirm;

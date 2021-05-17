import React, { useState } from "react";
import { Form, Input, Select, Image } from "antd";
import * as reselect from "pages/cart/reselect/cart-reselect";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { push } from "connected-react-router";

const { TextArea } = Input;

function Confirm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState("GHN");
  const [note, setNote] = useState("");

  const checkPhoneNumber = () => {
    const arrPhoneNumber = phoneNumber.split("");

    for (let i of arrPhoneNumber) {
      if (isNaN(i) || arrPhoneNumber.length > 11) return false;
    }
    return true;
  };
  const checkSubmit = () => {
    if (name !== "" && checkPhoneNumber() && address !== "") {
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    if (checkSubmit()) {
      console.log(name, phoneNumber, address, delivery, note);
      dispatch(push("/confirm"));
    } else {
      e.preventDefault();
    }
  };

  const { dataCart, sumMoney } = useSelector(
    createStructuredSelector({
      dataCart: reselect.dataCartItemsSelector,
      sumMoney: reselect.sumMoneySelector,
      countItem: reselect.countItemsSelector,
    })
  );
  const dispatch = useDispatch();
  if (dataCart.length === 0) {
    dispatch(push("/"));
  }

  return (
    <>
      <div className="flex sm:flex-row flex-col ">
        <div className="flex-1">
          {dataCart.length > 0 && (
            <>
              {dataCart.map((item) => (
                <div className="p-4 m-4 flex items-center" id={item.id}>
                  <Image width={300} src={item.image} />
                  <div className="ml-4">
                    <h2 className="font-medium text-md">
                      Price:{" "}
                      <span className="text-xl">
                        {item.price.toLocaleString()}
                      </span>{" "}
                      <span className="text-sm text-red-500">VND</span>
                    </h2>

                    <h2 className="font-medium text-md">
                      Quantity:
                      <span className="text-xl">{item.qty}</span>{" "}
                    </h2>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="px-4 sm:mt-8 sm:mb-48 flex-1 bg-indigo-200 rounded sticky top-0">
          <h2 className="pt-4 block text-xl text-center font-bold">
            Confirm Your Information
          </h2>
          <Form
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            layout="horizontal"
            initialValues={{
              size: "large",
            }}
            size="large"
          >
            <Form.Item className="h-24" label="Your name">
              <Input onChange={(e) => setName(e.target.value)} />
              {checkSubmit() ? (
                <p className="text-sm text-red-500">
                  Please fill your name before you submit!
                </p>
              ) : null}
            </Form.Item>
            <Form.Item className="h-24" label="Your phone number">
              <Input onChange={(e) => setPhoneNumber(e.target.value)} />
              {!checkPhoneNumber() ? (
                <p className="text-sm text-red-500">
                  Please check your phone number before you submit!
                </p>
              ) : null}
            </Form.Item>
            <Form.Item className="h-24" label="Your address">
              <Input onChange={(e) => setAddress(e.target.value)} />
              {checkSubmit() ? (
                <p className="text-sm text-red-500">
                  Please fill your address before you submit!
                </p>
              ) : null}
            </Form.Item>
            <Form.Item className="h-24" label="Delivery">
              <Select
                defaultValue="GHN"
                onChange={(value) => setDelivery(value)}
              >
                <Select.Option value="GHN">Giao Hàng Nhanh (GHN)</Select.Option>
                <Select.Option value="GHTK">
                  Giao Hàng Tiết Kiệm (GHTK)
                </Select.Option>
                <Select.Option value="GHKC">
                  Giao Hàng Không Chậm (GHKC)
                </Select.Option>
              </Select>
              {checkSubmit() ? (
                <p className="text-sm text-red-500">
                  Please choose one service before you submit!
                </p>
              ) : null}
            </Form.Item>
            <Form.Item className="h-24" label="Note">
              <TextArea onChange={(e) => setNote(e.target.value)} rows={3} />
            </Form.Item>
            <div className="sm:flex sm:justify-around sm:items-center mt-16 mb-8">
              <div className="sm:flex sm:items-center sm:justify-center">
                <h2 className="text-xl">Total Money: </h2>
                <h2 className="text-lg ml-2">
                  {sumMoney.toLocaleString()}{" "}
                  <span className="text-sm text-red-500">VND</span>
                </h2>
              </div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="text-md font-md sm:px-16 px-4 py-2 bg-indigo-500 mb-4 mt-6 hover:bg-indigo-700 focus:outline-none text-white rounded"
              >
                Confirm
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Confirm;

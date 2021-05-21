import React, { useState } from "react";
import { Form, Input, Select, Image } from "antd";
import * as reselect from "pages/cart/reselect/cart-reselect";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { push } from "connected-react-router";
import { confirmOrder } from "pages/cart/actions/index";
import { updateDataConfirm } from "services/api";

const { TextArea } = Input;

function Confirm() {
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState(null);
  const [delivery, setDelivery] = useState("GHN");
  const [note, setNote] = useState("");
  const [error, setError] = useState(false);

  const checkPhoneNumber = () => {
    const arrPhoneNumber = phoneNumber.split("");

    for (let i of arrPhoneNumber) {
      if (isNaN(i) || arrPhoneNumber.length > 11) return false;
    }

    return true;
  };
  const checkSubmit = () => {
    if (
      name &&
      address &&
      delivery &&
      checkPhoneNumber() &&
      phoneNumber.length > 0
    ) {
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    if (checkSubmit()) {
      console.log(name, phoneNumber, address, delivery, note);
      updateDataConfirm(isSubmit);
      dispatch(confirmOrder());
      dispatch(push("/confirm"));
    } else {
      setError(true);
      e.preventDefault();
    }
  };

  const { dataCart, isSubmit } = useSelector(
    createStructuredSelector({
      dataCart: reselect.dataCartItemsSelector,
      isSubmit: reselect.isSubmitSelector,
    })
  );
  const sumMoney = isSubmit.reduce((a, b) => a + b.price * b.qty, 0);
  const dispatch = useDispatch();
  if (dataCart.length === 0) {
    dispatch(push("/"));
  }

  return (
    <>
      <div className="flex sm:flex-row flex-col ">
        <div className="flex-1">
          {isSubmit.length > 0 && (
            <>
              {isSubmit.map((item) => (
                <div className="p-4 m-4 flex items-center" id={item.id}>
                  <Image width={200} src={item.image} />
                  <div className="ml-4">
                    <h2 className="font-medium text-md">{item.name}</h2>
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

        <div className="px-4 sm:mt-8 sm:mb-48 flex-1 bg-main-light bg-opacity-80 rounded sticky top-0">
          <h2 className="pt-4 block text-xl text-center font-bold">
            Confirm Your Information
          </h2>
          {error && (
            <h1 className="text-sm text-center border-red-700 text-red-700 border-2 bg-red-100 py-2">
              Please fill all field!!!
            </h1>
          )}
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
            </Form.Item>
            <Form.Item className="h-24" label="Note">
              <TextArea onChange={(e) => setNote(e.target.value)} rows={3} />
            </Form.Item>
            <div className="sm:flex sm:justify-around sm:items-center mt-16 mb-8">
              <div className="sm:flex sm:items-center sm:justify-center">
                <h2 className="text-xl">Total Money: </h2>
                <h2 className="text-lg ml-2">
                  {sumMoney.toLocaleString()}{" "}
                  <span className="text-sm text-red-700">VND</span>
                </h2>
              </div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="text-md font-md sm:px-16 px-4 py-2 bg-main mb-4 mt-6 hover:bg-opacity-80 focus:outline-none text-white rounded"
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

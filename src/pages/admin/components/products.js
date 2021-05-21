import React, { useEffect, useState } from "react";
import { Image, Button, Modal, Select, Input, Form } from "antd";
import Filter from "./filter";
import { getAllProducts, deleteAProduct } from "../service/api";
import Loading from "components/loading/loading";

function Products() {
  // addNewProduct();
  const [dataAllProducts, setDataAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);

  // edit
  const { Option } = Select;
  const { Search, TextArea } = Input;
  // const [namePd, setNamePd] = useState("");
  // const [typePd, setTypePd] = useState("food");
  // const [categoryPd, setCategoryPd] = useState("latest");
  // const [pricePd, setPricePd] = useState("");
  // const [quantityPd, setQuantityPd] = useState("");
  // const [imagePd, setImagePd] = useState("");
  // const [descriptionPd, setDescriptionPd] = useState("");
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  };

  const showModal = () => {
    setIsModalVisibleEdit(true);
  };

  // modal
  const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
  const [currentItemDelete, setCurrentItemDelete] = useState(null);
  const [currentItemEdit, setCurrentItemEdit] = useState(null);

  const handleToogleEdit = (item) => {
    console.log(item);
    setCurrentItemEdit(item);
    setIsModalVisibleEdit(!isModalVisibleEdit);
  };

  const handleOkEdit = () => {
    console.log("hello");
    setIsModalVisibleEdit(false);
    // handleFlag();
  };

  // handleDelete
  const handleFlag = () => {
    setTimeout(() => {
      setFlag(!flag);
    }, 300);
  };

  const handleToggleDelete = (item) => {
    setCurrentItemDelete(item);
    setIsModalVisibleDelete(!isModalVisibleDelete);
  };
  const handleOkDelete = () => {
    deleteAProduct(currentItemDelete.id);
    setIsModalVisibleDelete(false);
    handleFlag();
  };

  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      const data = await getAllProducts();
      setDataAllProducts(data);
      setLoading(false);
    };
    callApi();
  }, [flag]);

  if (loading) return <Loading />;

  return (
    <div>
      <div>
        <Filter handleFlag={handleFlag} dataAllProducts={dataAllProducts} />
      </div>
      <div>
        <div className="flex border-l-2 justify-around items-center bg-main text-gray-100 font-medium pr-4">
          <div className="border-r-2 border-b-2 py-2 text-center w-full h-full">
            Image
          </div>
          <div className="border-r-2 border-b-2 py-2 text-center w-full h-full">
            Name
          </div>
          <div className="border-r-2 border-b-2 py-2 text-center w-full h-full">
            Quantity
          </div>
          <div className="border-r-2 border-b-2 py-2 text-center w-full h-full">
            Type
          </div>
          <div className="border-r-2 border-b-2 py-2 text-center w-full h-full">
            Category
          </div>
          <div className="border-r-2 border-b-2 py-2 text-center w-full h-full">
            Actions
          </div>
        </div>
        <div className="h-screen overflow-y-scroll">
          {dataAllProducts.length > 0 ? (
            <div className="flex flex-col flex-col-reverse">
              {dataAllProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-around items-center border-l-2 bg-transparent text-gray-100 h-48 font-normal"
                >
                  <div className="border-r-2 border-b-2 py-2 flex justify-center items-center w-full h-full">
                    <div className="h-36 w-36 overflow-hidden">
                      <Image src={item.image} />
                    </div>
                  </div>
                  <div className="border-r-2 border-b-2 py-2 w-full text-center flex items-center justify-center h-full">
                    {item.name}
                  </div>
                  <div className="border-r-2 border-b-2 py-2 text-center w-full flex items-center justify-center h-full">
                    {item.quantity}
                  </div>
                  <div className="border-r-2 border-b-2 py-2 text-center w-full flex items-center justify-center h-full">
                    {item.type}
                  </div>
                  <div className="border-r-2 border-b-2 py-2 text-center w-full flex items-center justify-center h-full">
                    {item.kind}
                  </div>
                  <div className="border-r-2 border-b-2 py-2 text-center w-full flex items-center justify-center h-full">
                    <Button
                      className="mr-4"
                      type="primary"
                      onClick={() => handleToogleEdit(item)}
                    >
                      Edit
                    </Button>
                    <Button
                      danger
                      type="primary"
                      onClick={() => handleToggleDelete(item)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2 classNam="text-center text-2xl">data not found!</h2>
          )}
        </div>
        <Modal
          title="Delete Product"
          visible={isModalVisibleDelete}
          onOk={handleOkDelete}
          onCancel={handleToggleDelete}
          okType="danger"
        >
          <h2>Are you sure want to delete {currentItemDelete?.name}</h2>
        </Modal>

        <Modal
          title="Edit Product"
          visible={isModalVisibleEdit}
          onOk={handleOkEdit}
          onCancel={() => setIsModalVisibleEdit(false)}
        >
          <Form {...layout} name="basic" initialValues={{ remember: true }}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input name product!" },
              ]}
            >
              <Input
                value={currentItemEdit?.name}
                onChange={(e) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    name: e.target.value,
                  })
                }
              />
              {console.log(currentItemEdit?.name)}
            </Form.Item>

            <Form.Item
              label="Type"
              name="Type"
              rules={[
                { required: true, message: "Please input type product!" },
              ]}
            >
              <Select
                id="Type"
                style={{ width: "100%" }}
                onChange={(val) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    type: val,
                  })
                }
                value={currentItemEdit?.type}
              >
                <Option value="drink">Drink</Option>
                <Option value="food">Food</Option>
              </Select>
              {console.log(currentItemEdit?.type)}
            </Form.Item>

            <Form.Item
              label="Category"
              name="Category"
              rules={[{ required: true, message: "Please input category!" }]}
            >
              <Select
                id="Category"
                value={currentItemEdit?.kind}
                style={{ width: "100%" }}
                onChange={(value) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    category: value,
                  })
                }
              >
                <Option value="latest">Latest</Option>
                <Option value="topselling">Top Selling</Option>
                <Option value="featured">Featured</Option>
              </Select>
              {console.log(currentItemEdit?.kind)}
            </Form.Item>

            <Form.Item
              label="Price"
              name="Price"
              rules={[{ required: true, message: "Please input name price!" }]}
            >
              <Input
                value={currentItemEdit?.price}
                onChange={(e) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    price: e.target.value,
                  })
                }
              />
              {console.log(currentItemEdit?.price)}
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="Quantity"
              rules={[
                { required: true, message: "Please input name quantity!" },
              ]}
            >
              <Input
                value={currentItemEdit?.quantity}
                onChange={(e) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    quantity: e.target.value,
                  })
                }
              />
              {console.log(currentItemEdit?.quantity)}
            </Form.Item>

            <Form.Item
              label="ImageURL"
              name="Image"
              rules={[
                { required: true, message: "Please input name quantity!" },
              ]}
            >
              <Input
                value={currentItemEdit?.image}
                onChange={(e) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    image: e.target.value,
                  })
                }
              />
              {console.log(currentItemEdit?.image)}
            </Form.Item>

            <Form.Item
              label="Description"
              name="Description"
              rules={[
                { required: true, message: "Please input type product!" },
              ]}
            >
              <TextArea
                value={currentItemEdit?.description}
                onChange={(e) =>
                  setCurrentItemEdit({
                    ...currentItemEdit,
                    description: e.target.value,
                  })
                }
                rows={4}
              />
              {console.log(currentItemEdit?.description)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default Products;

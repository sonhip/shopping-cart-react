import React, { useState } from "react";
import { Select, Input, Button, Modal, Form } from "antd";
import { addNewProduct } from "../service/api";
const { Option } = Select;
const { Search, TextArea } = Input;
const FilterComponent = (props) => {
  const { handleChange, dataAllProducts, handleFlag } = props;
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  // modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [namePd, setNamePd] = useState("");
  const [typePd, setTypePd] = useState("food");
  const [categoryPd, setCategoryPd] = useState("latest");
  const [pricePd, setPricePd] = useState("");
  const [quantityPd, setQuantityPd] = useState("");
  const [imagePd, setImagePd] = useState("");
  const [descriptionPd, setDescriptionPd] = useState("");

  // add new product
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (
      namePd &&
      typePd &&
      pricePd &&
      descriptionPd &&
      imagePd &&
      categoryPd &&
      quantityPd
    ) {
      const newPd = {
        id: dataAllProducts.length + 1,
        type: typePd,
        name: namePd,
        price: parseFloat(pricePd),
        description: descriptionPd,
        image: imagePd,
        like: false,
        rating: [],
        sale: 0,
        quantity: parseFloat(quantityPd),
        order: 0,
        kind: categoryPd,
      };
      addNewProduct(newPd);
      handleFlag();
      setIsModalVisible(false);
    } else {
      alert("please fill all field required!");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div>
        <div className="sm:h-16 bg-main-light grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:px-16 p-4">
          <div className="flex items-end mr-6">
            <label htmlFor="type" className="text-lg font-medium mr-2">
              Type:{" "}
            </label>
            <Select
              id="type"
              defaultValue="all"
              style={{ width: 120 }}
              onChange={(value) => setType(value)}
            >
              <Option value="all">All</Option>
              <Option value="food">Foods</Option>
              <Option value="drink">Drinks</Option>
            </Select>
          </div>
          <div className="flex items-end mr-12">
            <label htmlFor="category" className="text-lg font-medium mr-2">
              Category:{" "}
            </label>
            <Select
              id="category"
              defaultValue="all"
              style={{ width: 120 }}
              onChange={(value) => setCategory(value)}
            >
              <Option value="all">All</Option>
              <Option value="latest">Latest</Option>
              <Option value="topSelling">Top Selling</Option>
            </Select>
          </div>
          <div className="flex items-end mr-12">
            <label htmlFor="sort" className="text-lg font-medium mr-2">
              Sort:{" "}
            </label>
            <Select
              id="sort"
              defaultValue="default"
              style={{ width: 120 }}
              onChange={(value) => setSort(value)}
            >
              <Option value="default">Default</Option>
              <Option value="ascending">Ascending</Option>
              <Option value="descending">Descending</Option>
            </Select>
          </div>
          <div className="w-1/5">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={() => handleChange(type, category, sort)}
            />
          </div>
          <div className="ml-32 h-8">
            <Button onClick={showModal} className="h-full" type="primary">
              Add new product
            </Button>
          </div>
        </div>
        <Modal
          title="Add Product"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add"
        >
          <Form {...layout} name="basic" initialValues={{ remember: true }}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input name product!" },
              ]}
            >
              <Input onChange={(e) => setNamePd(e.target.value)} />
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
                defaultValue="food"
                style={{ width: "100%" }}
                onChange={(val) => setTypePd(val)}
              >
                <Option value="drink">Drink</Option>
                <Option value="food">Food</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Category"
              name="Category"
              rules={[{ required: true, message: "Please input category!" }]}
            >
              <Select
                id="Category"
                defaultValue="latest"
                style={{ width: "100%" }}
                onChange={(value) => setCategoryPd(value)}
              >
                <Option value="latest">Latest</Option>
                <Option value="topselling">Top Selling</Option>
                <Option value="featured">Featured</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Price"
              name="Price"
              rules={[{ required: true, message: "Please input name price!" }]}
            >
              <Input onChange={(e) => setPricePd(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="Quantity"
              rules={[
                { required: true, message: "Please input name quantity!" },
              ]}
            >
              <Input onChange={(e) => setQuantityPd(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="ImageURL"
              name="Image"
              rules={[
                { required: true, message: "Please input name quantity!" },
              ]}
            >
              <Input onChange={(e) => setImagePd(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Description"
              name="Description"
              rules={[
                { required: true, message: "Please input type product!" },
              ]}
            >
              <TextArea
                onChange={(e) => setDescriptionPd(e.target.value)}
                rows={4}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default React.memo(FilterComponent);

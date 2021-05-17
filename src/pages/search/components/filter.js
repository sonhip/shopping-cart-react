import React, { useState } from "react";
import { Select, Input, Button } from "antd";
const { Option } = Select;
function FilterComponent(props) {
  const { handleChange } = props;
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div>
      <div className="sm:h-16 bg-purple-300 grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:px-16 p-4">
        <div className="flex items-end mr-6">
          <label htmlFor="type" className="text-lg font-medium mr-2">
            Type:{" "}
          </label>
          <Select
            id="type"
            defaultValue="All"
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
            defaultValue="All"
            style={{ width: 120 }}
            onChange={(value) => setCategory(value)}
          >
            <Option value="all">All</Option>
            <Option value="latest">Latest</Option>
            <Option value="topSelling">Top Selling</Option>
          </Select>
        </div>
        <div className="flex items-end">
          <label className="text-lg font-medium mr-2" htmlFor="priceFrom">
            From:
          </label>
          <Input
            onChange={(e) => setFrom(e.target.value)}
            style={{ width: "40%" }}
            id="priceFrom"
          />
        </div>
        <div className="flex items-end">
          <label className="text-lg font-medium mr-2" htmlFor="priceTo">
            To:
          </label>
          <Input
            onChange={(e) => setTo(e.target.value)}
            style={{ width: "40%" }}
            id="priceTo"
          />
        </div>
        <div className="flex items-end mr-12">
          <label htmlFor="sort" className="text-lg font-medium mr-2">
            Sort:{" "}
          </label>
          <Select
            id="sort"
            defaultValue="Ascending"
            style={{ width: 120 }}
            onChange={(value) => setSort(value)}
          >
            <Option value="ascending">Ascending</Option>
            <Option value="descending">Descending</Option>
          </Select>
        </div>
        <div className="flex items-center">
          <Button
            onClick={() => handleChange(type, category, from, to, sort)}
            type="primary"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;

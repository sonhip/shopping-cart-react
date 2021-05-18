import React, { useState } from "react";
import { Select, Button } from "antd";
const { Option } = Select;
function FilterComponent(props) {
  const { handleChange } = props;
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("default");

  return (
    <div>
      <div className="sm:h-16 bg-purple-300 grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:px-16 p-4">
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
        <div className="flex items-center">
          <Button
            onClick={() => handleChange(type, category, sort)}
            type="primary"
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;

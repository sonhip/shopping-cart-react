import React, { useState, useEffect } from "react";
import Header from "components/header/header";
import { AiOutlineFileSearch } from "react-icons/ai";
import ListProducts from "pages/home/components/list-card/list_cards";
import FilterComponent from "./components/filter";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const data = useSelector((state) => state.searchingReducer.data);
  const loading = useSelector((state) => state.searchingReducer.loading);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    setFilter(data);
    // eslint-disable-next-line
  }, [loading]);

  const handleChange = (type, category, sort) => {
    let dataFilter = data;
    if (type !== "all") {
      dataFilter = data.filter((item) => item.type === type);
    }
    if (category !== "all") {
      dataFilter = data.filter((item) => item.kind === category);
    }
    if (sort === "ascending") {
      dataFilter = [...dataFilter].sort((a, b) => a.price - b.price);
    }
    if (sort === "descending") {
      dataFilter = [...dataFilter].sort((a, b) => b.price - a.price);
    }
    // }
    setFilter(dataFilter);
  };
  const { slug } = useParams();
  const keyword = slug.slice(8);
  return (
    <div>
      <Header />
      <div
        className="container mx-auto bg-content"
        style={{ marginTop: "65px" }}
      >
        <div className="flex h-16 items-center bg-red-200 px-16 mt-32">
          <AiOutlineFileSearch className="text-2xl" />
          <div className="text-lg font-medium ml-2">
            The result of keyword <span>"{keyword}"</span>
          </div>
        </div>
        {filter.length > 0 && keyword.length > 1 ? (
          <div>
            <div>
              <FilterComponent handleChange={handleChange} />
            </div>
            <div className="bg-indigo-200 px-8 pb-8">
              <ListProducts data={filter} loading={loading} />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <FilterComponent handleChange={handleChange} />
            </div>
            <div>Sorry, there's no result! </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchPage);

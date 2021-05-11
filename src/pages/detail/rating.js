import React, { useState, useEffect } from "react";
import { Rate, Input } from "antd";

function Rating(props) {
  const { dataDetail, hardStar } = props;
  const { TextArea } = Input;
  const [dataFilter, setDataFilter] = useState(dataDetail);

  useEffect(() => {
    setDataFilter(dataDetail);
  }, [dataDetail]);
  const filterByStar = (e) => {
    const filter = Number(e.target.value);
    const newDataRating = dataDetail.rating.filter(
      (item) => item.stars === filter
    );
    const newDataDetailFilter = { ...dataDetail, rating: newDataRating };
    setDataFilter(newDataDetailFilter);
  };
  const showAll = () => {
    setDataFilter(dataDetail);
  };
  return (
    <div>
      <div className="mt-2 border-t-2 bg-indigo-200 p-8 border-brown-300">
        <h1 className="text-center text-xl sm:text-3xl">Rating and feedback</h1>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <Rate allowHalf disabled value={hardStar} />
          </div>
          <div className="flex text-center justify-between w-full sm:w-3/5 lg:w-2/5 mt-4">
            <button
              className="px-3 py-2 sm:px-4 lg:px-5 rounded text-white rounded bg-indigo-500 hover:bg-indigo-600"
              onClick={(e) => filterByStar(e)}
              value="1"
            >
              1 star
            </button>
            <button
              className="px-3 py-2 sm:px-4 rounded text-white rounded bg-indigo-500 hover:bg-indigo-600"
              onClick={(e) => filterByStar(e)}
              value="2"
            >
              2 star
            </button>
            <button
              className="px-3 py-2 sm:px-4 rounded text-white rounded bg-indigo-500 hover:bg-indigo-600"
              onClick={(e) => filterByStar(e)}
              value="3"
            >
              3 star
            </button>
            <button
              className="px-3 py-2 sm:px-4 rounded text-white rounded bg-indigo-500 hover:bg-indigo-600"
              onClick={(e) => filterByStar(e)}
              value="4"
            >
              4 star
            </button>
            <button
              className="px-3 py-2 sm:px-4 rounded text-white rounded bg-indigo-500 hover:bg-indigo-600"
              onClick={(e) => filterByStar(e)}
              value="5"
            >
              5 star
            </button>
          </div>
        </div>
        <p
          onClick={() => showAll()}
          className="-mb-4 mt-8 sm:text-xl text-blue-500 cursor-pointer underline"
        >
          Show all
        </p>
        <div className="mt-8 border-t-2 pt-4  border-black">
          {dataFilter.rating.length > 0 ? (
            dataFilter.rating.map((item) => (
              <div className="border-2 border-brown-300 p-2 m-2 sm:mt-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full"></div>
                  <div className="sm:text-xl text-sm font-md ml-2">Users</div>
                </div>
                <div>
                  <span>
                    <Rate allowHalf disabled value={item.stars} />
                  </span>
                </div>
                <div>
                  <TextArea disabled value={item.comments} />
                </div>
              </div>
            ))
          ) : (
            <div>
              <h2 className="text-center text-xl sm:text-2xl">
                {" "}
                There's no feedback!
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Rating);

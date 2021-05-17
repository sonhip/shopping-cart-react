import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions/index";
import LayoutComponent from "../../components/layout";
import AllProducts from "./components/allProducts/all-products";
import Carousel from "components/banner/carousel";
import Pagination from "components/pagination/index";
import CarouselProduct from "components/carousel/carousel-products";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getData());
  }, [dispatch]);

  const data = useSelector((state) => state.productsReducer.dataProducts);
  const loading = useSelector((state) => state.productsReducer.loadingProducts);
  const [newDataPerPage, setNewDataPerPage] = useState([]);
  const [dataPagination, setDataPagination] = useState([]);
  useEffect(() => {
    handleChangePage(1);
    setDataPagination(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const paginate = (data, dataPerPage) => {
    const numberOfPages = Math.ceil(data.length / dataPerPage);

    const newData = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * dataPerPage;
      return data.slice(start, start + dataPerPage);
    });
    return newData;
  };
  let dataPerPage = paginate(data, 10);

  const [currentPage, setCurrentPage] = useState(0);
  const handleChangePage = (page) => {
    setNewDataPerPage(dataPerPage[page - 1]);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const dataLatestProducts = data.filter((item) => item.kind === "latest");
  const dataTopSellingProducts = data.filter(
    (item) => item.kind === "topselling"
  );
  return (
    <div>
      <div className="hidden sm:block" style={{ marginTop: 56 }}>
        <Carousel />
      </div>
      <LayoutComponent>
        <div className="bg-indigo-200 mt-16 rounded">
          <h2
            style={{ marginBottom: 0 }}
            className="text-center pt-4 font-bold text-md sm:text-xl"
          >
            {" "}
            Latest Products{" "}
          </h2>
          <CarouselProduct data={dataLatestProducts} />
        </div>
        <div className="bg-indigo-200 mt-16 rounded">
          <h2
            style={{ marginBottom: 0 }}
            className="text-center pt-4 font-bold text-md sm:text-xl mb-4"
          >
            {" "}
            Top Selling{" "}
          </h2>
          <CarouselProduct data={dataTopSellingProducts} />
        </div>

        <AllProducts data={newDataPerPage} loading={loading} />
        <Pagination
          getCurrentPage={handleChangePage}
          currentPage={currentPage}
          data={dataPagination}
        />
      </LayoutComponent>
    </div>
  );
};

export default React.memo(HomePage);

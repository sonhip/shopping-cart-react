import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, message } from "antd";
import * as api from "services/api";
import HeaderComponent from "components/header/header";
import UserRating from "./userRating";
import Loading from "components/loading/loading";
import Rating from "./rating";
import { isEmptyObject } from "helper/common";
import { useDispatch } from "react-redux";
import { addItemToCart } from "pages/cart/actions/index";
import { push } from "connected-react-router";

const { Meta } = Card;

const DetailProduct = () => {
  const [dataDetail, setDataDetail] = useState({});
  const [star, setStar] = useState(0);
  const [hardStar, setHardStar] = useState(0);
  const [comment, setComment] = useState("");
  const location = useLocation();
  const pathname = location.pathname;
  const idDetail = pathname.slice(8);
  const dispatch = useDispatch();

  useEffect(() => {
    const callApiDataDetail = async (id = idDetail) => {
      const data = await api.getDataProductById(id);
      setDataDetail(data[0]);
    };
    callApiDataDetail();
  }, [idDetail]);
  useEffect(() => {
    const calcRating = () => {
      let totalStars = 0;
      if (dataDetail.rating?.length > 0) {
        const totalRating = dataDetail.rating?.length;
        totalStars = dataDetail.rating
          .map((item) => item.stars)
          .reduce((a, b) => a + b);
        const fin = totalStars / totalRating;
        setHardStar(fin);
      } else {
        setHardStar(0);
      }
    };
    calcRating();
  }, [dataDetail]);
  const success = () => {
    message.success({
      content: "Add item to cart successfully!",
      className: "w-3/4 mt-16 md:text-xl",
    });
  };
  const successComment = () => {
    message.success({
      content: "You've just added a comment below!",
      className: "w-3/4 mt-16 md:text-xl",
    });
  };

  const handleAddItemToCart = (e, id) => {
    e.preventDefault();
    dispatch(addItemToCart(id));
    success();
  };
  const handleAddAndDirectPage = (e, id) => {
    e.preventDefault();
    dispatch(addItemToCart(id));
    dispatch(push("/checkout"));
  };

  const handleChange = (value) => {
    setStar(value);
  };
  const onChangeTextComment = (e) => {
    setComment(e.target.value);
  };

  const handleRating = async (e, id) => {
    if (star > 0 && comment.length > 0) {
      const data = {
        ...dataDetail,
        rating: [
          {
            id: idDetail,
            stars: star,
            comments: comment,
          },
          ...dataDetail.rating,
        ],
      };
      const dataDetailUpdate = await api.addNewRating(data, id);
      setDataDetail(dataDetailUpdate.data);
      setStar(0);
      setComment("");
      successComment();
    } else {
      e.preventDefault();
      alert("please rating and comment before you send!");
    }
  };

  return (
    <>
      <HeaderComponent />
      {isEmptyObject(dataDetail) ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4" style={{ marginTop: "70px" }}>
          <div className="sm:flex sm:flex-row flex-col ">
            <div className="">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={dataDetail.image} />}
              >
                <Meta title={dataDetail.name} />
              </Card>
            </div>
            <div className="flex-1 sm:ml-32 relative">
              <h2>{dataDetail.name}</h2>
              <label>Description:</label>
              <p className="sm:overflow-ellipsis overflow-hidden sm:h-32 h-16 ">
                {dataDetail.description}
              </p>
              <h1 className="sm:absolute sm:bottom-8 sm:text-2xl text-xl font-bold">
                Price: {parseFloat(dataDetail.price).toLocaleString()}{" "}
                <span className="text-sm text-red-500">VND</span>
              </h1>
              <div className="sm:absolute sm:bottom-0 sm:left-0">
                <button
                  className="bg-main hover:bg-main-light text-white mr-4 px-4 py-2 rounded mt-2 focus:outline-none"
                  onClick={(e) => handleAddItemToCart(e, dataDetail.id)}
                >
                  Add to cart
                </button>
                <button
                  onClick={(e) => handleAddAndDirectPage(e, dataDetail.id)}
                  className="bg-main hover:bg-main-light text-white px-4 py-2 rounded mt-2 focus:outline-none"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div>
            <UserRating
              star={star}
              handleChange={handleChange}
              onChangeTextComment={onChangeTextComment}
              handleRating={handleRating}
              comment={comment}
              dataDetail={dataDetail}
            />
            <Rating dataDetail={dataDetail} hardStar={hardStar} />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(DetailProduct);

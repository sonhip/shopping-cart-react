import React, { useState, useEffect } from "react";
import HeaderComponent from "components/header/header";
import { useLocation } from "react-router-dom";
import { Rate, Card, Input, message } from "antd";
import * as api from "services/api";
import Loading from "components/loading/loading";
import Rating from "./rating";
import { isEmptyObject } from "helper/common";
import { useDispatch } from "react-redux";
import { addItemToCart } from "pages/cart/actions/index";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const { Meta } = Card;
const { TextArea } = Input;

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
                  className="bg-indigo-500 hover:bg-indigo-600 text-white mr-4 px-4 py-2 rounded mt-2 focus:outline-none"
                  onClick={(e) => handleAddItemToCart(e, dataDetail.id)}
                >
                  Add to cart
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded mt-2 focus:outline-none">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-16">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                <div className="text-xl font-md ml-2">Users</div>
              </div>
              <div>
                <span>
                  <Rate
                    tooltips={desc}
                    onChange={(val) => handleChange(val)}
                    onClick={(val) => handleChange(val)}
                    value={star}
                  />
                  {star ? (
                    <span className="ant-rate-text">{desc[star - 1]}</span>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div>
                <TextArea
                  showCount
                  maxLength={100}
                  onChange={(e) => onChangeTextComment(e)}
                  value={comment}
                />
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded mt-2 focus:outline-none"
                  type="submit"
                  onClick={(e) => handleRating(e, dataDetail.id)}
                >
                  Send
                </button>
              </div>
            </div>
            <Rating dataDetail={dataDetail} hardStar={hardStar} />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(DetailProduct);

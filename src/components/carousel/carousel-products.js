import React from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { Card, message } from "antd";
import "./carousel-products.scss";
import { Link } from "react-router-dom";
import { addItemToCart } from "pages/cart/actions/index";

const Auto = (props) => {
  const { data } = props;
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          height: "33px",
          width: "33px",
          right: "0%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          height: "33px",
          width: "33px",
          left: "0%",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const success = () => {
    message.success({
      content: "Add item to cart successfully!",
      className: "w-3/4 mt-16 md:text-xl",
    });
  };
  const handleAddItemToCart = (e, id) => {
    e.preventDefault();
    dispatch(addItemToCart(id));
    success();
  };
  return (
    <div className="">
      <div className="carousel_pd p-8 rounded bg-main-light">
        <Slider {...settings}>
          {data.map((item) => (
            <Link
              to={`/detail/${item.id}`}
              key={item.id}
              className=" flex justify-center items-center "
            >
              <div className="mx-auto w-60 md:w-36 lg:w-64">
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <div className="flex flex-col overflow-hidden items-center">
                    <div className=" truncate font-bold text-sm text-left sm:text-md">
                      {item.name}
                    </div>
                    <button
                      onClick={(e) => handleAddItemToCart(e, item.id)}
                      className="bg-main-light hover:bg-main px-3 py-2 rounded text-white mt-2 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Auto;

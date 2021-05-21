import React, { useState } from "react";
import "./list_card.scss";
import Loading from "components/loading/loading";
import { useDispatch } from "react-redux";
import * as actions from "pages/cart/actions/index";
import { message } from "antd";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { push } from "connected-react-router";

const ListCards = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  //customize msg from antd
  const success = () => {
    message.success({
      content: "Add item to cart successfully!",
      className: "w-3/4 mt-16 md:text-xl",
    });
  };

  const handleAddItemToCart = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(actions.addItemToCart(id));
    success();
  };
  const handleLike = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLike(!like);
  };

  const { loading, data } = props;
  if (loading) {
    return <Loading />;
  }
  const gotoDetailPage = (id) => {
    dispatch(push(`/detail/${id}`));
    // to={`detail/${item.id}`}
  };
  return (
    <>
      {data?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((item) => {
            return (
              <Link
                onClick={() => gotoDetailPage(item.id)}
                class="home-product-item__wrap-link sm:p-2"
                href="!#"
                key={item.id}
              >
                <div class="home-product-item">
                  <div
                    class="home-product-item__img"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <h4 class="home-product-item__name text-xl text-center font-medium">
                    {item.name}
                  </h4>
                  <div class="home-product-item__price mt-0">
                    <span class="home-product-item__price-old text-md sm:text-xl font-medium ">
                      1,200,000đ
                    </span>
                    <span class="home-product-item__price-current text-xl sm:text-2xl text-black">
                      {parseFloat(item.price).toLocaleString()}
                      <span className="text-sm text-red-500">VND</span>
                    </span>
                  </div>
                  <div class="home-product-item__action">
                    <span
                      onClick={(e) => handleLike(e)}
                      class="home-product-item__like home-product-item__like--liked"
                    ></span>
                    <div class="home-product-item__rating">
                      <Rate disabled allowHalf defaultValue={4.5} />
                    </div>
                  </div>
                  <div class="home-product-item__origin">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddItemToCart(e, item.id);
                      }}
                      class="home-product-item__brand focus:outline-none text-white text-sm px-3 mb-2 py-1 bg-main-light rounded hover:bg-main"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div class="home-product-item_favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                  </div>
                  <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">10%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>Not found data</h1>
        </div>
      )}
    </>
  );
};

export default React.memo(ListCards);

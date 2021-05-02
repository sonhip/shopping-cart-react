import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "./list_card.scss";
import Loading from "components/loading/loading";
import { useDispatch } from "react-redux";
import * as actions from "pages/cart/actions/index";
import { message } from "antd";
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
    dispatch(actions.addItemToCart(id));
    success();
  };
  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);
  };

  const { loading, data } = props;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {data.map((item) => {
            return (
              <a class="home-product-item__wrap-link" href="!#" key={item.id}>
                <div class="home-product-item">
                  <div
                    class="home-product-item__img"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <h4 class="home-product-item__name">{item.name}</h4>
                  <div class="home-product-item__price">
                    <span class="home-product-item__price-old">1,200,000đ</span>
                    <span class="home-product-item__price-current">
                      {parseFloat(item.price).toLocaleString()}
                    </span>
                  </div>
                  <div class="home-product-item__action">
                    <span
                      onClick={(e) => handleLike(e)}
                      class="home-product-item__like home-product-item__like--liked"
                    >
                      <AiFillHeart
                        className={`${
                          like
                            ? "home-product-item__like-icon-fill"
                            : "home-product-item__like-icon-empty"
                        } far fa-heart`}
                      />
                    </span>
                    <div class="home-product-item__rating">
                      <BsStarFill className="home-product-item__star--gold fas fa-star" />
                      <BsStarFill className="home-product-item__star--gold fas fa-star" />
                      <BsStarFill className="home-product-item__star--gold fas fa-star" />
                      <BsStarFill className="home-product-item__star--gold fas fa-star" />
                      <BsStarFill className="fas fa-star" />
                    </div>
                    <div class="home-product-item__sold">88 đã bán</div>
                  </div>
                  <div class="home-product-item__origin">
                    <button
                      onClick={(e) => {
                        handleAddItemToCart(e, item.id);
                      }}
                      class="home-product-item__brand text-white text-sm px-3 mb-2 py-1 bg-indigo-500 rounded hover:bg-indigo-700"
                    >
                      Add to cart
                    </button>
                    <span class="home-product-item__origin-name">Nhật Bản</span>
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
              </a>
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

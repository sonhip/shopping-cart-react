import React from "react";
import { Rate, Input } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const { TextArea } = Input;

function UserRating(props) {
  const {
    comment,
    handleRating,
    dataDetail,
    star,
    handleChange,
    onChangeTextComment,
  } = props;

  return (
    <>
      <div className="mt-16">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-main rounded-full"></div>
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
            className="bg-main hover:bg-main-light text-white px-4 py-2 rounded mt-2 focus:outline-none"
            type="submit"
            onClick={(e) => handleRating(e, dataDetail.id)}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(UserRating);

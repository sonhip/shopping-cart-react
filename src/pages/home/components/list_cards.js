import React from "react";
import { Card } from "antd";

const ListCards = () => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <button className="mt-4 text-white text-md px-4 w-full py-2 bg-indigo-500 rounded hover:bg-indigo-700 ">
            Ad to cart
          </button>
        </Card>
      </div>
    </>
  );
};

export default React.memo(ListCards);

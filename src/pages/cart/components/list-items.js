import React from "react";
import { Image, InputNumber, Button } from "antd";

function ListItems(props) {
  const { handleChangeQty, handleDeleteItem, dataCart } = props;
  return (
    <>
      <div className="mb-8 px-4">
        {dataCart.length > 0
          ? dataCart.map((item) => {
              return (
                <div className="flex flex-col sm:flex-row p-8">
                  <div
                    key={item.id}
                    className="sm:flex-1 sm:flex sm:justify-between"
                  >
                    <div>
                      <Image
                        preview={true}
                        className=""
                        width={200}
                        src={item.image}
                      />
                    </div>
                    <div className="sm:flex-1 sm:ml-32">
                      <h1 className="text-xl">{item.name}</h1>
                      <h2>
                        Price: {parseFloat(item.price).toLocaleString()}{" "}
                        <span className="text-md text-red-500">
                          <span className="text-xs text-red-500">VND</span>
                        </span>
                      </h2>
                      <h2 className="sm:mb-8">
                        Money: {(item.price * item.qty).toLocaleString()}{" "}
                        <span className="text-md text-red-500">
                          <span className="text-xs text-red-500">VND</span>
                        </span>
                      </h2>
                      <InputNumber
                        min={1}
                        max={10}
                        defaultValue={item.qty}
                        onChange={(val) => handleChangeQty(item.id, val)}
                      />
                      <p>
                        <Button
                          danger
                          className="mt-2"
                          type="dashed"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Remove
                        </Button>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-start sm:ml-16 h-32 overflow-hidden">
                    <h2 className="text-xl">Description</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default React.memo(ListItems);

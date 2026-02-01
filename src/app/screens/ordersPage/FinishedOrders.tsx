import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrieveFinishedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/orders";

// Redux Slice & Selector
const finishedOrderRetrivier = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);

export default function FinishedOrders() {
  const { finishedOrders } = useSelector(finishedOrderRetrivier);
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className="orders-name-price">
                      <img src={imagePath} className="order-dish-img" />

                      <p className="title-dish">{product.productName}</p>

                      <Box className="price-box">
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box
                className={"total-price-box"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box className={"box-total"}>
                  <p className="product-info">Product price</p>
                  <p className="product-info-price">
                    ${order.orderTotal - order.orderDelivery}
                  </p>

                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                  />

                  <p className="product-info">Delivery cost</p>
                  <p className="product-info-price">${order.orderDelivery}</p>

                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                  />

                  <p className="product-info">Total</p>
                  <p className="product-info-price">${order.orderTotal}</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!finishedOrders ||
          (finishedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src={"/icons/noimage-list.svg"}
                style={{ width: 300, height: 700 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}

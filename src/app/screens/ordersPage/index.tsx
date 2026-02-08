import React, { useState, SyntheticEvent, useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProcessOrders from "./ProcessOrders";
import PausedOrders from "./PausedOrders";
import FinishedOrders from "./FinishedOrders";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import "../../../css/order.css";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Order, OrderInquiry } from "../../../lib/types/orders";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobals";
import { useHistory } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";

// Redux Slice & Selector
const actionDispach = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispach(useDispatch());
  const { orderBuilder, authMember } = useGlobals();
  const history = useHistory();
  const [value, setValue] = useState("1");
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => {
        console.log("PAUSE RESPONSE 👉", data);
        setPausedOrders(data);
      })
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => {
        console.log("PROCESS RESPONSE 👉", data);
        setProcessOrders(data);
      })
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => {
        console.log("FINISH RESPONSE 👉", data);
        setFinishedOrders(data);
      })
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  /** HANDLERS **/

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!authMember) history.push("/");
  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>

            <Stack className="order-main-content">
              <PausedOrders setValue={setValue} />
              <ProcessOrders setValue={setValue} />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  src={
                    authMember?.memberImage
                      ? `${serverApi}/${authMember.memberImage}`
                      : "/icons/default-user.svg"
                  }
                  className="order-user-avatar"
                />
                <div className="order-user-icon-box">
                  <img
                    src={
                      authMember?.memberType === MemberType.STORE
                        ? "/icons/restaurant.svg"
                        : "/icons/user-badge.svg"
                    }
                    className="order-user-prof-img"
                  />
                </div>
              </div>

              <span className="order-user-name">{authMember?.memberNick}</span>
              <span className="order-user-prof">{authMember?.memberType}</span>
            </Box>

            <Box className="liner"></Box>
            <Box className="order-user-address">
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <span>
                {authMember?.memberAddress
                  ? authMember.memberAddress
                  : "Do not exist"}
              </span>
            </Box>
          </Box>

          <Box className="order-payment-info">
            <Box className="order-card-number">
              <span>Card number : 5243 4090 2002 7495</span>
            </Box>
            <Box className="order-card-info">
              <div className="card-exp">
                <span>7/24</span>
              </div>
              <div className="card-cvv">
                <span>CVV : 010</span>
              </div>
            </Box>
            <Box className="order-card-holder">
              <span>Justin Robertson</span>
            </Box>
            <Box className="order-card--types">
              <img src="/icons/master-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/visa-card.svg" alt="" />
              <img src="/icons/western-card.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

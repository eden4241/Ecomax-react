import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: rgba(12, 17, 39, 1);
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
            <Box>
              <img width={"40px"} src={"/icons/ecomax.svg"} />
              <span className="brand-text">Ecomax</span>
            </Box>
            <Box className={"foot-desc-txt"}>
              Corporate clients and leisure travelers has been relying on
              Groundlink for dependable safe, and professional chauffeured car
              service in major cities across World. Indeed it has been more than
              one decade and five years that Groundlink
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.png"} />
              <img src={"/icons/twitter.png"} />
              <img src={"/icons/vkChat.png"} />
              <img src={"/icons/linkedin.png"} />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Useful Links</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  {authMember && <Link to="/orders">Orders</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <span>Location:</span>
                    <div>Busan, South Korea</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Phone:</span>
                    <div>+971 4 554 7777</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Email:</span>
                    <div>info@ecomax.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Hours:</span>
                    <div>Mon - Fri: 9:00 - 17:00</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}

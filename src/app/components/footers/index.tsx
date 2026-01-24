import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #343434;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers style={{ background: "rgba(12, 17, 39, 1)" }}>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
            <Box className={"foot-category-title"}>
              About Us
            </Box>
            <Box className={"foot-desc-txt"}>
              Corporate clients and leisure travelers has
              been relying on Groundlink for dependable
              safe, and professional chauffeured car
              service in major cities across World. Indeed
              it has been more than one decade and five
              years that Groundlink
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.png"} alt="Facebook" />
              <img src={"/icons/twitter.png"} alt="Twitter" />
              <img src={"/icons/vkChat.png"} alt="VK Chat" />
              <img src={"/icons/linkedin.png"} alt="LinkedIn" />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Bo'limlar</Box>
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
                    <div>+82 10 1234 5678</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Email:</span>
                    <div>ecomax@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Hours:</span>
                    <div>Visit 24 hours</div>
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

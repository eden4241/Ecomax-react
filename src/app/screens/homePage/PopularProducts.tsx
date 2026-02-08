import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardOverflow } from "@mui/joy";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrievePopularProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

// Redux Slice & Selector
const popularProductsRetrivier = createSelector(
  retrievePopularProducts,
  (popularProducts) => ({ popularProducts }),
);

export default function PopularProducts() {
  const { popularProducts } = useSelector(popularProductsRetrivier);
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Products</Box>
          <Stack className="cards-frame">
            {popularProducts.length !== 0 ? (
              popularProducts.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Stack className="product-card">
                      <Card className="card">
                        <CardCover>
                          <img src={imagePath} alt="" />
                        </CardCover>
                      </Card>
                      <Stack className="product-detail">
                        <CardContent sx={{ justifyContent: "flex-end", flexDirection: "column" }}>
                          <Stack
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              level="h2"
                              fontSize={"lg"}
                              textColor="rgba(7, 28, 31, 1)"
                              mb={1}
                              mt={2}
                            >
                              {product.productName}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: "md",
                                color: "neutral.300",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              {product.productViews}
                              <VisibilityIcon
                                sx={{ fontSize: 25, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                          <Stack justifyContent={"space-between"}>
                            <Typography
                              level="h2"
                              fontSize={"lg"}
                              textColor="rgba(7, 28, 31, 1)"
                            
                              
                            >
                              ${product.productPrice}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Stack>
                    </Stack>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

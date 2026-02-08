import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "../../components/divider";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrieveNewProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";

// Redux Slice & Selector
const newProductsRetrivier = createSelector(retrieveNewProducts, (newProducts) => ({
  newProducts,
}));

export default function NewProducts() {
  const { newProducts } = useSelector(newProductsRetrivier);
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">New Products</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newProducts.length !== 0 ? (
                newProducts.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.OTHER
                      ? product.productVolume + "l"
                      : product.productSize + " size";
                  return (
                    <Card key={product._id} variant="outlined" className="card">
                      <CardOverflow>
                        {/* <div className="product-sale">{sizeVolume}</div> */}
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className="title">
                              {product.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className="price">
                              ${product.productPrice}
                            </Typography>
                          </Stack>
                          <Stack>
                            <Typography className="views">
                              {product.productViews}
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

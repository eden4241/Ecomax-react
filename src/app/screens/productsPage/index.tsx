import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Products from "./Products";

import "../../../css/products.css";
import ChosenProducts from "./ChosenProducts";
import { CartItem } from "../../../lib/types/search";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();

  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProducts onAdd = {onAdd}/>
        </Route>
        <Route path={`${products.path}`}>
          <Products onAdd = {onAdd}/>
        </Route>
      </Switch>
    </div>
  );
}

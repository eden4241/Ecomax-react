import React from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularProducts from "./PopularProducts";
import NewProducts from "./NewProducts";
import Events from "./Events";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";

export default function HomePage() {
    return <div className={"homePage"}>
      <Statistics />
      <PopularProducts />
      <NewProducts />
      <Events />
      <Advertisement />
      <ActiveUsers />
    </div>;
  }


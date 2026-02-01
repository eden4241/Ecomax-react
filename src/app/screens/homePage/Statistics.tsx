import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <img src="/icons/560.svg" alt="good-review" />
            <Box className="static-num">560</Box>
            <Box className="static-text">Good Reviews</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C08D" />
          <Stack className="static-box">
            <img src="/icons/branch.svg" alt="organic-branch" />
            <Box className="static-num">197</Box>
            <Box className="static-text">Organic Branch</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C08D" />
          <Stack className="static-box">
            <img src="/icons/plant.svg" alt="cultivator-land" />
            <Box className="static-num">268</Box>
            <Box className="static-text">Cultivator Land</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C08D" />
          <Stack className="static-box">
            <img src="/icons/hand.svg" alt="total-consumers" />
            <img src="/icons/handmain.svg" alt="total-consumers" />
            <Box className="static-num">340</Box>
            <Box className="static-text">Total Consumers</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

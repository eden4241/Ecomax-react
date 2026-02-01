import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { CssVarsProvider } from "@mui/joy";

import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

// Redux Slice & Selector
const topUsersRetrivier = createSelector(
  retrieveTopUsers,
  (topUsers) => ({ topUsers })
);

export default function ActiveUsers() {
  const {topUsers} = useSelector(topUsersRetrivier)
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`
                  return (
                    <Card key={member._id} variant="outlined" className="card">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <Typography className="member-nickname">
                        {member.memberNick}
                      </Typography>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data"> No active users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

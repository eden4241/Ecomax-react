import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavbar() {
    const authMember = null;
    const location = useLocation();
    const pageTitle = location.pathname === '/products' ? 'Shop' : location.pathname.split('/').pop() || 'Page';

    return <div className="other-navbar">
        <div className="navbar-top-section">
            <Container sx={{ mt: "55px", height: "102px" }}>
                <Stack
                    sx={{ height: "102px" }}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}>
                    <NavLink to="/" className="logo-link">
                        <Stack
                            flexDirection={"row"}
                            alignItems={"center"}
                            spacing={2}
                        >
                            <Box>
                                <img src="/icons/favicon.svg" alt="Ecomax Logo" />
                            </Box>
                            <Box className="ecomax-logo-text">
                                Ecomax
                            </Box>
                        </Stack>
                    </NavLink>
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        minWidth={"700px"}
                        alignItems={"center"}
                    >
                        <Box>
                            <NavLink to="/" className="hover-line" activeClassName="underline">Home</NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/products" className="hover-line" activeClassName="underline">Products</NavLink>
                        </Box>
                        {authMember ? (
                            <Box>
                                <NavLink to="/orders" className="hover-line" activeClassName="underline">Orders</NavLink>
                            </Box>
                        ) : null}
                        {authMember ? (
                            <Box>
                                <NavLink to="/member-page" className="hover-line" activeClassName="underline">My Page</NavLink>
                            </Box>
                        ) : null}
                        <Box>
                            <NavLink to="/help" className="hover-line" activeClassName="underline">Help</NavLink>
                        </Box>
                        <Basket />
                        {!authMember ? (
                            <Button variant="contained" className="login-button" >
                                Login
                            </Button>
                        ) : (<img
                            className="user-image"
                            src="/icons/default-user.svg"
                            alt="Default user"
                            aria-haspopup={"true"} />)}
                    </Stack>
                </Stack>
            </Container>
        </div>
        <div className="bottom-section">
            <Container>
                <Stack className="page-title-section" spacing={1}>
                    <Typography className="page-title">
                        {pageTitle}
                    </Typography>
                    <Typography className="breadcrumb">
                        Home &gt; {pageTitle}
                    </Typography>
                </Stack>
            </Container>
        </div>
    </div>;
}
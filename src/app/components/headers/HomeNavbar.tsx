import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function HomeNavbar() {
    const authMember = null;
    return <div className="home-navbar">
        <div className="navbar-top-section ">
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
                        <Button variant="contained" className="login-button">
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
        <Container sx={{ mt: "55px", height: "642px" }}>
            <Stack className="hero-content-section" flexDirection={"row"} spacing={4} alignItems={"center"}>
                <Stack spacing={3}>
                    <Box className="genuine-products-text">
                        <img src="/icons/herb.svg" alt="Apple icon" className="genuine-icon" />
                        <span>100% genuine Products</span>
                    </Box>
                    <Typography className="hero-title">
                        <Box component="span" className="hero-title-line1">Tasty & Healthy</Box>
                        <Box component="span" className="hero-title-line2">Organic Food</Box>
                    </Typography>
                    <Button variant="contained" className="signup-button">
                        SIGN UP
                    </Button>
                </Stack>
                <Stack className="hero-image-container">
                    <img src="/img/banner2.png" alt="Hero" className="hero-image" />
                </Stack>
            </Stack>
        </Container>
        </div>
    </div>;
}
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@mui/material";

import "../App.css";

const pages = [
  "Inicio",
  "Introducción",
  "Desarrollo",
  "Análisis",
  "Dashboard",
  "Modelo ML",
  "Integrantes",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = pages.map((page) =>
        document.getElementById(page.toLowerCase())
      );
      const currentPosition = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            currentPosition >= sectionTop &&
            currentPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(pages[i].toLowerCase());
            break;
          }
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <AppBar position="fixed" id="navbar" style={{ boxShadow: "none" }}>
        <Container>
          <Toolbar disableGutters>
            <Icon style={{ width: 60, height: 60 }}>
              <img src="./logo.png" alt="Logo de la empresa" width="100%" />
            </Icon>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiMenuItem-root": {
                    fontSize: "1.5rem",
                    padding: "16px 24px",
                    width: "1200px",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      scrollToSection(page.toLowerCase());
                    }}
                  >
                    <Typography textAlign="center" id="font">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => scrollToSection(page.toLowerCase())}
                  className={`btn-pages ${
                    activeSection === page.toLowerCase() ? "active" : ""
                  }`}
                  sx={{
                    my: 2,
                    color: "grey",
                    display: "block",
                    fontFamily: "Proxima Nova Semibold, Helvetica, sans-serif",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;

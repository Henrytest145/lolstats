import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from 'react';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";

import logo from "../../assets/logo.png";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "100%",
          width: "100%",
          border: "none",
          outline: "none",
          boxShadow: "none", // Elimina sombras globalmente
        },
        containedPrimary: {
          // Estilo para variante primaria
          backgroundColor: "#E23E57",
          color: "#c1c1c1",          
          '&:hover': {
            backgroundColor: "#df2844",      
            borderBottom: "solid white 4px",
            color: "white",
          },
          '&:focus': {
            backgroundColor: "#df2844",
            borderBottom: "solid white 4px",
            outline: "none",
          }
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#e23e57",
      light: "#e5546a",
      dark: "#df2844",
    },
    text: {
      primary: "#c1c1c1",
      secondary: "white",
    },
  },
});

function Nav() {
  // Usamos el tipo string para `activeButton` y `setActiveButton` es una función que acepta un string
  const [activeButton, setActiveButton] = useState<string>('home');

  // `buttonName` también es un string
  const handleButtonClick = (buttonName: string): void => {
    setActiveButton(buttonName);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar
          position="relative"
          sx={{ backgroundColor: "#E23E57", height: "100vh", padding: 0 }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              padding: 0,
              "&.MuiToolbar-root": {
                // Sobrescribe padding para MuiToolbar-root
                padding: 0,
              },
            }}
          >
            <Box display="flex" alignItems="center" sx={{ width: "100%", justifyContent: "center" }}>
              <IconButton size="small">
                <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
              </IconButton>
              <Typography
                variant="h4"
                sx={{ ml: 2, fontFamily: "Roboto, sans-serif" }}
              >
                MARCA
              </Typography>
            </Box>
            <Box
              display={"flex"}
              sx={{ height: "100%", width: "100%", flexDirection: "column" }}
            >
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('home')}
                sx={{
                  color: activeButton === 'home' ? 'white' : '',
                  backgroundColor: activeButton === 'home' ? '#df2844' : '#E23E57',
                  borderBottom: activeButton === 'home' ? 'solid white 4px' : 'none',
                }}
              >
                Inicio
              </Button>
              <Button
                component={Link}
                to="/Champions"
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('champions')}
                sx={{
                  color: activeButton === 'champions' ? 'white' : '',
                  backgroundColor: activeButton === 'champions' ? '#df2844' : '#E23E57',
                  borderBottom: activeButton === 'champions' ? 'solid white 4px' : 'none',
                }}
              >
                CHAMPIONS
              </Button>
              <Button
                component={Link}
                to="/Ranking"
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('ranking')}
                sx={{
                  color: activeButton === 'ranking' ? 'white' : '',
                  backgroundColor: activeButton === 'ranking' ? '#df2844' : '#E23E57',
                  borderBottom: activeButton === 'ranking' ? 'solid white 4px' : 'none',
                }}
              >
                RANKING
              </Button>
              <Button
                component={Link}
                to="/Stats"
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('stats')}
                sx={{
                  color: activeButton === 'stats' ? 'white' : '',
                  backgroundColor: activeButton === 'stats' ? '#df2844' : '#E23E57',
                  borderBottom: activeButton === 'stats' ? 'solid white 4px' : 'none',
                }}
              >
                STATS
              </Button>
              <Button
                component={Link}
                to="/Patch"
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('patch')}
                sx={{
                  color: activeButton === 'patch' ? 'white' : '',
                  backgroundColor: activeButton === 'patch' ? '#df2844' : '#E23E57',
                  borderBottom: activeButton === 'patch' ? 'solid white 4px' : 'none',
                }}
              >
                PATCH
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    </ThemeProvider>
  );
}

export default Nav;

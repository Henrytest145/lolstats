import { Drawer, Box, Container, Grid2 } from '@mui/material';
import Nav from "../nav/Nav";
import { LayoutProps } from "../../types/layout";

const Layout: React.FC<LayoutProps> = ({ children }) => {  
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: "20rem", height: "100vh" }}
        PaperProps={{
          sx: { width: "20rem", backgroundColor: "red", height: "100vh" },
        }}
      >
        <Nav />
      </Drawer>

      <Grid2 container sx={{ width: "100%", backgroundColor:'#F9F9F9F9' }}>
        <Grid2 size={12}>
          <Container sx={{ flexGrow: 1, padding: 2, height: "auto" }}>
            <Box sx={{ height: "auto", width: "100%" }}>{children}</Box>
          </Container>
        </Grid2>
        <Grid2 size={12}>
          <Box sx={{ backgroundColor: "#2D101A", height: "200px" }}>
            <Container sx={{ color: "white" }}>Footer</Container>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Layout;

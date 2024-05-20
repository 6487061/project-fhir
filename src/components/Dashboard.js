import React from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  ButtonBase,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import BarChartIcon from "@mui/icons-material/BarChart";
import backgroundImage from "../assets/background.png";
import fhirLogo from "../assets/icon1.png";
import patientsIcon from "../assets/icon2.png";
import searchIcon from "../assets/icon3.png";
import statisticsIcon from "../assets/icon4.png";

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#082F49",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            FHIR Dashboard
          </Typography>
          <Button color="inherit" style={{ marginLeft: "auto" }}>
            Sign in or sign up
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#082F49",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Patient List" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            width: "100%",
            height: "300px",
            background: `url(${backgroundImage}) no-repeat center center`,
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={fhirLogo}
              alt="FHIR Logo"
              style={{ width: "100px", marginRight: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "black",
                  textAlign: "left",
                }}
              >
                FHIR
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Dashboard
              </Typography>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <ButtonBase
              sx={{
                width: 200,
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <img
                src={patientsIcon}
                alt="Patients"
                style={{
                  width: "75px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">Patients</Typography>
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              sx={{
                width: 200,
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <img
                src={searchIcon}
                alt="Search"
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">Search</Typography>
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              sx={{
                width: 200,
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <img
                src={statisticsIcon}
                alt="Statistics"
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h6">Statistics</Typography>
            </ButtonBase>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, color: "#999" }}>
          FHIR Dashboard ©2024 Created by 8people
        </Typography>
        <Typography variant="body2" sx={{ color: "#999" }}>
          Using HL7 FHIR Standards, UCL CS COMP0016 Project for GOSH DEIVE and
          NHS England
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: "#009",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Click here to clear local FHIR data cache
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;

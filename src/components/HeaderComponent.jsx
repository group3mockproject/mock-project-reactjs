import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const HeaderComponent = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Toolbar
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="p"
        noWrap
        component="p"
        sx={{
          color: "black",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick} // Thêm sự kiện click mở Menu
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ cursor: "pointer", color: "blue" }} />
          </IconButton>
        )}
        <Typography variant="subtitle1">English</Typography>
      </Typography>

      <Typography
        variant="subtitle1"
        noWrap
        component="subtitle1"
        sx={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <Avatar sx={{ bgcolor: "orange" }}>N</Avatar>
        <Typography
          variant="subtitle1"
          component="subtitle1"
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            color: "black",
          }}
        >
          <p style={{ margin: 0 }}>Admin</p>
          <p style={{ margin: 0 }}>TID: 203948020</p>
        </Typography>
      </Typography>
    </Toolbar>
  );
};

export default HeaderComponent;

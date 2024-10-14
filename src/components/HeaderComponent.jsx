import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
const HeaderComponent = () => {
  return (
    <div>
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
              <MenuIcon sx={{ cursor: "pointer", color: "blue" }} />
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
    </div>
  )
}

export default HeaderComponent

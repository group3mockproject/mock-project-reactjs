import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const HeaderComponent = ({onMenuClick}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isAuth, setIsAuth] = useState(false);

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
                        sx={{mr: 2}}
                    >
                        <MenuIcon sx={{cursor: "pointer", color: "blue"}}/>
                    </IconButton>
                )}
                <Typography variant="subtitle1">English</Typography>
            </Typography>

            <Typography
                variant="subtitle1"
                noWrap
                component="subtitle1"
                sx={{display: "flex", gap: "10px", alignItems: "center"}}
            >
                {isAuth ?
                    <>
                        <Avatar sx={{bgcolor: "orange"}}>N</Avatar>
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
                            <p style={{margin: 0}}>Admin</p>
                            <p style={{margin: 0}}>TID: 203948020</p>
                        </Typography>
                    </>
                    :
                    <Button
                        variant="subtitle1"
                        component="subtitle1"
                        sx={{
                            backgroundColor: "#3d92ca",
                            display: "flex",
                            flexDirection: "column",
                            margin: 0,
                            color: "white",
                        }}
                    >
                        <Link to={"/login"}>Log in</Link>
                    </Button>
                }
            </Typography>
        </Toolbar>
    );
};

export default HeaderComponent;

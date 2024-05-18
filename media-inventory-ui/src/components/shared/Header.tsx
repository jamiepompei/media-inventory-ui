import { AppBar, Toolbar } from "@mui/material"
import NavigationLink from "../shared/NavigationLink"

const Header = () => {
   return ( 
   <AppBar
    sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
        <Toolbar>
            <div>
                <NavigationLink>

                </NavigationLink>
            </div>
        </Toolbar>
    </AppBar>
    )

}

export default Header;
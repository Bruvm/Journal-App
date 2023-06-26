import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"


const drawerWidth = 230

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
            <NavBar drawerWidth={drawerWidth}/>

            <SideBar drawerWidth="drawerWidth"/>
            {/* sidebar */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` } }}
            >
                <Toolbar/>

                {children}
            </Box>
        </Box>
    )
}

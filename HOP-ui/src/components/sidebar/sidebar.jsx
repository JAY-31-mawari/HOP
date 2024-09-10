import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CollapseIcon from '../../assets/SideBar/Separate.png';

export default function SideBar({ SideBarData }) {

    const [openSideBar, SetOpenSideBar] = useState(false)
    const [open, setOpen] = useState(SideBarData.map((val) => false))

    const handleClick = (index) => {
        setOpen(open.map((val, i) => (i === index ? true : false)))
    }

    return (
        <>
            <Box
                bgcolor="#212C9F"
                sx={{
                    display:'table-header-group',
                    width: "30%"
                }}
            >
                <List>
                    <ListItemButton onClick={() => SetOpenSideBar(!openSideBar)}>
                        <img src={CollapseIcon} alt="collapse-icon" />
                    </ListItemButton>
                    {SideBarData.map((element, index) => (
                        <ListItemButton
                            key={index}
                            onClick={() => handleClick(index)}
                            style={{ margin: 0, padding: 0 }}>
                            <img src={element?.icon} alt={element?.name} style={{ height: '70px', width: '85px' }} />
                            {openSideBar && <ListItemText style={{color: open[index] ? 'white' : 'black'}}>{element?.name}</ListItemText>}
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </>
    )
}
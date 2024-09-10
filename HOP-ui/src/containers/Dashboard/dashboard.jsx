import React from "react";
import { Box } from "@mui/material";
import Navbar from '../../components/navbar/navbar';
import DashBoard from '../../assets/SideBar/dashBoard.png';
import AssignTask from '../../assets/SideBar/assignTask.png';
import MyTask from '../../assets/SideBar/myTask.png';
import DelegatedTask from '../../assets/SideBar/delegatedTask.png';
import AllTasks from '../../assets/SideBar/allTask.png';
import User from '../../assets/SideBar/users.png';
import Setting from '../../assets/SideBar/setting.png';
import Support from '../../assets/SideBar/support.png';
import LogOut from '../../assets/SideBar/logout.png';
import SideBar from '../../components/sidebar/sidebar'

const sideBarData = [
    {
        section: 1,
        name: 'Dashboard',
        icon: DashBoard
    },
    {
        section: 2,
        name: 'Assign Task',
        icon: AssignTask
    },
    {
        section: 3,
        name: 'My Task',
        icon: MyTask
    },
    {
        section: 4,
        name: 'Delegated Task',
        icon: DelegatedTask
    },
    {
        section: 5,
        name: 'All Tasks',
        icon: AllTasks
    },
    {
        section: 6,
        name: 'Users',
        icon: User
    },
    {
        section: 7,
        name: 'Setting',
        icon: Setting
    },
    {
        section: 8,
        name: 'Support',
        icon: Support
    },
]

export default function Dashboard(){
    return(
        <Box>
            <Navbar />
            <Box>
                <SideBar SideBarData={sideBarData} />
            </Box>
        </Box>
    )
}
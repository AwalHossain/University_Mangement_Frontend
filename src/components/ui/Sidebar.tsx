"use client";

import { SidebarItems } from '@/constants/SiderbarItems';
import { getUserInfo } from '@/service/auth.service';

import { Layout, Menu } from "antd";
import { useState } from "react";



const { Sider } = Layout;


const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const { role } = getUserInfo() as any;



    return (
        <Sider collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                bottom: 0,
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    color: 'white',
                    fontSize: '2rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
            >
                Awal-University
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={SidebarItems(role)} />
        </Sider>
    )
}

export default Sidebar
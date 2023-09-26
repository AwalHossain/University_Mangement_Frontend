'use client';
import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { ChildrenProps } from '@/lib/types';
import { Layout, theme } from 'antd';
import { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;



const DashboardLayout = ({ children }: ChildrenProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sidebar />
            <Contents> {children} </Contents>
        </Layout >
    );
};

export default DashboardLayout;
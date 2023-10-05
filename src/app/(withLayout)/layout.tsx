'use client';
import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { ChildrenProps } from '@/lib/types';
import { isLoggedIn } from '@/service/auth.service';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

import { Spin } from 'antd';


const DashboardLayout = ({ children }: ChildrenProps) => {
    const [loading, setLoading] = useState(false);


    const router = useRouter();
    const userLoggedIn = isLoggedIn();
    useEffect(() => {
        if (!userLoggedIn) {
            router.push('/login')
        }
        setLoading(true);
    }, [router, userLoggedIn])


    // ...

    if (!loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" />
            </div>
        );
    }


    return (
        <Layout>
            <Sidebar />
            <Contents> {children} </Contents>
        </Layout >
    );
};

export default DashboardLayout;
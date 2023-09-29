
import { ChildrenProps } from '@/lib/types';
import { Layout } from 'antd';
import Header from './Header';
import UMbreadCrumb from './UMbreadCrumb';
const { Content, Footer, Sider } = Layout;


const Contents = ({ children }: ChildrenProps) => {
    const base = 'admin'
    return (
        <Layout style={{
            minHeight: '100vh',
            color: 'black',
            backgroundColor: '',
        }}>

            <Header />
            <UMbreadCrumb
                items={
                    [
                        {
                            label: 'Home',
                            link: `/${base}/home`
                        },
                        {
                            label: 'Manage Student',
                            link: `/${base}/manage-student`
                        }
                    ]
                }
            />
            {children}
        </Layout>
    )
}

export default Contents
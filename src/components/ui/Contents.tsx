
import { ChildrenProps } from '@/lib/types';
import { Layout } from 'antd';
import UMbreadCrumb from './UMbreadCrumb';
const { Header, Content, Footer, Sider } = Layout;


const Contents = ({ children }: ChildrenProps) => {
    const base = 'admin'
    return (
        <Layout style={{
            minHeight: '100vh',
            color: 'black',
            backgroundColor: '',
        }}>

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
        </Layout>
    )
}

export default Contents
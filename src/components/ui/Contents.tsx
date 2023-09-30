
import { ChildrenProps } from '@/lib/types';
import { Layout } from 'antd';
import Header from './Header';
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
            {children}
        </Layout>
    )
}

export default Contents
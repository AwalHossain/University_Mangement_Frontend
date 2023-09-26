
import { ChildrenProps } from '@/lib/types';
import { Layout } from 'antd';
import Item from 'antd/es/list/Item';
const { Header, Content, Footer, Sider } = Layout;


const Contents = ({ children }: ChildrenProps) => {
    return (
        <Layout style={{
            minHeight: '100vh',
            color: 'black',
            backgroundColor: '',
        }}>

            <Item>Hello</Item>
        </Layout>
    )
}

export default Contents
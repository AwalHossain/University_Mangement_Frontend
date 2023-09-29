import { removeUserInfo } from '@/service/auth.service';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
const { Header: AntHeader } = Layout


const Header = () => {


    const logout = () => {
        removeUserInfo();
        console.log('logout')
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button onClick={logout} type='text' danger> Logout </Button>
            )
        }
    ]


    return (
        <AntHeader>
            <div className="demo-logo" />
            <Row
            >
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space wrap size={16}>

                            <Avatar size="large" icon={<UserOutlined />} />

                        </Space>
                    </a>
                </Dropdown>
            </Row>
        </AntHeader>
    )
}

export default Header
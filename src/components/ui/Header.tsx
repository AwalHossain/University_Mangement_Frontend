import { getUserInfo, removeUserInfo } from '@/service/auth.service';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { useRouter } from 'next/navigation';
const { Header: AntHeader } = Layout


const Header = () => {

    const router = useRouter();
    const logout = () => {
        removeUserInfo();
        router.push("/login");
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button onClick={logout} type='text' danger> Logout </Button>
            )
        }
    ]

    const { role } = getUserInfo() as any;
    return (
        <AntHeader style={{
            background: "#fff"
        }}>
            <div className="demo-logo" />
            <Row
                justify={'end'}
                align={'middle'}
                style={{
                    height: "100%"
                }}
            >
                <p
                    style={{
                        margin: "0px 5px",

                    }}
                >
                    {role}
                </p>
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
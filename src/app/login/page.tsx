'use client';

import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { storeUserInfo } from '@/service/auth.service';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { SubmitErrorHandler } from 'react-hook-form';
import LoginImage from '../../assets/Login-pana.png';

type FormValues = {
    id: string;
    password: string;
}

const Login = () => {
    const [userLogin] = useUserLoginMutation();
    const onSubmit: SubmitErrorHandler<FormValues> = async (data: any) => {
        const res = await userLogin(data).unwrap();
        if (res.success) {
            console.log(res);
            storeUserInfo({ acessToken: res?.data?.accessToken })
        }
    }

    return (
        <Row
            justify={'center'}
            align={'middle'}
            style={{
                height: "100vh"
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={LoginImage} width={500} alt="login" />
            </Col>
            <Col sm={12} md={8} lg={8} >
                <h1
                    style={{
                        margin: "15px 0px",
                    }}
                >
                    First login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="id" type="text" size="large" label="User Id" />
                        </div>
                        <div
                            style={{
                                margin: "15px 0px",
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="User Password"
                            />
                        </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row >
    )
}

export default Login
'use client';

import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { isLoggedIn, storeUserInfo } from '@/service/auth.service';
import { Button, Col, Row, message } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitErrorHandler } from 'react-hook-form';
import LoginImage from '../../assets/Login-pana.png';

type FormValues = {
    id: string;
    password: string;
}

const LoginPage = () => {
    const router = useRouter();
    const [userLogin] = useUserLoginMutation();


    const onSubmit: SubmitErrorHandler<FormValues> = async (data: any) => {
        const res = await userLogin(data).unwrap();
        console.log(res);

        if (res?.accessToken) {
            storeUserInfo({ acessToken: res?.accessToken })
            message.success('Login successfull');
        }

        if (isLoggedIn()) {
            router.push('/profile')
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

export default LoginPage
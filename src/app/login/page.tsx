'use client';

import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { SubmitErrorHandler } from 'react-hook-form';
import LoginImage from '../../assets/Login-pana.png';

type FormValues = {
    id: string;
    password: string;
}

const Login = () => {

    const onsubmit: SubmitErrorHandler<FormValues> = async (data: any) => {
        console.log(data)
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
                <h1 style={{
                    margin: "15px 0px",
                }}>First Login User</h1>
                <Form submitHandler={onsubmit} >
                    <div
                        style={{
                            margin: "15px 0px",
                        }}
                    >
                        <FormInput
                            type='text'
                            name='id' placeholder='user id' size='large' label='User Id' />
                    </div>
                    <div
                        style={{
                            margin: "15px 0px",
                        }}
                    >
                        <FormInput
                            type='password'
                            name='password' placeholder='user password' size='large' label='User password' />
                    </div>

                    <Button type='primary' htmlType='submit' size='large' block> Submit </Button>
                </Form>
            </Col>
        </Row >
    )
}

export default Login
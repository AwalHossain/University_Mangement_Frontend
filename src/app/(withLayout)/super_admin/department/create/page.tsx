'use client'

import Form from "@/components/form/Form"
import FormInput from "@/components/form/FormInput"
import UMbreadCrumb from "@/components/ui/UMbreadCrumb"
import { useAddDepartmentMutation } from "@/redux/api/departmentApi"
import { Button, Col, Row, message } from "antd"

const CreateDepartmentPage = () => {
    const base = 'super_admin'

    const [addDepartment] = useAddDepartmentMutation()

    const handleSubmit = async (value: any) => {
        message.loading('Adding Department...')
        try {
            console.log(value)
            await addDepartment(value)
            message.success('Department Added Successfully')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>

            <UMbreadCrumb
                items={
                    [
                        {
                            label: `${base}`,
                            link: `/${base}`
                        },
                        {
                            label: 'Manage Department',
                            link: `/${base}/department`
                        }
                    ]
                }
            />
            <h1>Create Department</h1>
            <br />
            <div
                style={{
                    padding: "15px"
                }}
            >

                <Form submitHandler={handleSubmit}>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput name="title" label="Title" size="large" />
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default CreateDepartmentPage
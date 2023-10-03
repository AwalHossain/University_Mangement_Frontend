import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import UMbreadCrumb from '@/components/ui/UMbreadCrumb';
import { Button, Col, Row } from 'antd';

const CreateDepartmentPage = () => {
    const base = "super_admin";
    const handleSubmit = async (value: any) => {
        try {
            console.log(value);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <UMbreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "department", link: `/${base}/department` },
                ]}
            />

            <h1>Create Department</h1>

            <Form submitHandler={handleSubmit} >
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default CreateDepartmentPage
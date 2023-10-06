'use client';

import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { useDepartmentQuery, useUpdateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

interface IEditDepartmentPage {
    params: any;
}

const EditDepartmentPage = ({ params }: IEditDepartmentPage) => {
    const base = 'super_admin';

    const { id } = params;
    const { data, isLoading } = useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation();



    const onSubmit = async (values: any) => {
        console.log(values, 'values');
        message.loading("Updating.....");

        try {
            const data = await updateDepartment({ id, body: values });
            message.success("Department updated successfully");
        } catch (error) {
            message.error("Something went wrong");
            console.log(error)
        }
    };

    // @ts-ignore
    const defaultValues = {
        title: data?.title || "",
    };
    console.log(defaultValues, 'milo');

    return (
        <div>
            <UMbreadCrumb
                items={
                    [
                        {
                            label: `${base}`,
                            link: `/${base}`
                        },
                    ]
                }
            />

            <div
                style={{
                    padding: "10px"
                }}
            >
                <ActionBar title="Update Department">{ }</ActionBar>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput name="title" label="Title" />
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditDepartmentPage
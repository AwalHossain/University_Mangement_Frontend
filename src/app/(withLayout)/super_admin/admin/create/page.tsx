'use client';
import Form from "@/components/form/Form";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FormSelectedField from "@/components/form/FormSelectedField";
import FormTextArea from "@/components/form/FormTextArea";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/adminSchema";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateAdminPage = () => {
    const base = 'super_admin';
    const { data, isLoading } = useDepartmentsQuery(undefined)
    // @ts-ignore
    const departments: IDepartment[] = data?.departments;

    const departmentOptions =
        departments &&
        departments?.map((department) => {
            return {
                label: department?.title,
                value: department?.id,
            };
        });

    const [addAdminWithFormData] = useAddAdminWithFormDataMutation();

    const onSubmit = async (data: any) => {
        console.log(data, 'from admin create page');

        const obj = { ...data };
        const file = obj['file'];
        delete obj['file'];

        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', JSON.stringify(obj));
        try {
            message.loading('Please wait...',)
            const res = await addAdminWithFormData(formData).unwrap();
            console.log(res, 'from admin create page')
            message.success('Admin created successfully')
        } catch (err) {
            message.error('Something went wrong')
            console.log(err)
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
                            label: 'Admin',
                            link: `/${base}/admin`
                        }
                    ]
                }
            />

            <div
                style={{
                    padding: '16px',
                }}
            >
                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    textAlign: 'center'
                }}>Create Admin</h1>


                {/* create admin page using react hook form */}

                <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
                    <div
                        style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "5px",
                            padding: "15px",
                            marginBottom: "10px",
                        }}
                    >
                        <p
                            style={{
                                fontWeight: 'bold',
                                marginBottom: '16px'
                            }}
                        >Admin Information</p>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8}
                                style={{
                                    marginBottom: '10px'
                                }}
                            >
                                <FormInput name="admin.name.firstName" type="text" size="large" label="First Name" />
                            </Col>
                            <Col className="gutter-row" span={8} style={{
                                marginBottom: '10px'
                            }}

                            >
                                <FormInput name="admin.name.middleName" type="text" size="large" label="Middle Name" />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormInput name="admin.name.lastName" type="text" size="large" label="Last Name" />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormInput type="password" name="password" size="large" label="password" />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormSelectedField
                                    label="Gender"
                                    size="large"
                                    name="admin.gender"
                                    options={genderOptions}
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormSelectedField
                                    label="Mangement Department"
                                    size="large"
                                    name="admin.managementDepartment"
                                    options={departmentOptions}
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <UploadImage name="file" />
                            </Col>
                        </Row>
                    </div>

                    {/*    Basic Info */}

                    <div
                        style={{
                            border: '1px solid #ccc',
                            padding: '16px',
                            borderRadius: '5px',
                            marginBottom: '16px'
                        }}
                    >
                        <p
                            style={{
                                fontWeight: 'bold',
                                marginBottom: '16px'
                            }}
                        >Basic Information</p>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8}
                                style={{
                                    marginBottom: '10px'
                                }}
                            >
                                <FormInput
                                    type="email"
                                    name="admin.email"
                                    size="large"
                                    label="Email address"
                                />
                            </Col>
                            <Col className="gutter-row" span={8} style={{
                                marginBottom: '10px'
                            }}

                            >
                                <FormInput
                                    type="text"
                                    name="admin.contactNo"
                                    size="large"
                                    label="Contact No."
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormInput
                                    type="text"
                                    name="admin.emergencyContactNo"
                                    size="large"
                                    label="Emergency Contact No."
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormSelectedField
                                    label="Blood Group"
                                    size="large"
                                    name="admin.bloodGroup"
                                    options={bloodGroupOptions}
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormInput
                                    type="text"
                                    name="admin.designation"
                                    size="large"
                                    label="Designation"

                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormDatePicker
                                    name="admin.dateOfBirth"
                                    label="Date of birth"
                                    size="large"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormTextArea
                                    label="Present Address"
                                    name="admin.presentAddress"
                                    placeholder="Present Address"
                                    rows={4}
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom: '10px'
                                }}
                                className="gutter-row" span={8}>
                                <FormTextArea
                                    label="Parmanent Address"
                                    name="admin.permanentAddress"
                                    placeholder="Parmanent Address"
                                    rows={4}
                                />
                            </Col>
                        </Row>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </div>
                </Form>

            </div>

        </div>
    )
}

export default CreateAdminPage
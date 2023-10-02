'use client';

import StepperForm from "@/components/stepperForm/StepperForm";
import GuardianInfo from "@/components/studentForm/GuardianInfo";
import LocalGuardianInfo from "@/components/studentForm/LocalGuardianInfo";
import StudentBasicInfo from "@/components/studentForm/StudentBasicInfo";
import StudentInfo from "@/components/studentForm/StudentInfo";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";

const CreateStuentPage = () => {
    const base = 'super_admin'
    const steps = [
        {
            title: 'Student Information',
            content: <StudentInfo />,
        },
        {
            title: 'Basic Information',
            content: <StudentBasicInfo />,
        },
        {
            title: 'Guardian Information',
            content: <GuardianInfo />,
        },
        {
            title: 'Local Guardian Information',
            content: <LocalGuardianInfo />,
        },
    ];

    const handleStudentSubmit = async (value: any) => {
        try {
            console.log(value)
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
                            label: 'Manage student',
                            link: `/${base}/manage-student`
                        }
                    ]
                }
            />

            <div style={{
                padding: '24px',
            }}>
                <StepperForm
                    submitHandler={(value) => handleStudentSubmit(value)}
                    steps={steps} />
            </div>
        </div>
    )
}

export default CreateStuentPage
'use client';
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
    const { role } = getUserInfo() as any;
    return (
        <div>
            <UMbreadCrumb
                items={
                    [

                        {
                            label: 'super_admin',
                            link: `/${role}`
                        }
                    ]
                }
            />
            <Link href={`/${role}/manage-student/add`}>
                <Button type="primary">Add Student</Button>
            </Link>
        </div>
    )
}

export default ManageStudentPage
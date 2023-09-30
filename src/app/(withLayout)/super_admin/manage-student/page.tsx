'use client';
import ActionBar from "@/components/ui/ActionBar";
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

            <ActionBar title="Student List">
                <Link href={`/${role}/manage-student/create`}>
                    <Button type="primary">Add Student</Button>
                </Link>
            </ActionBar>
        </div>
    )
}

export default ManageStudentPage
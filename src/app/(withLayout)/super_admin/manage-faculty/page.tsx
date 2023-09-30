'use client';

import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const MangeFacultyPage = () => {
    const { role } = getUserInfo() as any;
    return (
        <div>
            <UMbreadCrumb
                items={
                    [
                        {
                            label: `${role}`,
                            link: `/${role}`
                        }
                    ]
                }
            />
            <Link href={`/${role}/manage-student/add`}>
                <Button type="primary">Add Faculty</Button>
            </Link>
        </div>
    )
}

export default MangeFacultyPage